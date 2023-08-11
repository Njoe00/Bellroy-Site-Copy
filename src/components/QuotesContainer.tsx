import React, { useState } from "react";
import Image from "next/image";
import QuotesText from "./QuotesText";

export default function QuotesContainer() {
  const [quotesText, setQuotesText] = useState(quotes[0].quote);

  return (
    <div className="flex justify-center bg-background-quotes p-20">
      <div className="flex flex-col items-center justify-center font-serif text-gray-200">
        <h1 className="flex py-6 text-2xl">Don't just take our word for it</h1>
        <QuotesText quotes={quotes} setQuotesText={setQuotesText} />
        <div className="flex flex-col items-center space-y-10 py-20 text-center text-2xl">
          <Image
            className="flex"
            src="/quote-icon-white.png"
            height={21}
            width={15.75}
            alt="alt"
          />
          {quotesText}
        </div>
      </div>
    </div>
  );
}

const quotes = [
  {
    title: "/logo-gear-patrol-white.png",
    quote:
      "“Bellroy can take a backbreaker of a wallet and make it smaller than a deck of cards.”",
    imageDimensions: [164.44, 30],
  },
  {
    title: "/mens-journal-white.avif",
    quote: "“Seriously slim wallets and passport holders.”",
    imageDimensions: [136.3, 30],
  },
  {
    title: "/logo-the-huffington-post-white.avif",
    quote:
      "Bellroy is on a mission to slim down the way you carry your everyday essentials, by making it functional yet elegant.",
    imageDimensions: [128.84, 50],
  },
  {
    title: "/logo-HiConsumption_white.avif",
    quote: "“Honestly, these wallets are near perfect.”",
    imageDimensions: [192.77, 30],
  },
];
