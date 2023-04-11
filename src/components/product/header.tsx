import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';
import { FavoriteIndicator } from '../utils/indicator/indicator';

export interface IProductHeaderProps {
  uiData: Extract<ProductPageUiQuery['productPageUi'], { __typename: 'ProductPageUi' }>;
}

export function ProductHeader({ uiData }: IProductHeaderProps) {
  const productHeaderData = uiData.productHeader;
  const currencyFormater = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

  if (!productHeaderData) {
    return null;
  }

  return (
    <>
      <div className=" px-5 pt-4 pb-2">
        <div className=" flex w-full justify-between pb-4">
          <div>
            <h1 className="text-4xl font-bold text-greyScale-900">{productHeaderData.title}</h1>
            <h3 className="-mt-1 font-light">{productHeaderData.variationName}</h3>
            <h5 className="-mt-1 font-light">{productHeaderData.size}</h5>
            <h2 className="text-2xl font-bold">${productHeaderData.price / 100}</h2>
          </div>
          <div className="text-right">
            <button>
              <FavoriteIndicator active={false} />
            </button>
            <h5>
              <span> </span> 4.8 (2 reviews)
            </h5>
          </div>
        </div>
      </div>
      <hr className="mx-5 text-greyScale-300" />
    </>
  );
}
