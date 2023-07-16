import React from "react";

type content = {
  colours: string[];
  image: string[];
  index: number;
}

export default function ProductColourButton({
  content,
  selectedColour,
  setSelectedColour,
  setCardImage,
}: {
  content: content;
  index: number;
  selectedColour: string;
  setSelectedColour: (val: string) => void;
  setCardImage: (val: string) => void;
}) {

  return (
    <div className="p-2 flex flex-row justify-center space-x-2 ">
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
