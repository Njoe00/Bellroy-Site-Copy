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
      <div className="absolute top-[50%] -translate-x-[-500px] translate-y-[-40%] left-2 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size="40" />
      </div>
      <div className="absolute top-[50%] -translate-x-[500px] translate-y-[-60%] right-1 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size="40" />
      </div>
    </>
  );
}
