import React, { useEffect, useState } from "react";
import QuotesText from "./QuotesText";

export default function QuotesContainer() {
  const [quotesText, setQuotesText] = useState("hi");

  return (
    <div className="bg-background-quotes flex justify-center p-20">
      {/* <h1 className="text-xl flex">Don't just take our word for it</h1> */}
      <div className="flex text-white">
        <QuotesText Quotes={Quotes} setQuotesText={setQuotesText} />
        <div>{quotesText}</div>
      </div>
    </div>
  );
}

const Quotes = [
  {
    title: "GEAR PATROL",
    quote:
      "“Bellroy can take a backbreaker of a wallet and make it smaller than a deck of cards.”",
  },
  {
    title: "MENS JOURNAL",
    quote: "“Seriously slim wallets and passport holders.”",
  },
  {
    title: "THE HUFFINGTON POST",
    quote:
      "Bellroy is on a mission to slim down the way you carry your everyday essentials, by making it functional yet elegant.",
  },
  {
    title: "THE HUFFINGTON POST",
    quote: "“Honestly, these wallets are near perfect.”",
  },
];
