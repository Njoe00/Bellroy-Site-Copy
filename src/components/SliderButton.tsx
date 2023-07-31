import { sliderImage } from "./SliderImageWallet";

type SliderImageWalletProps = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  handleEventChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function WalletImageSlider({
  sliderValue,
  setSliderValue,
  handleEventChange,
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
    <div className="flex flex-col justify-center w-full z-40 absolute bottom-0">
      <div className="relative flex text-center">
        <input
          type="range"
          className="w-full absolute appearance-none h-0 -bottom-2 outline-none z-10 ::-webkit-slider-thumb"
          min={0}
          max={sliderImage.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleEventChange}
        />
        <li className="flex w-full absolute text-center top-14 left-8">
          <span
            className="flex text-slider-colour-full font-bold text-end text-sm justify-end z-10"
            style={{
              width: `${(sliderValue / (sliderImage.length - 1)) * 100}%`,
            }}
          >
            {textValue}
          </span>
        </li>
      </div>
    </div>
  );
}
