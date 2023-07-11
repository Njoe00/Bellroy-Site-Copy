import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function siliderImageWallet() {
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
    <div className="block mr-auto ml-auto w-28">
      <div>
        <p className="flex text-base p-0 font-bold justify-center bg-background-main">
          Move the slider to compare wallets
        </p>
      </div>
      <div className="flex flex-col space-y-2 p-2 w-80">
        <input
          type="range"
          className="w-full"
          min="0"
          max="9"
          step="1"
          value={sliderValue}
          onChange={(event) => {
            setSliderValue(event.target.value);
          }}
        />
        <ul className="flex justify-between w-full px-2.5">
          <li className="flex justify-center relative">
            <span className="absolute">
              {textValue}
              <Image
                src="/syw-compare.avif"
                width={600}
                height={1700}
                quality={100}
                alt="alt"
                key="4"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
