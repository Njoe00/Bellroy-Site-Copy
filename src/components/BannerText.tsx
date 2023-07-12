import Image from "next/image";

export default function BannerText() {
  return (
    <div className="bg-gray-200 flex justify-evenly py-8 p-8">
      <div className="flex pl-4 space-x-28">
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
              <span className="text-base text-background-main pl-4">
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
