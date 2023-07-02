import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

import { headerSubSections, headerSubSectionsContentWallets } from "./data";


export default function Header ({
    content,
    index,
  }: {
    content: any;
    index: number;
  }) {

    const [isOpen, setIsOpen] = useState(false);


    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
       
     <div>
        <div className="bg-white p-5 flex relative gap-2 font-normal space-x-10 text-sm items-center h-28 z-10">
        <div className="gap-2 font-normal space-x-14 items-center flex">
        <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="test"
            style={{ height: "100%", width: "auto" }}
        />
        <div className="dropdown relative w-max">
            {headerSubSections.map((section, i) => (
            <button
                className="text-sm px-4 py-2.5 text-center inline-flex items-center hover:text-orange-600"
                onClick={handleDropDown}
                key={i}
            >
                {section.text}
            </button>
            ))}
        </div>
        </div>

        <div className="gap-2 font-normal space-x-4 text-xs flex justify-end text-gray-500 p-2">
        <a href="/#">Help</a>
        <a href="/#">Find In-Store</a>
        <span className="flex justify-items-center">
            <Image
            src="/email.png"
            alt="mail"
            width={20}
            height={20}
            style={{ height: "100%", width: "auto" }}
            />
        </span>
        <span>
            <Image
            src="/magnifying-glass.png"
            alt="mail"
            width={20}
            height={20}
            style={{ height: "22px", width: "20px" }}
            />
        </span>
        <span className="flex items-center">
            <Image
            src="/trolley.png"
            alt="mail"
            width={22}
            height={20}
            style={{ height: "22px", width: "20px" }}
            />
        </span>
        </div>
    </div>
    <Transition
        show={isOpen}
        className="relative flex divide-y divide-white-100 drop-shadow-lg z-0"
        enter="transform transition ease-in-out duration-300"
        enterFrom="opacity-100 -translate-y-36"
        enterTo="opacity-100 translate-y-0"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-100 -translate-y-36"
    >
        <ul className="absolute w-screen bg-white flex flex-row text-gray-500 justify-start pb-8 pl-32 text-sm">
        {headerSubSectionsContentWallets.map((content, i) => (
            <li className="flex items-center flex-col px-6" key={i}>
            <Image
                src={content.image}
                width={75}
                height={75}
                alt="Mens Bags"
                style={{ height: "100%", width: "auto" }}
            />
            <a href="#" className=" hover:text-orange-600">
                {content.text}
            </a>
            </li>
        ))}
        </ul>
    </Transition>
     </div>
);
}

