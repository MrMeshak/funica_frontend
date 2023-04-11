import Link from 'next/link';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';
import { VariationIndicator } from '../utils/indicator/indicator';

export interface IProductInfoProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
  productVariationId: string;
}

export function ProductInfo({ uiData, productVariationId }: IProductInfoProps) {
  const productInfoData = uiData.productInfo;

  if (!productInfoData) {
    return null;
  }

  return (
    <div className="px-5 py-4">
      <h3 className=" mb-2 font-bold">{productInfoData.descriptionTitle}</h3>
      <p className=" mb-4 font-light">{productInfoData.description}</p>
      <h3 className="mb-2 font-bold">{productInfoData.variationTitle}</h3>
      <ul className="flex gap-2">
        {productInfoData.variations.map((variation) => {
          return (
            <li key={variation.id}>
              <Link href={`/product/${variation.id}`} className="">
                <button className="rounded-full">
                  <VariationIndicator active={variation.id === productVariationId} color={variation.colorHex} />
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
