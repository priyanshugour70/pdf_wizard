import Image from 'next/image'
import { Inter } from 'next/font/google'
import Certificate from './certificate'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Certificate/>
      <Footer/>
    </div>
  )
}
