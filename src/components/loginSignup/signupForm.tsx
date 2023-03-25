'use client';

import { LoginPageUiQuery } from '@/graphql/__generated__/graphql';

export interface ISignupFormProps {
  UiData: LoginPageUiQuery['loginPageUi'];
}

export default function SignupForm({ UiData }: ISignupFormProps) {
  return <div>signup form</div>;
}
