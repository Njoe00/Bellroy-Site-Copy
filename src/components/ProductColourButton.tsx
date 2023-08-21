import React from "react";
import { Content } from "./ProductCard";
// import "./ProductColourButton.css";

type ProductColourButtonProps = {
  content: Content;
  selectedColour: string;
  setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
  setCardImage: React.Dispatch<React.SetStateAction<string>>;
};
export default function ProductColourButton({
  content,
  selectedColour,
  setSelectedColour,
  setCardImage,
}: ProductColourButtonProps) {
  return (
    <div className="p-2 flex flex-row justify-center space-x-2 ">
      {content.colours.map((colour, index) => {
        const outlineColour = `outline-${selectedColour}`;
        const bgColour = `bg-${colour}`;

        const buttonStyles = {
          backgroundColor: colour,
        };

        return (
          <button
            onClick={() => {
              setSelectedColour(colour);
              setCardImage(content.image[index]);
            }}
            key={index}
            className={`${colour} h-4 w-4 rounded-full ${
              selectedColour === colour
                ? `${outlineColour} outline-1 outline outline-offset-2`
                : `outline-none`
            }`}
            style={{ backgroundColor: colour }}
          />
        );
      })}
    </div>
  );
}
