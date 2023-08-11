import React, { useEffect, useState } from "react";
import { Content } from "./ProductCard";

export default function ProudctNameAndEdition({
  content,
}: {
  content: Content;
}) {
  return (
    <div className="relative top-20 flex flex-col flex-wrap items-center font-[440]">
      <div className="flex flex-row place-content-center space-x-2 text-sm">
        <div>{content.name}</div>
        <div className="flex content-center text-gray-500">
          {content.edition}
        </div>
      </div>
      <div className="text-sm">{content.price}</div>
      <button className="text- relative top-6 rounded border border-black px-5 py-2 text-sm font-normal tracking-wider duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
        SHOP NOW
      </button>
    </div>
  );
}
