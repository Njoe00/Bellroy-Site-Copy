import React from "react";

type quotes = [
  {
    title: string;
    quote: string;
  }
];

export default function QuotesText({
  Quotes,
  setQuotesText,
}: {
  Quotes: quotes;
  setQuotesText: (val: string) => void;
}) {
  return (
    <div className="flex-row flex space-x-6">
      {Quotes.map((text, index) => {
        return (
          <div
            className="text-xl"
            key={index}
            onClick={() => setQuotesText(text.quote)}
          >
            {text.title}
          </div>
        );
      })}
    </div>
  );
}
