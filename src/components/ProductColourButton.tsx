import React from "react";
import { Content } from "./ProductCard";

type ProductColourButtonProps = {
  content: Content;
  selectedColour: string;
  setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsCardFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  changeImage?: (newImage?: string) => void;
  setCardImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  isCardFlipped: boolean;
};

export default function ProductColourButton({
  content,
  selectedColour,
  setSelectedColour,
  setImageIndex,
  changeImage,
  setIsCardFlipped,
  setCardImage,
  isCardFlipped,
}: ProductColourButtonProps) {
  return (
    <div className="static p-2 flex flex-row justify-center space-x-2 ">
      {content.colours.map((colour, index) => {
        const frontProductImage = content.image[index];
        const outlineColour = `outline-${selectedColour}`;
        return (
          <button
            onClick={() => {
              setIsCardFlipped(true);
              setImageIndex(index);
              setSelectedColour(colour);
              {
                isCardFlipped
                  ? setCardImage(frontProductImage)
                  : changeImage?.(frontProductImage);
              }
            }}
            key={index}
            className={`${colour} h-4 w-4 rounded-full outline-1 outline outline-offset-2 ${
              selectedColour !== colour ? "outline-none" : outlineColour
            }`}
          />
        );
      })}
    </div>
  );
}
