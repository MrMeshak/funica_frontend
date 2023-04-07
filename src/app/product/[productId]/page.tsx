import { getApolloClient } from '@/apollo';
import Gallery from '@/components/product/gallery';
import { gql } from '@/graphql/__generated__/gql';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';

interface IProductPageProps {
  params: { productId: string };
}

const productPageUiQuery = gql(/* GraphQL */ `
  query productPageUi($input: ProductPageUiInput!) {
    productPageUi(input: $input) {
      ... on ProductPageUi {
        __typename
        productGallery {
          gallery {
            variationId
            images
          }
        }
        productHeader {
          title
          subtitle
        }
        productInfo {
          productDescription {
            label
            description
          }
        }
        productForm {
          productVariationField {
            label
            variations {
              variationId
              color
              colorHex
            }
          }
          productQuantityField {
            label
            min
            max
          }
          productAddToCartBtn {
            label
          }
        }
        productPrice {
          price
        }
      }
      ... on NotFoundError {
        __typename
        message
      }
    }
  }
`);

const getProductPageData = async (productId: string) => {
  const client = getApolloClient();
  const uiQueryResult = await client.query<ProductPageUiQuery>({ query: productPageUiQuery, variables: { input: { productId } } });
  return { uiQueryResult };
};

export default async function ProductPage({ params }: IProductPageProps) {
  const productId = params.productId;
  const { uiQueryResult } = await getProductPageData(productId);

  if (uiQueryResult.error) {
    return <p>Error: {uiQueryResult.error.message}</p>;
  }

  const uiData = uiQueryResult.data.productPageUi;

  if (uiData.__typename === 'NotFoundError') {
    return <p>{uiData.message}</p>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <h2>{uiData.productHeader.title}</h2>
      <Gallery uiData={uiData} />
    </div>
  );
}
