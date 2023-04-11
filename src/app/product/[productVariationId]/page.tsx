import { getApolloClient } from '@/apollo';
import { gql } from '@/graphql/__generated__/gql';
import { Gallery } from '@/components/product/gallery';
import { ProductHeader } from '@/components/product/header';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';
import { ProductInfo } from '@/components/product/info';

const productPageUiQuery = gql(/* GraphQL */ `
  query productPageUi($input: ProductPageUiInput!) {
    productPageUi(input: $input) {
      ... on ProductPageUi {
        __typename

        productGallery {
          images {
            id
            alt
            url
            height
            width
          }
        }

        productHeader {
          title
          variationName
          size
          price
        }

        productInfo {
          descriptionTitle
          description
          variationTitle
          variations {
            id
            variationName
            color
            colorHex
            size
          }
        }

        productForm {
          quantityField {
            label
            min
            max
          }
          submit {
            label
          }
        }
      }
      ... on NotFoundError {
        __typename
        message
      }
    }
  }
`);

interface IProductPageProps {
  params: { productVariationId: string };
}

const getProductPageData = async (productVariationId: string) => {
  const client = getApolloClient();
  const uiQueryResult = await client.query<ProductPageUiQuery>({ query: productPageUiQuery, variables: { input: { productVariationId } } });
  return { uiQueryResult };
};

export default async function ProductPage({ params }: IProductPageProps) {
  const { productVariationId } = params;
  const { uiQueryResult } = await getProductPageData(productVariationId);

  if (uiQueryResult.error) {
    return <p>Error: {uiQueryResult.error.message}</p>;
  }

  const uiData = uiQueryResult.data.productPageUi;

  if (uiData.__typename === 'NotFoundError') {
    return <p>{uiData.message}</p>;
  }

  return (
    <div>
      <Gallery uiData={uiData} />
      <ProductHeader uiData={uiData} />
      <ProductInfo uiData={uiData} productVariationId={productVariationId} />
    </div>
  );
}
