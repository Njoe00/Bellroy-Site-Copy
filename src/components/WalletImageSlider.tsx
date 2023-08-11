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

  const handleEventChange = (event) => {
    setSliderValue(event.target.value);
  };

  const filledWidthCalucation = `${
    (sliderValue / (sliderImage.length - 1)) * 100
  }%`;

  return (
    <div className="absolute bottom-0 z-40 flex w-1/2 flex-col justify-center ">
      <div className="relative">
        <div
          className="absolute z-40 h-2 bg-slider-colour-full transition-colors delay-1000 ease-in-out "
          style={{
            width: filledWidthCalucation,
          }}
        ></div>
        <input
          type="range"
          className="absolute z-10
          h-2 w-full appearance-none bg-slider-colour-empty outline-none"
          min={0}
          max={sliderImage.length - 1}
          step={0.01}
          value={sliderValue}
          onChange={handleEventChange}
        />
        <div className="absolute -bottom-6 z-30 flex w-full flex-row justify-between">
          {sliderImage.map((image, index) => (
            <div
              key={index}
              className={`flex h-8 w-0.5 border-0 ${
                SliderValueIsEqualorGreaterThanIndex(index)
                  ? "duration-400 bg-slider-colour-full transition-colors delay-150 ease-in-out"
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
