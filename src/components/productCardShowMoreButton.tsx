import React, { useEffect } from "react";
import Image from "next/image";

type ContentProps = {
  backOfCardImage?: string[];
  image: string[];
};

type ProductCardProps = {
  content: ContentProps;
  isCardFlipped: boolean;
  changeImage?: (newImage?: string) => void;
  toggleIsFlippedCard: () => void;
  index: number;
};

export default function productCardShowMoreButton({
  content,
  isCardFlipped,
  changeImage,
  toggleIsFlippedCard,
  index,
}: ProductCardProps) {
  const frontProductImage = content.image[index];
  const backProductImage = (content: string[] | undefined) => {
    if (content !== undefined) {
      return content[index];
    }
  };

  return (
    <div className="z-50">
      <button
        className="group-hover:visible invisible flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300"
        onClick={() => {
          toggleIsFlippedCard();
          changeImage?.(
            isCardFlipped
              ? backProductImage(content.backOfCardImage)
              : frontProductImage
          );
        }}
      >
        {isCardFlipped ? "SHOW MORE" : "CLOSE"}
        <Image
          className={`${isCardFlipped ? "" : "rotate-45"} flex relative left-1`}
          src="/icons8-plus-50.png"
          alt="X"
          width={14}
          height={14}
          quality={100}
        />
      </button>
    </div>
  );
}
