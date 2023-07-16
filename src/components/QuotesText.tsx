import React from "react";

type quotes = [
  {
    title: string;
    quote: string;
  }
];

type SetState = [
  setQuotesText: (value: string) => void,
  setButtonHighLighted: (value: number) => void
];

export default function QuotesText({
  Quotes,
  buttonHighlighted,
  setQuotesText,
  setButtonHighLighted,
  index,
}: {
  Quotes: quotes;
  buttonHighLighted: number;
  setQuotesText: SetState[0];
  setButtonHighLighted: SetState[1];
  index: number;
}) {
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
