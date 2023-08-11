import React from "react";
import Image from "next/image";
import { BsChevronCompactDown } from "react-icons/bs";

type Content = {
  text: string;
  inactiveImage: string;
  activeImage: string;
};

type ImagesState = [
  imagesToShow: string,
  setImagesToShow: (val: string) => void
];

export default function WalletTypeButton({
  imagesToShow,
  setImagesToShow,
  content,
  index,
}: {
  index: number;
  content: Content;
  imagesToShow: ImagesState[0];
  setImagesToShow: ImagesState[1];
}) {
  const isActive = imagesToShow === content.text;

  return (
    <div
      className="flex flex-col items-center justify-center space-x-36 py-14"
      key={index}
    >
      <div
        className="group flex cursor-pointer flex-col items-center px-24"
        onClick={() => setImagesToShow(content.text)}
      >
        <Image
          src={isActive ? content.activeImage : content.inactiveImage}
          width={96}
          height={71}
          alt="Mens Bags"
          style={{ height: "100%", width: "auto" }}
        />
        <div className="absolute flex translate-y-32 justify-center text-2xl group-hover:text-orange-600">
          <BsChevronCompactDown />
        </div>

        <div className="translate-y-4 text-sm text-gray-400 group-hover:text-orange-600">
          {content.text}
        </div>
      </div>
    </div>
  );
}
