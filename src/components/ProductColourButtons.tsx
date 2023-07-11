import React, { useState } from "react";

type Content = {
  colours: string[];
  index: number;
  image: string[];
};

export default function ProdctColourButton({
  content,
  colour,
  index
}: {
  content: Content;
  colour: string[];
  index: number;
}) {
  const [selectedColour, setSelectedColour] = useState("black");
  const [cardImage, setCardImage] = useState(content.image[0]);

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
            className={`${bgColour} bg-card-sleeve-  h-4 w-4 rounded-full outline-1 outline outline-offset-2 ${
              selectedColour !== colour ? "outline-none" : outlineColour
            }`}
          />
        );
      })}
    </div>
  );
}
