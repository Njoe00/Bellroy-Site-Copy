import Image from "next/image";

export default function BannerText() {
  return (
    <div className="flex justify-evenly bg-gray-200 p-8 py-8">
      <div className="flex space-x-28 pl-4">
        {imageTemplate.map((content, index) => (
          <div className="flex items-center">
            <Image
              src={content.image}
              alt="text"
              width={30}
              height={10}
              style={{ height: "100%", width: "auto" }}
              key={index}
            />
            <span className="pl-4 text-base text-background-main">
              {content.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const imageTemplate = [
  {
    text: "3 year warranty",
    image: "/check-mark.png",
  },
  {
    text: "Environmentally certified leather",
    image: "/leather.png",
  },
  {
    text: "Award-winning service",
    image: "/trophy.png",
  },
];
