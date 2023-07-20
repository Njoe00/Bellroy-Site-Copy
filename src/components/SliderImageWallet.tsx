import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SliderImageWallet() {
  const [sliderValue, setSliderValue] = useState("0");

  let textValue;
  if (sliderValue === "9") {
    textValue = "Plus Cash";
  } else if (sliderValue === "1") {
    textValue = "1 Card";
  } else {
    textValue = `${sliderValue} Cards`;
  }

  return (
    <div className="flex mr-auto items-center flex-col ml-auto">
      <div>
        <p className="flex flex-row text-base font-bold bg-background-main">
          Move the slider to compare wallets
        </p>
      </div>
      <div className="flex flex-col space-y-2 p-2 w-80">
        <input
          type="range"
          className="w-full"
          min="0"
          max={sliderImage.length
            - 1}
          step="1"
          value={sliderValue}
          onChange={(event) => {
            setSliderValue(event.target.value);
          }}
        />
        <ul className="flex justify-center w-full px-2.5">
          <li className="flex justify-center relative">
            <span className="flex">
                  {textValue}
                  <Image
                    src={sliderImage[sliderValue]}
                    width={600}
                    height={1700}
                    quality={100}
                    alt="alt"
                    
                  />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const sliderImage = [
  "/sliderwallet1.png",
  "/sliderwallet2.png",
  "/sliderwallet3.png",
  "/sliderwallet4.png",
  "/sliderwallet5.png",
  "/sliderwallet6.png",
  "/sliderwallet7.png",
  "/sliderwallet8.png",
  "/sliderwallet9.png",
  "/sliderwallet10.png",
  "/sliderwallet11.png",
  "/sliderwallet12.png",
  "/sliderwallet13.png",

];
