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

  return (
    <div className="flex flex-col justify-center w-1/2 z-20 absolute bottom-0">
      <div className="relative z-10">
        <input
          type="range"
          className="w-full
          appearance-none h-2 outline-none bg-slider-colur-empty -z-40"
          min={0}
          max={sliderImage.length - 1}
          step={1}
          value={sliderValue}
          onChange={(event) => {
            setSliderValue(event.target.value);
        }}
        />
        <div className="flex absolute top-0 flex-row justify-between w-full -z-10">
          {sliderImage.map((image, index) => (
            <div
              key={index}
              className="flex z-10 h-8 w-[2px] border-0 bg-slider-colur-empty"
            ></div>
          ))}
        </div>
      </div>
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
            z-index: 40;
                    }
        `}
      </style>
      <li className="flex justify-center relative">
        <span className="flex flex-col w-auto items-center z-10">
          {textValue}
        </span>
      </li>
    </div>
  );
}
