'use client';
import { useFormik } from "formik";

export interface ILoginFormProps {

}

interface ILoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm(props : ILoginFormProps) {
  
  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: ILoginFormValues) => {
  
  }

  const validate = (values: ILoginFormValues) => {

  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
    validateOnChange: false,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input className="border" id="email" name="email" type="text" placeholder="Email"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      <input className= "" id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      <button className="" type="submit">Submit</button>
    </form>
  )



}