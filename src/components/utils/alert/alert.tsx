import { ReactElement } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconProps } from '../icons/iconly';

export interface IAlertCardProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  Icon: ReactElement<IIconProps>;
}

export function AlertCard({ message, Icon, type }: IAlertCardProps) {
  const colorVariant = {
    success: 'bg-transparent-green/[0.2] text-green',
    error: 'bg-transparent-red/[0.2] text-red',
    warning: 'bg-transparent-yellow/[0.2] text-yellow',
    info: 'bg-transparent-blue/[0.2] text-blue'
  };

  return (
    <div className={`${colorVariant[type]} flex rounded-lg py-2 px-2`}>
      {Icon}
      <span className="ml-2 font-light">{message}</span>
    </div>
  );
}
