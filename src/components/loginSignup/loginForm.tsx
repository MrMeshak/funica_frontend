'use client';
import { useState } from 'react';
import Link from 'next/link';
import validator from 'validator';
import { LoginPageUiQuery, LoginQuery } from '@/graphql/__generated__/graphql';
import { faLock, faCircleExclamation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { gql } from '../../graphql/__generated__/gql';
import { getApolloClient } from '@/apollo/index';
import { AlertCircleIcon, LockIcon, MessageIcon, TickIcon } from '../utils/icons/iconly';
import { PasswordInputField } from '../utils/input/passwordInput';
import { TextInputField } from '../utils/input/textInput';
import { Button } from '../utils/button/button';
import { AlertCard, IAlertCardProps } from '../utils/alert/alert';
import { useUserStore } from '@/store/userStore';

const loginQuery = gql(/* GraphQL */ `
  query login($input: LoginInput!) {
    login(input: $input) {
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
      ... on InvalidCredentialsError {
        message
      }
    }
  }
`);

export interface ILoginFormProps {
  UiData: LoginPageUiQuery['loginPageUi'];
}

interface ILoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm({ UiData }: ILoginFormProps) {
  const formData = UiData.form;
  const signupLinkData = UiData.signupLink;
  const forgotPasswordLinkData = UiData.forgotPasswordLink;
  const { setUser, user } = useUserStore();

  const [alertProps, setAlertProps] = useState<IAlertCardProps | null>(null);

  const initialValues: ILoginFormValues = {
    email: '',
    password: ''
  };

  const onSubmit = async (values: ILoginFormValues) => {
    const client = getApolloClient();
    const loginQueryResult = await client.query<LoginQuery>({ query: loginQuery, variables: { input: values } });
    console.log(loginQueryResult);

    if (loginQueryResult.error) {
      setAlertProps({ type: 'error', message: loginQueryResult.error.message, Icon: <AlertCircleIcon /> });
      return;
    }

    const loginData = loginQueryResult.data.login;

    if (loginData?.__typename === 'User') {
      setUser({ id: loginData.id, firstname: loginData.firstname, lastname: loginData.lastname, profileImg: loginData.profileImg });

      setAlertProps({ type: 'success', message: 'Login successful', Icon: <TickIcon /> });
      return;
    }
    if (loginData?.__typename === 'InvalidInputError') {
      setAlertProps({ type: 'error', message: loginData.message, Icon: <AlertCircleIcon /> });
      return;
    }
    if (loginData?.__typename === 'InvalidCredentialsError') {
      setAlertProps({ type: 'error', message: loginData.message, Icon: <AlertCircleIcon /> });
      return;
    }
  };

  const validate = (values: ILoginFormValues) => {
    const errors: Partial<ILoginFormValues> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
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
      <form onSubmit={formik.handleSubmit} className="mx-8 mt-8 mb-4">
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
        <Button type="submit" color="black" shape="rounded">
          {formData.submit.label}
        </Button>
      </form>
      <div className="mx-8">{alertProps && <AlertCard type={alertProps.type} message={alertProps.message} Icon={alertProps.Icon} />}</div>

      <div className="mx-8 ">
        <div className="mb-4 mt-4 flex justify-center">
          <Link href="\forgot-password">{forgotPasswordLinkData.label}</Link>
        </div>

        <div className="flex justify-center">
          <h6 className=" mr-1 text-greyScale-500">
            {signupLinkData.label} {''}
          </h6>
          <Link className="text-Primary-900" href="\signup">
            {signupLinkData.linkLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
