import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Header(){
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white p-5 flex relative gap-2 font-normal space-x-10 justify-between text-sm items-center h-[105px] z-10">
        <div className="font-normal space-x-14 items-center flex">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="test"
            style={{ height: "100%", width: "auto" }}
          />

          <div className="relative w-max space-x-14 flex top-2">
            {headerSubSections.map((section, index) => (
              <button
                className="text-sm py-2.5 text-center inline-flex items-center hover:text-orange-600"
                onClick={handleDropDown}
                key={index}
              >
                {section.text}
              </button>
            ))}
          </div>
        </div>

        <div className="gap-2 font-normal items-center space-x-4 text-xs flex text-gray-500 p-2">
          <a className="hover:text-orange-400" href="/#">Help</a>
          <a className="hover:text-orange-400" href="/#">Find In-Store</a>
          {headerIcons.map((image, index) => (
            <span className="flex" key={index}>
              <Image
                src={image}
                alt="mail"
                width={10}
                height={10}
                style={{ height: "100%", width: "auto" }}
                key={index}
              />
            </span>
          ))}
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
          {headerSubSectionsContentWallets.map((content, index) => (
            <li className="flex items-center flex-col px-6" key={index}>
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
    </>
  );
}

const headerIcons = [
  "/header/email.png",
  "/header/magnifying-glass.png",
  "/header/trolley.png",
];

const headerSubSections = [
  {
    text: "Bags",
  },
  {
    text: "Wallets",
  },
  {
    text: "Accessories",
  },
  {
    text: "Tech",
  },
  {
    text: "Travel",
  },
  {
    text: "Collections",
  },
  {
    text: "About Us",
  },
];

const headerSubSectionsContentBags = [
  {
    text: "Men's Bag's",
    image: "/Men's_Bags.avif",
  },
  {
    text: "Woman's Bags",
    image: "/Womens_Bags.avif",
  },
  {
    text: "Backpacks",
    image: "/Backpacks.avif",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/Crossbody.avif",
  },
  {
    text: "Totes & Shoulder Bags",
    image: "/Totes.avif",
  },
  {
    text: "Market & Cooler Bags",
    image: "/nav-icon-cooler-bags.avif",
  },
  {
    text: "Work Bags",
    image: "/Workbags.avif",
  },
  {
    text: "Travel Bags",
    image: "/Travel_Bags.avif",
  },
];

export const headerSubSectionsContentWallets = [
  {
    text: "Billfold's",
    image: "/Billfolds.avif",
  },
  {
    text: "Card Holders",
    image: "/Card_Holders.avif",
  },
  {
    text: "Zip Wallets",
    image: "/Zip_Wallets.avif",
  },
  {
    text: "Passport Holders",
    image: "/Passport_Holders_.avif",
  },
  {
    text: "RFID Protected",
    image: "/RFID.avif",
  },
];
