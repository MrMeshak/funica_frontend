'use client';
import Image from 'next/image';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';
import { Slider } from '../utils/slider/slider';

interface IGralleryProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
}

export function Gallery({ uiData }: IGralleryProps) {
  const images = uiData.productGallery?.images ?? [];

  return (
    <div>
      <Slider images={images} />
    </div>
  );
}
