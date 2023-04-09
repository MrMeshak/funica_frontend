'use client';
import Image from 'next/image';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';

interface IGralleryProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
}

export default function Gallery({ uiData }: IGralleryProps) {
  const gallery = uiData.productGallery.gallery;
  const images = gallery[0]?.images || [];

  return <div className=" flex items-center justify-center bg-black"></div>;
}
