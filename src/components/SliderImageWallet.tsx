import Image from "next/image";
import React, { useState } from "react";
import WalletImageSlider from "./WalletImageSlider";

export default function SliderImageWallet() {
  const [sliderValue, setSliderValue] = useState(0);

  const sliderValueRounder = (sliderValue: number) => {
    if (sliderValue % 1 !== 0) {
      return Math.floor(sliderValue);
    }
    return sliderValue;
  };

  return (
    <div className="ml-auto mr-auto flex flex-col items-center bg-cover">
      <div>
        <p className="flex flex-row bg-background-main text-base font-bold">
          Move the slider to compare wallets
        </p>
      </div>
      <div className="flex w-80 flex-col items-center justify-center space-y-2 p-2">
        <div className="z-0 flex h-[730px] w-[1980px] overflow-hidden bg-cover">
          <Image
            src={sliderImage[sliderValueRounder(sliderValue)]}
            width={1980}
            height={800}
            quality={100}
            alt="alt"
            style={{ width: 1980, height: 800 }}
          />
        </div>
        <WalletImageSlider
          sliderValueRounder={sliderValueRounder}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      </div>
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
