import  { sliderImage } from "./SliderImageWallet";

type SliderImageWalletProps = {
    sliderValue: number;
    setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function WalletImageSlider({
    sliderValue,
    setSliderValue,
  }: SliderImageWalletProps) {
    
    let textValue;
    if (sliderValue === 9) {
      textValue = "Plus Cash";
    } else if (sliderValue === 9) {
      textValue = "1 Card";
    } else {
      textValue = `${sliderValue} Cards`;
    }
  
  return (
    <ul className="flex flex-col justify-center w-1/2  z-20 absolute bottom-0">
      <input
        type="range"
        className="w-full"
        min={0}
        max={sliderImage.length - 1}
        step={1}
        value={sliderValue}
        onChange={(event) => {
          setSliderValue(event.target.value);
        }}
      />
      <li className="flex justify-center relative">
        <span className="flex flex-col w-auto items-center z-10">
          {textValue}
        </span>
      </li>
    </ul>
  );
}
