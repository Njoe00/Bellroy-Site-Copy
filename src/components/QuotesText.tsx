import React from "react";

type Quotes = {
  title: string;
  quote: string;
}[];

type QuoteTextProps = {
  Quotes: Quotes;
  buttonHighlighted: number;
  setQuotesText: React.Dispatch<React.SetStateAction<string | string>>;
  setButtonHighLighted: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuotesText({
  Quotes,
  buttonHighlighted,
  setQuotesText,
  setButtonHighLighted,
}: QuoteTextProps) {
  const handleHighlightedButtons = (index: number) => {
    setButtonHighLighted(index);
  };

  return (
    <div className="flex-row flex space-x-6 items-center">
      {Quotes.map((text, index) => {
        return (
          <>
            <span
              className={
                buttonHighlighted === index
                  ? "hover:text-white text-white text-xl border-b-2 inline-block p-12"
                  : "text-gray-400 border-gray-400 hover:text-white hover:border-white border-b-2 text-xl inline-block p-12"
              }
              key={index}
              onClick={() => {
                setQuotesText(text.quote);
                handleHighlightedButtons(index);
              }}
            >
              <div className="inline-block">{text.title}</div>
            </span>
          </>
        );
      })}
    </div>
  );
}
