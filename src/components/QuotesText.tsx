import React from "react";

type Quotes = {
  title: string;
  quote: string;
}[];

type QuoteTextProps = {
  Quotes: Quotes;
  buttonHighlighted: number;
  setQuotesText: React.Dispatch<React.SetStateAction<string>>;
  setButtonHighLighted: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuotesText({
  Quotes,
  buttonHighlighted,
  setQuotesText,
  setButtonHighLighted,
}: QuoteTextProps) {
  return (
    <div className="flex-row flex space-x-6">
      {Quotes.map((text, index) => {
        return (
          <>
            <div
              className={
                buttonHighlighted !== 0
                  ? "hover:text-white text-white text-xl"
                  : "text-gray-400 hover:text-white text-xl"
              }
              key={index}
              onClick={() => {
                setQuotesText(text.quote);
                setButtonHighLighted(index);
              }}
            >
              {text.title}
            </div>
          </>
        );
      })}
    </div>
  );
}
