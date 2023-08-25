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
  setImagesToShow: (val: string) => void,
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
      className="flex flex-col space-x-36 py-14 items-center justify-center"
      key={index}
    >
      <div
        className="flex items-center flex-col px-24 group cursor-pointer"
        onClick={() => setImagesToShow(content.text)}
      >
        <Image
          src={isActive ? content.activeImage : content.inactiveImage}
          width={96}
          height={71}
          alt="Mens Bags"
          style={{ height: 96, width: 71 }}
        />
        <div className="absolute group-hover:text-orange-600 text-2xl flex justify-center translate-y-32">
          <BsChevronCompactDown />
        </div>

        <div className="group-hover:text-orange-600 text-sm translate-y-4 text-gray-400">
          {content.text}
        </div>
      </div>
    </div>
  );
}
