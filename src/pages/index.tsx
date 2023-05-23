import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [sliderValue, setSliderValue] = useState("0");
  let textValue;
  if (sliderValue === "9") {
    textValue = 'Plus Cash';
  } 
  if (sliderValue === "1") {
    textValue = "1 Card";
  } else {
    textValue = `${sliderValue} Cards`;
  }
  return (
    <header className="bg-white">
      <span className="place-content-end p-1 text-xs right-6 absolute text-gray-500 font-normal">
        Free shipping available 🇨🇦
      </span>
      <div className="bg-white p-5 flex justify-between gap-2 font-normal space-x-14 text-sm items-center h-28" >
        <div className="gap-2 font-normal space-x-14 items-center flex">
          <Image
            src='/../public/logo.png'
            width={120}
            height={1}
            alt='test'
          />
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
      <div className='h-screen bg-background-main'>
          <h1 className='font-serif flex text-white text-8xl p-16 justify-center'>Slim Your Wallet</h1>
        </div>
        <div>
          <p className='flex text-base p-0 font-bold justify-center'>Move the slider to compare wallets</p>
        </div>
        <div className='block mr-auto ml-auto w-28'>
          <Image 
          src='/syw-compare.avif'
          width={500} 
          height={800}
          quality={100}
          alt='alt'
          />
          <div className='flex flex-col space-y-2 p-2 w-80'>
            <input type='range' className='w-full' min="0" max="9" step="1" value={sliderValue} 
              onChange={(event) => {
                setSliderValue(event.target.value)
                console.log(event.target.value, ' this is value')
              }} 
            />
            <ul className="flex justify-between w-full px-2.5"> 
              <li className="flex justify-center relative"><span className="absolute">{textValue}</span></li>
            </ul>
          </div>
        </div>
    </header>
    
  )
}
