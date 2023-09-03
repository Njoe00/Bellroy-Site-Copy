import React from "react";
import { Content } from "./ProductCard";

type ProductColourButtonProps = {
  content: Content;
  selectedColour: string;
  setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
  setCardImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function ProductColourButton({
  content,
  selectedColour,
  setSelectedColour,
  setCardImage,
}: ProductColourButtonProps) {
  return (
    <div className="static p-2 flex flex-row justify-center space-x-2 ">
      {content.colours.map((colour, index) => {
        const outlineColour = `outline-${selectedColour}`;
        const bgColour = `bg-${colour}`;
        return (
          <button
            onClick={() => {
              setSelectedColour(colour);
              setCardImage(content.image[index]);
            }}
            key={index}
            className={`${bgColour} h-4 w-4 rounded-full outline-1 outline outline-offset-2 ${
              selectedColour !== colour ? "outline-none" : outlineColour
            }`}
          />
        );
      })}
    </div>
  );
}
