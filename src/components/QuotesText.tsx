import React from "react";

type Quotes = {
  title: string;
  quote: string;
}[];

type QuoteTextProps = {
  Quotes: Quotes;
  buttonHighlighted: boolean;
  setQuotesText: React.Dispatch<React.SetStateAction<string | string>>;
  setButtonHighLighted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuotesText({
  Quotes,
  buttonHighlighted,
  setQuotesText,
  setButtonHighLighted,
}: QuoteTextProps) {
  const handleHighlightedButtons = () => {
    setButtonHighLighted(!buttonHighlighted);
  };

  return (
    <div className="flex-row flex space-x-6">
      {Quotes.map((text, index) => {
        return (
          <>
            <div
              className={
                buttonHighlighted
                  ? "hover:text-white text-white text-xl"
                  : "text-gray-400 hover:text-white text-xl"
              }
              key={index}
              onClick={() => {
                setQuotesText(text.quote);
                handleHighlightedButtons();
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
