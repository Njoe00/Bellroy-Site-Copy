import React from "react";
import { sliderImage } from "./SliderImageWallet";

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
    <div className="flex-nowrap flex-col justify-center w-full float-left z-40 absolute bottom-0">
      <div className="flex text-center">
        <input
          type="range"
          className="w-full absolute appearance-none h-0 -bottom-2 outline-none z-10"
          min={0}
          max={sliderImage.length - 1}
          step={0.01}
          value={sliderValue}
          onChange={handleEventChange}
        />
        <li className="flex flex-nowrap truncate w-full absolute text-center items-center top-14 left-6 flex-row">
          <span
            className="inline w-max text-slider-colour-full font-bold items-center text-end text-sm z-10"
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
