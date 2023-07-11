import React, { useEffect, useState } from "react";

type Content = {
  price: number;
  name: string;
  edition: string;
}

export default function ProudctNameAndEdition({
  content,
}: {
  content: Content;
}) {
  return (
    <div className="relative flex flex-col items-center flex-wrap top-20 font-[440]">
      <div className="text-sm flex flex-row space-x-2 place-content-center">
        <div>{content.name}</div>
        <div className="text-gray-500 content-center flex">
          {content.edition}
        </div>
      </div>
      <div className="text-sm">{content.price}</div>
      <button className="relative hover:bg-orange-500 hover:text-white hover:border-orange-500 tracking-wider text-sm font-normal border rounded border-black text- px-5 py-2 top-6 duration-200">
        SHOP NOW
      </button>
    </div>
  );
}
