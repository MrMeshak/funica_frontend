import SignupHeader from '@/components/loginSignup/signupHeader';
import SignupForm from '@/components/loginSignup/signupForm';
import { gql } from '../../graphql/__generated__/gql';
import { generateApolloClient } from '@/apollo';
import { SignupPageUiQuery } from '@/graphql/__generated__/graphql';

export interface ISignupPageProps {}

const signupPageUiQuery = gql(/* GraphQL */ `
  query signupPageUI {
    signupPageUi {
      header {
        title
      }
      form {
        email {
          label
          placeholder
        }
        password {
          label
          placeholder
        }
        firstname {
          label
          placeholder
        }
        lastname {
          label
          placeholder
        }
        submit {
          label
        }
      }
      loginLink {
        label
        linkLabel
        link
      }
    }
  }
`);

const getSignupPageData = async () => {
  const client = generateApolloClient();
  const UiQueryResult = await client.query<SignupPageUiQuery>({ query: signupPageUiQuery });
  return { UiQueryResult };
};

export default async function signupPage(props: ISignupPageProps) {
  const { UiQueryResult } = await getSignupPageData();

  if (UiQueryResult.loading) {
    return <p>Loading...</p>;
  }

  if (UiQueryResult.error) {
    return <p>Error: {UiQueryResult.error.message} </p>;
  }

  const UiData = UiQueryResult.data.signupPageUi;

  return (
    <>
      <SignupHeader UiData={UiData} />
    </>
  );
}
