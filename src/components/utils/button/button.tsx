import { Children, ReactElement, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconProps } from '../icons/iconly';

interface IButtonProps {
  children?: ReactNode;
  onClick?: () => void;

  type: 'button' | 'submit' | 'reset';
  color: 'light' | 'dark' | 'black';
  shape: 'rounded' | 'square';
  StartIcon?: ReactElement<IIconProps>;
  EndIcon?: ReactElement<IIconProps>;
}

export function Button(props: IButtonProps) {
  const { children, onClick, type, color, shape, StartIcon, EndIcon } = props;

  const colorVariant = {
    light: 'bg-primary-100 text-dark3',
    dark: 'bg-dark3 text-white',
    black: 'bg-black text-white'
  };

  const shapeVariant = {
    rounded: 'rounded-full',
    square: 'rounded'
  };

  return (
    <button type={type} onClick={onClick} className={`${colorVariant[color]} ${shapeVariant[shape]} w-full cursor-pointer border-none py-3 px-3`}>
      {StartIcon}
      {children}
      {EndIcon}
    </button>
  );
}
