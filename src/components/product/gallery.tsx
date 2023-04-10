'use client';
import Image from 'next/image';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';

interface IGralleryProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
}

export default function Gallery({ uiData }: IGralleryProps) {
  return <div></div>;
}
