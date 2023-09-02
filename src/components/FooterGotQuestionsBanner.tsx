import react from "react";
import Image from "next/image";

export default function FooterGotQuestionsBanner() {
  return (
    <div className="w-full h-24 pt-4 pb-4 border-t flex flex-row border-gray-400">
      <div className="px-14 mx-60 flex flex-row w-full">
        <div className="flex space-x-4 items-center">
          {certLogos.map((logo, index) => (
            <Image src={logo} width={36} height={55} alt="logo" key={index} />
          ))}
        </div>
        <div className="text-gray-400 text-xs flex-row items-center flex pl-4 gap-1 w-full">
          Got a question? Contact{" "}
          <span className="text-orange-600 cursor-pointer">
            support@bellroy.com
          </span>
          <div className="flex justify-end w-3/4">
            All rights reserved © %(year) Bellroy Pty Ltd
          </div>
        </div>
      </div>
    </div>
  );
}

const certLogos = ["/b-corporation_w.avif", "/GPTW-Logo-2.avif"];
