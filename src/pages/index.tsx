import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white p-10 flex justify-evenly">
      <a>
        <img src="pages/bellroy9718.jpg" alt='hello'/>
      </a>
      <div>
        Bags
      </div>
      <div>
        Wallets
      </div>
      <div>
        Accessories
      </div>
      <div>
        Tech
      </div>
      <div>
        Travel
      </div>
      <div>
        Collects
      </div>
      <div>
        About
      </div>
    </main>
  )
}
