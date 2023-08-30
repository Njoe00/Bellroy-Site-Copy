import React, { useState } from "react";
import Image from "next/image";
import ProudctNameAndEdition from "./ProductNameAndEdition";
import ProductColourButton from "./ProductColourButton";
import ProductCardShowMoreButton from "./productCardShowMoreButton";

export type Content = {
  colours: string[];
  image: string[];
  backOfCardImage?: string[];
  name: string;
  edition?: string;
  price: string;
};

export default function ProductCard({ content }: { content: Content }) {
  const [selectedColour, setSelectedColour] = useState("black");
  const [cardImage, setCardImage] = useState<string | undefined>(
    content.image[0]
  );
  const [isCardFlipped, setIsCardFlipped] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const changeImage = (newImage?: string) => {
    setOpacity(0);

    setTimeout(() => {
      setCardImage(newImage);
      setOpacity(1);
    }, 350);
  };

  const toggleIsFlippedCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const rotateCardImage = isCardFlipped
    ? `[transform:rotateY(180deg)]`
    : `[transform:-rotateY(180deg)]`;

  return (
    <div className=" group flex flex-col flex-wrap justify-center border-4 bg-gray-100 border-white">
      <div className="flex flex-row relative justify-center">
        <ProductCardShowMoreButton
          isCardFlipped={isCardFlipped}
          toggleIsFlippedCard={toggleIsFlippedCard}
          changeImage={changeImage}
          content={content}
        />
      </div>
      <div className="flex flex-col w-[413.33px] h-[508px] items-center relative bg-gray-100">
        <div className="top-10 relative">
          <div
            className={`${rotateCardImage} ease-in-out [transform-style-:preserve-3d] [backface-visblity:hidden] transition-all duration-1000`}
          >
            <Image
              className="transition-all ease-in-out duration-300"
              src={cardImage!}
              height={300}
              width={300}
              alt="cardImage"
              style={{ opacity }}
            />
          </div>

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
  );
}
