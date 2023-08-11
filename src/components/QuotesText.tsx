import React, { useState } from "react";
import Image from "next/image";

type quotes = {
  title: string;
  quote: string;
  imageDimensions: [number, number];
}[];

type QuoteTextProps = {
  quotes: quotes;
  buttonHighlighted: number;
  setQuotesText: React.Dispatch<React.SetStateAction<string | string>>;
  setButtonHighLighted: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuotesText({ quotes, setQuotesText }: QuoteTextProps) {
  const handleHighlightedButtons = (index: number) => {
    setButtonHighLighted(index);
  };
  const [buttonHighlighted, setButtonHighLighted] = useState(0);

  return (
    <div className="line-block flex flex-row items-center">
      {quotes.map((text, index) => {
        return (
          <div>
            <span
              className={
                buttonHighlighted === index
                  ? "inline-block h-[132px] w-[280px] border-b-2 px-[10px] py-10 text-center text-xl text-white hover:text-white"
                  : "inline-block h-[132px] w-[280px] border-b-2 border-gray-400 px-[10px] py-10 text-center text-xl text-gray-400 hover:border-white"
              }
              key={index}
              onClick={() => {
                setQuotesText(text.quote);
                handleHighlightedButtons(index);
              }}
            >
              <div className="item-center inline-block">
                <Image
                  className="flex"
                  src={text.title}
                  alt="text"
                  height={text.imageDimensions[1]}
                  width={text.imageDimensions[0]}
                />
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
}
