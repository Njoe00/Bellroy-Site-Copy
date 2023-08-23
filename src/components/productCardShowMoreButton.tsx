import React from "react";
import Image from "next/image";

type ProdudctCardImageProps = {
  showMoreImage: string[];
  image: string[];
};

export default function productCardShowMoreButton({
  content,
  isCardFlipped,
  changeImage,
  changeIsCardFlipped,
}: {
  content: ProdudctCardImageProps;
  isCardFlipped: boolean;
  changeImage: (newImage: string) => void;
  changeIsCardFlipped: () => void;
}) {
  const FrontProductImage = content.image[0];
  return (
    <div className="z-50">
      <button
        className="group-hover:visible invisible flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300"
        onClick={() => {
          changeIsCardFlipped();
          isCardFlipped
            ? changeImage(content.showMoreImage[0])
            : changeImage(FrontProductImage);
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
