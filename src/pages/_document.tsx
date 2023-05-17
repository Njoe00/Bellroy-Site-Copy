import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-screen bg-background-main'>
        <Main />
        <NextScript />
        <div>
          <h1 className='font-serif flex text-white text-8xl p-16 justify-center'>Slim Your Wallet</h1>
        </div>
        <div>
          <p className='flex text-base p-0 font-bold justify-center'>Move the slider to compare wallets</p>
        </div>
        <div>
          <img src='./pages/syw-compare.avif' alt='hello'/>
        </div>
      </body>
    </Html>
  )
}
