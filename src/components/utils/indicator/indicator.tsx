import { CircleIcon, CircleTickIcon, HeartIconOutline, HeartIconSolid } from '@/components/utils/icons/iconly';

export interface IDefaultIndicator {
  active: boolean;
}

export function SliderIndicator({ active }: IDefaultIndicator) {
  return <div className={`h-2 ${active ? 'w-6 bg-primary-900' : 'w-2 bg-greyScale-300'} rounded-full `}></div>;
}

export function FavoriteIndicator({ active }: IDefaultIndicator) {
  return active ? <HeartIconSolid className="h-8 w-8" /> : <HeartIconOutline className="h-8 w-8" />;
}

export interface IVariationIndicator {
  active: boolean;
  color: string;
}

export function VariationIndicator({ active, color }: IVariationIndicator) {
  return active ? <CircleTickIcon className="" fill={color} /> : <CircleIcon className="" fill={color} />;
}
