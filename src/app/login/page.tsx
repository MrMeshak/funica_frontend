import { generateApolloClient } from '@/apollo';
import LoginForm from '@/components/loginSignup/loginForm';
import LoginHeader from '@/components/loginSignup/loginHeader';
import { LoginPageUiQuery } from '@/graphql/__generated__/graphql';
import { gql } from '../../graphql/__generated__/gql';

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
  const client = generateApolloClient();
  const UiQueryResult = await client.query<LoginPageUiQuery>({ query: loginPageUiQuery });
  return { UiQueryResult };
};

interface ILoginPageProps {}

export default async function loginPage(props: ILoginPageProps) {
  const { UiQueryResult } = await getLoginPageData();
  const UiData = UiQueryResult.data.loginPageUi;

  if (UiQueryResult.loading) {
    return <p>Loading...</p>;
  }

  if (UiQueryResult.error) {
    return <p>Error: {UiQueryResult.error.message}</p>;
  }

  return (
    <>
      <LoginHeader UiData={UiData} />
      <LoginForm UiData={UiData} />
    </>
  );
}
