import React, { ChangeEvent } from "react";
import { sliderImage } from "./SliderImageWallet";
import SliderButton from "./SliderButton";

type SliderImageWalletProps = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  sliderValueRounder: (number: number) => number;
};

export default function WalletImageSlider({
  sliderValue,
  setSliderValue,
  sliderValueRounder,
}: SliderImageWalletProps) {
  const SliderValueIsEqualorGreaterThanIndex = (index: number) => {
    if (sliderValue >= index) return true;
  };

  const handleEventChange = (event: ChangeEvent<number | any>) => {
    setSliderValue(event.target.value);
  };

  const filledWidthCalucation = `${
    (sliderValue / (sliderImage.length - 1)) * 100
  }%`;

  return (
    <div className="flex flex-col justify-center w-1/2 z-40 absolute bottom-0">
      <div className="relative">
        <div
          className="absolute bg-slider-colour-full h-2 z-40 transition-all	ease-in duration-200"
          style={{
            width: filledWidthCalucation,
          }}
        ></div>
        <input
          type="range"
          className="absolute w-full
          appearance-none h-2 outline-none bg-slider-colour-empty z-10"
          min={0}
          max={sliderImage.length - 1}
          step={0.01}
          value={sliderValue}
          onChange={handleEventChange}
        />
        <div className="flex absolute -bottom-6 flex-row justify-between w-full z-30">
          {sliderImage.map((image, index) => (
            <div
              key={index}
              className={`flex h-8 w-0.5 border-0 ${
                SliderValueIsEqualorGreaterThanIndex(index)
                  ? "transition-colors ease-in-out delay-150 bg-slider-colour-full"
                  : "bg-slider-colour-empty"
              }`}
            />
          ))}
        </div>
        <SliderButton
          sliderValue={sliderValue}
          handleEventChange={handleEventChange}
          sliderValueRounder={sliderValueRounder}
          filledWidthCalucation={filledWidthCalucation}
        />
      </div>
    </div>
  );
}
