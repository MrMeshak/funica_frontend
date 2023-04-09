import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const inter = Urbanist({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello, Next.js!
        <div className="w-6">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </h1>
    </>
  );
}
