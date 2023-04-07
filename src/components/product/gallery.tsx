'use client';
import Image from 'next/image';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';

interface IGralleryProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
}

export default function Gallery({ uiData }: IGralleryProps) {
  const gallery = uiData.productGallery.gallery;
  const image = gallery[0]?.images[0];

  return <div className="relative">{image && <Image src={image} alt="product" width={300} height={300} />}</div>;
}
