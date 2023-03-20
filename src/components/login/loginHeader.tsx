import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../utils/logo/logo";


export interface ILoginHeaderProps {
}

export default function LoginHeader (props: ILoginHeaderProps) {
  return (
    <div>
      <Link className="text-sm" href="/"><FontAwesomeIcon icon= {faArrowLeft} size='5x'/></Link>
      <Logo width={40}/>
    </div>
  );
}
