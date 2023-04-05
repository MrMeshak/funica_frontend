'use client';
import { useState } from 'react';
import Link from 'next/link';
import validator from 'validator';
import { useFormik } from 'formik';
import { gql } from '../../graphql/__generated__/gql';
import { SignupMutation, SignupPageUiQuery } from '@/graphql/__generated__/graphql';
import { getApolloClient } from '../../apollo/index';
import { AlertCircleIcon, LockIcon, MessageIcon, PersonIcon, TickIcon } from '../utils/icons/iconly';
import { TextInputField } from '../utils/input/textInput';
import { PasswordInputField, PasswordValidationInfo } from '../utils/input/passwordInput';
import { Button } from '../utils/button/button';
import { useUserStore } from '@/store/userStore';
import { AlertCard, IAlertCardProps } from '../utils/alert/alert';
import { useMutation, useQuery } from '@apollo/client';

const signupMutation = gql(/* GraphQL */ `
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      ... on User {
        id
        firstname
        lastname
        profileImg
      }
      ... on InvalidInputError {
        message
        invalidFields {
          field
          message
        }
      }
    }
  }
`);

export interface ISignupFormProps {
  UiData: SignupPageUiQuery['signupPageUi'];
}

export interface ISignupFormValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export default function SignupForm({ UiData }: ISignupFormProps) {
  const formData = UiData.form;
  const loginLinkData = UiData.loginLink;
  const { setUser } = useUserStore();

  const [alertProps, setAlertProps] = useState<IAlertCardProps | null>(null);

  const initialValues: ISignupFormValues = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  };

  const onSubmit = async (values: ISignupFormValues) => {
    const client = getApolloClient();
    const signupMutationResult = await client.mutate<SignupMutation>({ mutation: signupMutation, variables: { input: values } });
    console.log(signupMutationResult);

    if (signupMutationResult.errors || signupMutationResult.data == null) {
      console.log(signupMutationResult.errors);
      setAlertProps({ type: 'error', message: signupMutationResult.errors ? signupMutationResult.errors[0].message : 'Something went wrong', Icon: <AlertCircleIcon /> });
      return;
    }

    const signupData = signupMutationResult.data.signup;

    if (signupData?.__typename === 'User') {
      setUser({ id: signupData.id, firstname: signupData.firstname, lastname: signupData.lastname, profileImg: signupData.profileImg });
      setAlertProps({ type: 'success', message: 'Signup successful', Icon: <TickIcon /> });
      return;
    }

    if (signupData?.__typename === 'InvalidInputError') {
      setAlertProps({ type: 'error', message: signupData.invalidFields[0]?.message || signupData.message, Icon: <AlertCircleIcon /> });
      return;
    }
  };

  const validate = (values: ISignupFormValues) => {
    const errors: Partial<ISignupFormValues> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length < 2) {
      errors.firstname = 'First name must be at least 2 characters';
    }

    if (!values.lastname) {
      errors.lastname = 'Required';
    } else if (values.lastname.length < 2) {
      errors.lastname = 'Last name must be at least 2 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
    validateOnChange: false
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className=" mx-8 mt-8 mb-4">
        <div className="mb-6">
          <TextInputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="firstname"
            name="firstname"
            placeholder={formData.lastname.placeholder || ''}
            Icon={<PersonIcon />}
            hasError={Boolean(formik.errors.firstname)}
            errorMessage={formik.errors.firstname}
            touched={formik.touched.firstname}
          />
        </div>

        <div className="mb-5">
          <TextInputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="lastname"
            name="lastname"
            placeholder={formData.lastname.placeholder || ''}
            Icon={<PersonIcon />}
            hasError={Boolean(formik.errors.lastname)}
            errorMessage={formik.errors.lastname}
            touched={formik.touched.lastname}
          />
        </div>

        <div className="mb-5">
          <TextInputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            name="email"
            placeholder={formData.email.placeholder || ''}
            Icon={<MessageIcon />}
            hasError={Boolean(formik.errors.email)}
            errorMessage={formik.errors.email}
            touched={formik.touched.email}
          />
        </div>

        <div className="mb-5">
          <PasswordInputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            name="password"
            placeholder={formData.password.placeholder || ''}
            Icon={<LockIcon />}
            hasError={Boolean(formik.errors.password)}
            errorMessage={formik.errors.password}
            touched={formik.touched.password}
          />
        </div>
        {formik.touched.password ? (
          <div className="mb-5">
            <PasswordValidationInfo password={formik.values.password} />
          </div>
        ) : null}

        <Button type="submit" color="black" shape="rounded">
          {formData.submit.label}
        </Button>
      </form>

      <div>{alertProps ? <AlertCard type={alertProps.type} Icon={alertProps.Icon} message={alertProps.message} /> : null}</div>

      <div className="mb-5 flex justify-center">
        <h6 className=" mr-1 text-greyScale-500">{loginLinkData.label}</h6>
        <Link href={loginLinkData.link || '/login'}>{loginLinkData.linkLabel}</Link>
      </div>
    </>
  );
}
