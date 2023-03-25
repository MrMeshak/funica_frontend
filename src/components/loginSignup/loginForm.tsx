'use client';
import Link from 'next/link';
import { LoginPageUiQuery } from '@/graphql/__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

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

  const initialValues: ILoginFormValues = {
    email: '',
    password: ''
  };

  const onSubmit = (values: ILoginFormValues) => {};

  const validate = (values: ILoginFormValues) => {};

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
    validateOnChange: false
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="m-8">
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
            <FontAwesomeIcon className=" text-" icon={faEnvelope} />
          </div>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" w-full  rounded-xl bg-greyScale-50 px-9 py-3 font-light text-greyScale-900 placeholder-greyScale-500 focus:outline-none focus:ring-2 focus:ring-dark3"
            id="email"
            name="email"
            type="text"
            placeholder={formData.email.placeholder || ''}
          />
        </div>

        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
            <FontAwesomeIcon className=" text-" icon={faLock} />
          </div>

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" w-full  rounded-xl bg-greyScale-50 px-9 py-3 font-light text-greyScale-900 placeholder-greyScale-500 focus:outline-none focus:ring-2 focus:ring-dark3"
            id="password"
            name="password"
            type="password"
            placeholder={formData.password.placeholder || ''}
          />
        </div>
        <button type="submit" className=" w-full cursor-pointer rounded-full border bg-primary-900 py-3 px-3 py-1 text-primary-100">
          {formData.submit.label}
        </button>
      </form>

      <div className="mb-4 flex justify-center">
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
    </>
  );
}
