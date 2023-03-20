import {gql} from '@apollo/client'
import { generateApolloClient, } from "@/apollo"
import LoginForm from "@/components/login/loginForm"
import LoginHeader from "@/components/login/loginHeader"
import { LoginPageUiQuery } from '@/graphql/__generated__/graphql'

const loginPageUIQuery = gql`
  query loginPageUI {
      loginPageUI{
        header {
          title,
        },
        form{
          email {label,placeholder},
          password {label,placeholder},
          submit {label}
        },
        signupLink {label, linkLabel, link},
        forgotPasswordLink {label, link}
      }
    }
`

interface ILoginPageProps{

}

export default async function loginPage(props : ILoginPageProps) {
  const client = generateApolloClient();
  const {data ,loading, error} = await client.query<LoginPageUiQuery>({query: loginPageUIQuery});
  
  if (loading){
    return <p>Loading...</p>
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      {data.loginPageUI.header.title}
    </h1>
    <p>{data.loginPageUI.form.email.label}</p>
    <LoginHeader/>
    <LoginForm/>
    </>
  )
}
