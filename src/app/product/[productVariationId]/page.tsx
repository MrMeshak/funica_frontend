import { getApolloClient } from '@/apollo';
import Gallery from '@/components/product/gallery';
import { gql } from '@/graphql/__generated__/gql';
import { ProductPageUiQuery } from '@/graphql/__generated__/graphql';

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
          description
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
      <h1>Product Page</h1>
      <p>{uiData.productHeader?.title}</p>
    </div>
  );
}
