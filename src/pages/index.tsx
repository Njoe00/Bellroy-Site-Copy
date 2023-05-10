import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <a className="bg-white p-10 flex gap-2 font-normal space-x-14 text-sm">
          <img src="pages/bellroy9718.jpg" alt='hello'/>
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
          About Us
        </div>
          <div className='flex justify-self-end'>
            Help
          </div>
          <div>
            Find In-Store
        </div>
      </a>
    </main>
    
  )
}
