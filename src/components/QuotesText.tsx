import React from "react";

type quotes = [
  {
    title: string;
    quote: string;
  }
];

export default function QuotesText({ Quotes }: { Quotes: quotes }) {
  return (
    <>
      {Quotes.map((text, index) => {
        return (
          <div className="text-xl" key={index}>
            {text.title}
          </div>
        );
      })}
    </>
  );
}

