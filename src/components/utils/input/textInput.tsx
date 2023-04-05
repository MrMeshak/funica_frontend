'useClient';
import { InputHTMLAttributes, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { EyeIcon, EyeSlashIcon, IIconProps } from '../icons/iconly';

export interface ITextInputFieldProps {
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

export function TextInputField(props: ITextInputFieldProps) {
  const { onChange, onBlur, id, name, placeholder, Icon, errorMessage, touched } = props;
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">{Icon}</div>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        className=" w-full  rounded-xl bg-greyScale-50 py-3 pl-10 pr-3 font-light text-greyScale-900 placeholder-greyScale-500 focus:outline-none focus:ring-2 focus:ring-dark3"
        id={props.id}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
      />
      {touched && errorMessage ? <InputFieldError message={props.errorMessage} /> : null}
    </div>
  );
}

export interface IInputFieldErrorProps {
  message?: string;
}

export function InputFieldError({ message }: IInputFieldErrorProps) {
  return <p className="absolute -bottom-4 text-xs italic text-greyScale-500">{message}</p>;
}
