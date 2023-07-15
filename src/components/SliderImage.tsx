import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function SliderImage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesSetOne.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastslide = currentIndex === slidesSetOne.length - 1;
    const newIndex = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="relative flex flex-col py-28 justify-center bg-gray-100 items-center z-40">
      <div className="flex flex-row space-x-4 drop-shadow-lg">
        <div>
          <div
            style={{
              backgroundImage: `url(${slidesSetOne[currentIndex].url})`,
            }}
            className="bg-cover w-[365px] h-[280px] duration-500 bg-no-repeat flex q"
          ></div>
          <div className="flex flex-col bottom-4 items-center text-xs">
            <div className="bg-white w-[365px] h-[94px] flex flex-col text-center justify-center p-4">
              {`${slidesSetOne[currentIndex].text}`}
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${slidesSlidesSetTwo[currentIndex].url})`,
            }}
            className="bg-cover w-[365px] h-[280px] duration-500 bg-no-repeat flex q"
          ></div>
          <div className="flex flex-col bottom-4 items-center text-xs">
            <div className="bg-white w-[365px] h-[94px] flex flex-col text-center justify-center p-4">
              {`${slidesSlidesSetTwo[currentIndex].text}`}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-[-500px] translate-y-[-40%] left-2 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size="40" />
      </div>
      <div className="absolute top-[50%] -translate-x-[500px] translate-y-[-60%] right-1 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size="40" />
      </div>

      <div className="flex absolute justify-center bottom-4 items-center">
        {slidesSetOne.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

const slidesSetOne = [
  {
    url: "https://bellroy-cms-images.imgix.net/3954/slider-image01.jpg",
    text: "Made from premium, enviormentally certified leather, that only gets better with age...",
  },
  {
    url: "https://bellroy-cms-images.imgix.net/4413/slider-image02.jpg",
    text: "and fewer of leather, to eliminate bulk from the start...",
  },
];

const slidesSlidesSetTwo = [
  {
    url: "https://bellroy-cms-images.imgix.net/4414/slider-image03.jpg",
    text: "their clever design features help keep them slim, even when they're full…",
  },
  {
    url: "https://bellroy-cms-images.imgix.net/4425/slider-image04.jpg",
    text: "so they'll be with you from Day One to Day 1000, and beyond.",
  },
];
