import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SignupPageUiQuery } from '@/graphql/__generated__/graphql';
import Logo from '../utils/logo/logo';

export interface ISignupHeaderProps {
  UiData: SignupPageUiQuery['signupPageUi'];
}

export default function SignupHeader({ UiData }: ISignupHeaderProps) {
  const headerData = UiData.header;

  return (
    <div>
      <div className="mx-8 my-4">
        <Link className="text-sm" href="/">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="my-8">
          <Logo width={100} />
        </div>
        <h1 className=" text-2xl font-bold">{headerData.title}</h1>
      </div>
    </div>
  );
}
