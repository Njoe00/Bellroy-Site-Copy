import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function SliderImageIcons({
  prevSlide,
  nextSlide,
}: {
  prevSlide: () => void;
  nextSlide: () => void;
}) {
  return (
    <>
      <div className="absolute left-2 top-[50%] -translate-x-[-500px] translate-y-[-40%] cursor-pointer rounded-full p-2 text-2xl text-gray-300">
        <BsChevronCompactLeft onClick={prevSlide} size="40" />
      </div>
      <div className="absolute right-1 top-[50%] -translate-x-[500px] translate-y-[-60%] cursor-pointer rounded-full p-2 text-2xl text-gray-300">
        <BsChevronCompactRight onClick={nextSlide} size="40" />
      </div>
    </>
  );
}
