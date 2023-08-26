import React, { useState } from "react";
import Image from "next/image";
import WalletImageSlider from "./WalletImageSlider";
import { BsChevronCompactDown } from "react-icons/bs";

export default function SliderImageWallet() {
  const [sliderValue, setSliderValue] = useState(0);

  const sliderValueRounder = (sliderValue: number) => {
    if (sliderValue % 1 !== 0) {
      return Math.floor(sliderValue);
    }
    return sliderValue;
  };

  const chervonStyling = { colour: "white", size: "20px" };

  return (
    <div className="bg-cover w-full flex mr-auto items-center flex-col ml-auto bg-background-main">
      <div>
        <p className="flex flex-row text-base font-normal">
          Move the slider to compare wallets
        </p>
      </div>
      <div className="flex flex-col   items-center w-80 z-10">
        <div className="w-[1905px]">
          <Image
            className=""
            src={sliderImage[sliderValueRounder(sliderValue)]}
            width={1905}
            height={800}
            quality={100}
            alt="alt"
            style={{ width: 1905, height: 500 }}
          />
        </div>
        <div className="flex justify-center top-4">
          <WalletImageSlider
            sliderValueRounder={sliderValueRounder}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </div>
      </div>
      <a
        href="#video-player"
        className="scroll-smooth cursor-pointer flex-col items-center pb-8 flex"
      >
        <div className=" text-center px-10 pt-10 text-white text-sm ">
          Discover how we do it
        </div>
        <BsChevronCompactDown size="30" color="white" />
      </a>
    </div>
  );
}

export const sliderImage = [
  "/sliderwallet1.png",
  "/sliderwallet2.png",
  "/sliderwallet3.png",
  "/sliderwallet4.png",
  "/sliderwallet6.png",
  "/sliderwallet7.png",
  "/sliderwallet8.png",
  "/sliderwallet9.png",
  "/sliderwallet10.png",
  "/sliderwallet11.png",
  "/sliderwallet12.png",
];
