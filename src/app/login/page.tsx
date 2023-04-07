import { getApolloClient } from '@/apollo';
import LoginForm from '@/components/loginSignup/loginForm';
import LoginHeader from '@/components/loginSignup/loginHeader';
import { LoginPageUiQuery } from '@/graphql/__generated__/graphql';
import { gql } from '@/graphql/__generated__/gql';

const loginPageUiQuery = gql(/* GraphQL */ `
  query loginPageUi {
    loginPageUi {
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
        submit {
          label
        }
      }
      signupLink {
        label
        linkLabel
        link
      }
      forgotPasswordLink {
        label
        link
      }
    }
  }
`);

const getLoginPageData = async () => {
  const client = getApolloClient();
  const uiQueryResult = await client.query<LoginPageUiQuery>({ query: loginPageUiQuery });
  return { uiQueryResult };
};

interface ILoginPageProps {}

export default async function loginPage(props: ILoginPageProps) {
  const { uiQueryResult } = await getLoginPageData();
  const uiData = uiQueryResult.data.loginPageUi;

  if (uiQueryResult.loading) {
    return <p>Loading...</p>;
  }

  if (uiQueryResult.error) {
    return <p>Error: {uiQueryResult.error.message}</p>;
  }

  return (
    <>
      <LoginHeader uiData={uiData} />
      <LoginForm uiData={uiData} />
    </>
  );
}
