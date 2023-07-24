import { sliderImage } from "./SliderImageWallet";

type SliderImageWalletProps = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function WalletImageSlider({
  sliderValue,
  setSliderValue,
}: SliderImageWalletProps) {
  let textValue: string;
  if (sliderValue == 11) {
    textValue = "Plus Cash";
  } else if (sliderValue == 1) {
    textValue = "1 Card";
  } else {
    textValue = `${sliderValue} Cards`;
  }

  const WidthCalculation = {
    width: `w-[${(sliderValue / sliderImage.length) * 100}%]`,
  };

  return (
    <div className="flex flex-col justify-center w-1/2 z-40 absolute bottom-0">
      <div className="relative">
        <div
          className={`absolute bg-slider-colour-full h-2 z-40`}
          style={{
            width: `${(sliderValue / (sliderImage.length)) * 100}%`,
          }}
        ></div>
        <input
          type="range"
          className="w-full absolute
          appearance-none h-2 outline-none bg-slider-colour-empty z-10"
          min={0}
          max={sliderImage.length - 1}
          step={1}
          value={sliderValue}
          onChange={(event) => {
            setSliderValue(event.target.value);
          }}
        />
        <div className="flex absolute bottom-1 flex-row justify-between w-full z-30">
          {sliderImage.map((image, index) => (
            <div
              key={index}
              className="flex h-8 w-[2px] border-0 bg-slider-colour-empty"
            ></div>
          ))}
        </div>
        <li className="flex justify-center relative">
          <span className="flex flex-col w-auto items-center z-10">
            {textValue}
          </span>
        </li>
        <style>
          {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            background-color: white;
            height: 38px;
            width: 32px;
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); 
            z-index: 100;
                    }
        `}
        </style>
      </div>
    </div>
  );
}
