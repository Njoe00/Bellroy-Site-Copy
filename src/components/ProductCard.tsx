import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import ProudctNameAndEdition from "./ProductNameAndEdition";
import ProductColourButton from "./ProductColourButton";

export type Content = {
  colours: string[];
  image: string[];
  name: string;
  edition?: string;
  price: string;
};

export default function ProductCard({ content }: { content: Content }) {
  const [selectedColour, setSelectedColour] = useState("black");
  const [cardImage, setCardImage] = useState(content.image[0]);
  const [isCardFlipped, setIsCardFlipped] = useState(true);

  useEffect(() => {
    setCardImage(content.image[0]);
  }, [content]);

  const toggleIsFlippedCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="group relative flex flex-col justify-center border-4 border-white bg-gray-100">
        <div className="z-30">
          <Transition
            show={!isCardFlipped}
            className=""
            enter="transform transition ease-in-out duration-300"
            enterFrom="opacity-0 -translate-x-0"
            enterTo="opacity-100 translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="opacity-0 translate-x-0"
            leaveTo="opacity-100 translate-x-0"
          >
            <button
              className="absolute right-0 top-0 z-20 flex flex-row bg-gray-300 px-2 py-1 text-xs group-hover:visible "
              onClick={toggleIsFlippedCard}
            >
              SHOW MORE
              <Image
                className="relative left-1 flex"
                src="/icons8-plus-50.png"
                alt="X"
                width={14}
                height={14}
                style={{ height: "15px", width: "15px" }}
              />
            </button>
          </Transition>
          <Transition
            show={isCardFlipped}
            className=""
            enter="transform transition ease-in-out duration-300"
            enterFrom="opacity-0 -translate-x-0"
            enterTo="opacity-100 translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="opacity-0 translate-x-0"
            leaveTo="opacity-100 translate-x-0"
          >
            <button
              className="absolute right-0 top-0 z-20 flex flex-row bg-gray-300 px-2 py-1 text-xs group-hover:visible"
              onClick={toggleIsFlippedCard}
            >
              CLOSE
              <Image
                className="relative left-1 flex rotate-45"
                src="/icons8-plus-50.png"
                alt="X"
                width={14}
                height={14}
                quality={100}
              />
            </button>
          </Transition>
        </div>

        <div className="relative flex h-[508px] w-[413.33px] flex-col items-center">
          <div className="relative top-10">
            <Image src={cardImage} height={300} width={300} alt="cardImage" />
            <ProductColourButton
              content={content}
              selectedColour={selectedColour}
              setSelectedColour={setSelectedColour}
              setCardImage={setCardImage}
            />
            <ProudctNameAndEdition content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
