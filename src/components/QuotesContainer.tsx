import React, { useEffect, useState } from "react";
import QuotesText from "./QuotesText";

export default function QuotesContainer() {
  const [quotesText, setQuotesText] = useState(Quotes[0].quote);
  const [buttonHighlighted, setButtonHighLighted] = useState(0);


  return (
    <div className="bg-background-quotes flex justify-center p-20">
      {/* <h1 className="text-xl flex">Don't just take our word for it</h1> */}
      <div className="flex items-center flex-col text-gray-200">
        <QuotesText
          Quotes={Quotes}
          setQuotesText={setQuotesText}
          buttonHighlighted={buttonHighlighted}
          setButtonHighLighted={setButtonHighLighted}
        />
        <div className="flex flex-col items-center text-center py-20 text-2xl ">{quotesText}</div>
      </div>
    </div>
  );
}

const Quotes = [
  {
    title: "/logo-gear-patrol-white.avif",
    quote:
      "“Bellroy can take a backbreaker of a wallet and make it smaller than a deck of cards.”",
      imageDimensions: [164.44,30],
  },
  {
    title: "/mens-journal-white.avif",
    quote: "“Seriously slim wallets and passport holders.”",
    imageDimensions: [136.3, 30],
  },
  {
    title: "/logo-the-huffington-post-white.avif",
    quote:"Bellroy is on a mission to slim down the way you carry your everyday essentials, by making it functional yet elegant.",
    imageDimensions: [128.84, 50],
  },
  {
    title: "/logo-HiConsumption_white.avif",
    quote: "“Honestly, these wallets are near perfect.”",
    imageDimensions: [192.77, 30],
  },
];
