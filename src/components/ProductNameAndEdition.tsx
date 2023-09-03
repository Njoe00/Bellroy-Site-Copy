import React from "react";
import { Content } from "./ProductCard";

export default function ProudctNameAndEdition({
  content,
}: {
  content: Content;
}) {
  return (
    <div className=" pt-20 flex text-sm  flex-col items-center flex-wrap top-20 font-[440]">
      <div className=" static flex flex-row space-x-2 place-content-center">
        <div>{content.name}</div>
        <div className="text-gray-500 content-center static flex">
          {content.edition}
        </div>
      </div>
      <div>{content.price}</div>
      <button className="static mt-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 tracking-wider text-sm font-normal border rounded border-black text- px-5 py-2 top-6 duration-200">
        SHOP NOW
      </button>
    </div>
  );
}
