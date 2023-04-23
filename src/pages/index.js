import Image from 'next/image'
import { Inter } from 'next/font/google'
import Certificate from './certificate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      Hey I am Don
      <Certificate/>
    </main>
  )
}
