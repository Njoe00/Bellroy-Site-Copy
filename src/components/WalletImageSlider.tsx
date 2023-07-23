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

  const thumbStyle = {
    WebkitAppearance: "none",
    appearance: "none",
    backgroundColor: "#5cd5eb",
    height: "2rem",
    width: "1rem",
  };

  return (
    <div className="flex flex-col justify-center w-1/2 z-20 absolute bottom-0 ">
      <div className="flex flex-row justify-between w-full">
        {sliderImage.map((image, index) => (
          <div key={index} className="flex absolute w-2 h-2"></div>
        ))}
      </div>
      <input
        type="range"
        className="w-full 
        appearance-none h-2 outline-none bg-gray-300"
        min={0}
        max={sliderImage.length - 1}
        step={1}
        value={sliderValue}
        onChange={(event) => {
          setSliderValue(event.target.value);
        }}
      />
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            background-color: white;
            height: 2rem;
            width: 1rem;
            border-radius: 0;
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
