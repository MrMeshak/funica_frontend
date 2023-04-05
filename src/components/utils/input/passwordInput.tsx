import React, { ReactElement, useState, InputHTMLAttributes } from 'react';
import { CrossIcon, EyeIcon, EyeSlashIcon, IIconProps, TickIcon } from '../icons/iconly';
import { InputFieldError } from './textInput';

export interface IPasswordInputProps {
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onBlur: InputHTMLAttributes<HTMLInputElement>['onBlur'];
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  Icon: ReactElement<IIconProps>;
  hasError: boolean;
  errorMessage?: string;
  touched?: boolean;
}

export function PasswordInputField(props: IPasswordInputProps) {
  const { onChange, onBlur, id, name, placeholder, Icon, hasError, errorMessage, touched } = props;
  const [passwordHidden, setPasswordHidden] = useState(true);

  const togglePasswordHidden = () => {
    if (passwordHidden) {
      setPasswordHidden(false);
    } else {
      setPasswordHidden(true);
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">{Icon}</div>
      <input
        onChange={onChange}
        onBlur={onBlur}
        className=" w-full  rounded-xl bg-greyScale-50 px-10 py-3 font-light text-greyScale-900 placeholder-greyScale-500 focus:outline-none focus:ring-2 focus:ring-dark3"
        id={id}
        name={name}
        type={passwordHidden ? 'password' : 'text'}
        placeholder={placeholder}
      />
      <button type="button" onClick={togglePasswordHidden} className=" absolute inset-y-0 right-3 text-greyScale-500">
        {passwordHidden ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
      {touched && errorMessage ? <InputFieldError message={props.errorMessage} /> : null}
    </div>
  );
}

export interface IPasswordValidatorInfoProps {
  password: string;
}

export function PasswordValidationInfo({ password }: IPasswordValidatorInfoProps) {
  const hasUppercase = (password: string) => {
    return /[A-Z]/.test(password);
  };
  const hasLowercase = (password: string) => {
    return /[a-z]/.test(password);
  };
  const hasNumber = (password: string) => {
    return /[0-9]/.test(password);
  };
  const hasSpecialCharacter = (password: string) => {
    return /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(password);
  };
  const hasMinLength = (password: string) => {
    return password.length >= 8;
  };

  return (
    <div className=" rounded-xl bg-greyScale-50 px-2 ">
      <PasswordValidationCard passedValidation={hasUppercase(password)} description="Must contain at least one uppercase letter" />
      <PasswordValidationCard passedValidation={hasLowercase(password)} description="Must contain at least one lowercase letter" />
      <PasswordValidationCard passedValidation={hasNumber(password)} description="Must contain at least one number" />
      <PasswordValidationCard passedValidation={hasSpecialCharacter(password)} description="Must contain at least one special character" />
      <PasswordValidationCard passedValidation={hasMinLength(password)} description="Must be at least 8 characters long" />
    </div>
  );
}

export interface IPasswordValidatorInfoCardProps {
  passedValidation: boolean;
  description: string;
}

export function PasswordValidationCard({ passedValidation, description }: IPasswordValidatorInfoCardProps) {
  return (
    <>
      {!passedValidation ? (
        <div className="flex items-center  text-xs text-greyScale-400">
          <CrossIcon className="h-4.5 w-5.5" />
          <span className="ml-2">{description}</span>
        </div>
      ) : null}
    </>
  );
}
