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

<<<<<<< HEAD
export default function ProductCard({
  content,
  key,
}: {
  key: number;
  content: Content;
}) {
=======
export default function ProductCard({ content }: { content: Content }) {
>>>>>>> 890f1d8 (Feature/news letter signup footer (#8))
  const [selectedColour, setSelectedColour] = useState("black");
  const [cardImage, setCardImage] = useState(content.image[0]);
  const [isCardFlipped, setIsCardFlipped] = useState(true);
  const [opacity, setOpacity] = useState(100);

<<<<<<< HEAD
  const changeImage = (newImage: string) => {
    setOpacity(0);

    setTimeout(() => {
      setCardImage(newImage);
      setOpacity(100);
    }, 350);
  };
=======
  useEffect(() => {
    setCardImage(content.image[0]);
  }, [content]);
>>>>>>> 890f1d8 (Feature/news letter signup footer (#8))

  const changeIsCardFliped = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
<<<<<<< HEAD
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
=======
      <div className="bg-gray-100 group flex flex-col relative justify-center border-4 border-white">
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
              className="group-hover:visible flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300 z-20 "
              onClick={toggleIsFlippedCard}
            >
              SHOW MORE
              <Image
                className="flex relative left-1"
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
              className="group-hover:visible flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300 z-20"
              onClick={toggleIsFlippedCard}
            >
              CLOSE
              <Image
                className="rotate-45 flex relative left-1"
                src="/icons8-plus-50.png"
                alt="X"
                width={14}
                height={14}
                quality={100}
              />
            </button>
          </Transition>
        </div>
>>>>>>> 890f1d8 (Feature/news letter signup footer (#8))

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
