import React from "react";
import Image from "next/image";

type Content = {
  imageAlt: string;
  image: string[];
};

export default function productCardShowMoreButton({
  content,
  isCardFlipped,
  changeImage,
  changeIsCardFliped,
}: {
  content: Content;
  isCardFlipped: boolean;
  changeImage: (agro: string) => void;
  changeIsCardFliped: () => void;
}) {
  return (
    <div className="z-50">
      {isCardFlipped ? (
        <div>
          <button
            className="group-hover:visible invisible flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300 z-20"
            onClick={() => {
              changeIsCardFliped();
              changeImage(content.imageAlt[0]);
            }}
          >
            SHOW MORE
            <Image
              className="rotate-45 flex relative left-1"
              src="/icons8-plus-50.png"
              alt="X"
              width={14}
              height={14}
              quality={100}
            />
          </button>
        </div>
      ) : (
        <div>
          <button
            className="group-hover:visible hover:scale-y-180 transform flex flex-row absolute top-0 right-0 py-1 px-2 text-xs bg-gray-300 z-20 "
            onClick={() => {
              changeIsCardFliped();
              changeImage(content.image[0]);
            }}
          >
            CLOSE
            <Image
              className="flex relative left-1"
              src="/icons8-plus-50.png"
              alt="X"
              width={14}
              height={14}
              style={{ height: "15px", width: "15px" }}
            />
          </button>
        </div>
      )}
    </div>
  );
}
