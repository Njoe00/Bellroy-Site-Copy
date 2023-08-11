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
