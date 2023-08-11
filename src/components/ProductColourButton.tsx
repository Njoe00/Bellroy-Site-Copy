import React from "react";

type Content = {
  colours: string[];
  image: string[];
};

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
    <div className="flex-row justify-center flex space-x-2 p-2 ">
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
            className={`${bgColour} h-4 w-4 rounded-full outline outline-1 outline-offset-2 ${
              selectedColour !== colour ? "outline-none" : outlineColour
            }`}
          />
        );
      })}
    </div>
  );
}
