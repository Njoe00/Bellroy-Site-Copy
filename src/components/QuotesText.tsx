import React from "react";
import Image from "next/image";



type Quotes = {
  title: string;
  quote: string;
  imageDimensions: [number, number];
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
    <div className="flex-row flex items-center line-block ">
      {Quotes.map((text, index) => {
        return (
          <>
            <span
              className={
                buttonHighlighted === index
                  ? "hover:text-white text-white text-center text-xl border-b-2 inline-block py-10 px-[10px] w-[280px] h-[132px]"
                  : "text-gray-400 border-gray-400 text-center hover:border-white border-b-2 text-xl inline-block py-10 px-[10px] w-[280px] h-[132px]"
              }
              key={index}
              onClick={() => {
                setQuotesText(text.quote);
                handleHighlightedButtons(index);
              }}
            >
              <div className="inline-block item-center">
              <Image  className="flex"src={text.title} alt="text" height={text.imageDimensions[1]} width={text.imageDimensions[0]} />
              </div>
            </span>
          </>
        );
      })}
    </div>
  );
}
