import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <header className="bg-white">
      <span className="place-content-end p-1 text-xs right-6 absolute text-gray-500 font-normal">
        Free shipping available 🇨🇦
      </span>
      <div className="bg-white p-5 flex justify-between gap-2 font-normal space-x-14 text-sm items-center" >
        <div className="gap-2 font-normal space-x-14 items-center flex">
          <img src="pages/logo.png"/>
          <a href="/#">Bags</a>
          <a href="/#">Wallets</a>
          <a href="/#">Accessories</a>
          <a href="/#">Tech</a>
          <a href="/#">Travel</a>
          <a href="/#">Collections</a>
          <a href="/#">About Us</a>
        </div>
        <div className="gap-2 font-normal space-x-4 text-xs flex justify-end text-gray-500 p-8" >
          <a href="/#">Help</a>
          <a href="/#">Find In-Store</a>
          <img src='src/pages/email.png' alt='mail'/>
        </div>
      </div>
    </header>
    
  )
}
