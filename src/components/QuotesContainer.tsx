import React, { useState } from "react";
import Image from "next/image";
import QuotesText from "./QuotesText";

export default function QuotesContainer() {
  const [quotesText, setQuotesText] = useState(quotes[0].quote);

  return (
    <div className="bg-background-quotes flex justify-center p-20">
      <div className="flex items-center justify-center flex-col text-gray-200 font-serif">
        <h1 className="text-2xl flex py-6">Don't just take our word for it</h1>
        <QuotesText
          quotes={quotes}
          setQuotesText={setQuotesText}
        />
        <div className="flex flex-col items-center text-center py-20 text-2xl space-y-10">
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
