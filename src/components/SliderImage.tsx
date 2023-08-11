import React, { useState } from "react";
import SliderImageIcons from "./SliderImageIcons";
import { RxDotFilled } from "react-icons/rx";
import { sliderImage } from "./SliderImageWallet";

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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  type SliderImageWalletProps = {
    sliderValue: number;
    handleEventChange: React.ChangeEventHandler<HTMLInputElement>;
    sliderValueRounder: (number: number) => number;
    filledWidthCalucation: string;
  };

  export default function WalletImageSlider({
    sliderValue,
    handleEventChange,
    sliderValueRounder,
    filledWidthCalucation,
  }: SliderImageWalletProps) {
    let textValue: string;
    let maxValue = 11;
    let minimumValue = 1;
    if (sliderValueRounder(sliderValue) == maxValue) {
      textValue = "Plus Cash";
    } else if (sliderValueRounder(sliderValue) == minimumValue) {
      textValue = "1 Card";
    } else {
      textValue = `${sliderValueRounder(sliderValue)} Cards`;
    }

    return (
      <div className="absolute bottom-0 z-40 float-left w-full flex-col flex-nowrap justify-center">
        <div className="relative flex text-center">
          <input
            type="range"
            className="absolute -bottom-2 z-10 h-0 w-full appearance-none outline-none"
            min={0}
            max={sliderImage.length - 1}
            step={0.01}
            value={sliderValue}
            onChange={handleEventChange}
          />
          <li className="absolute left-6 top-14 flex w-full flex-row flex-nowrap items-center truncate text-center">
            <span
              className="z-10 inline w-max items-center text-end text-sm font-bold text-slider-colour-full"
              style={{
                width: filledWidthCalucation,
              }}
            >
              {textValue}
            </span>
          </li>
        </div>
      </div>
    );
  }

  <div className="relative z-40 flex flex-col items-center justify-center bg-gray-100 py-28">
    <div className="flex flex-row space-x-4 drop-shadow-lg">
      <div
        style={{
          backgroundImage: `url(${slidesSetOne[currentIndex].url})`,
        }}
        className="q flex h-[280px] w-[365px] bg-cover bg-no-repeat duration-500"
      ></div>
      <div className="bottom-4 flex flex-col items-center text-xs">
        <div className="flex h-[94px] w-[365px] flex-col justify-center bg-white p-4 text-center">
          {`${slidesSetOne[currentIndex].text}`}
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${SlidesSetTwo[currentIndex].url})`,
          }}
          className="q flex h-[280px] w-[365px] bg-cover bg-no-repeat duration-500"
        ></div>
        <div className="bottom-4 flex flex-col items-center text-xs">
          <div className="flex h-[94px] w-[365px] flex-col justify-center bg-white p-4 text-center">
            {`${SlidesSetTwo[currentIndex].text}`}
          </div>
        </div>
      </div>
    </div>
    <SliderImageIcons prevSlide={prevSlide} nextSlide={nextSlide} />
    <div className="absolute bottom-4 flex items-center justify-center">
      {slidesSetOne.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="cursor-pointer text-2xl"
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>;
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

const SlidesSetTwo = [
  {
    url: "https://bellroy-cms-images.imgix.net/4414/slider-image03.jpg",
    text: "their clever design features help keep them slim, even when they're full…",
  },
  {
    url: "https://bellroy-cms-images.imgix.net/4425/slider-image04.jpg",
    text: "so they'll be with you from Day One to Day 1000, and beyond.",
  },
];
