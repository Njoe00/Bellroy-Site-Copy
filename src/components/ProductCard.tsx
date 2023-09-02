import React, { useState } from "react";
import Image from "next/image";
import ProudctNameAndEdition from "./ProductNameAndEdition";
import ProductColourButton from "./ProductColourButton";
import ProductCardShowMoreButton from "./productCardShowMoreButton";

export type Content = {
  colours: string[];
  image: string[];
  imageAlt: string | undefined;
  index: number;
  name: string;
  edition?: string | undefined;
  price: string;
};

export default function ProductCard({
  content,
  key,
}: {
  key: number;
  content: Content;
}) {
  const [selectedColour, setSelectedColour] = useState("black");
  const [cardImage, setCardImage] = useState(content.image[0]);
  const [isCardFlipped, setIsCardFlipped] = useState(true);
  const [opacity, setOpacity] = useState(100);

  const changeImage = (newImage: string) => {
    setOpacity(0);

    setTimeout(() => {
      setCardImage(newImage);
      setOpacity(100);
    }, 350);
  };

  const changeIsCardFliped = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div
        key={key}
        className="bg-gray-100 group flex flex-col relative justify-center border-4 border-white"
      >
        <ProductCardShowMoreButton
          isCardFlipped={isCardFlipped}
          changeIsCardFliped={changeIsCardFliped}
          changeImage={changeImage}
          content={content}
        />

        <div className="flex flex-col w-[413.33px] h-[508px] items-center relative bg-gray-100">
          <div className="top-10 relative">
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
