import Image from 'next/image'
import { Urbanist } from 'next/font/google'

const inter = Urbanist({ subsets: ['latin'] })

export default function Page() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello, Next.js!
    </h1>
  )
}

