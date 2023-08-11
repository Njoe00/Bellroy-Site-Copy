import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-10 flex h-[105px] items-center justify-between gap-2 space-x-10 bg-white p-5 text-sm font-normal">
        <div className="flex items-center space-x-14 font-normal">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="test"
            style={{ height: "100%", width: "auto" }}
          />
          <div className="relative top-2 flex w-max space-x-14">
            {headerSubSections.map((section, index) => (
              <button
                className="inline-flex items-center py-2.5 text-center text-sm hover:text-orange-600"
                onClick={handleDropDown}
                key={index}
              >
                {section.text}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 space-x-4 p-2 text-xs font-normal text-gray-500">
          <a className="hover:text-orange-400" href="/#">
            Help
          </a>
          <a className="hover:text-orange-400" href="/#">
            Find In-Store
          </a>
          {headerIcons.map((image, index) => (
            <span className="flex" key={index}>
              <Image
                src={image}
                alt="mail"
                width={10}
                height={10}
                style={{ height: "100%", width: "auto" }}
              />
            </span>
          ))}
        </div>
      </div>
      <Transition
        show={isOpen}
        className="divide-white-100 relative z-0 flex divide-y drop-shadow-lg"
        enter="transform transition ease-in-out duration-300"
        enterFrom="opacity-100 -translate-y-36"
        enterTo="opacity-100 translate-y-0"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-100 -translate-y-36"
      >
        <ul className="absolute flex w-screen flex-row justify-start bg-white pb-8 pl-32 text-sm text-gray-500">
          {headerSubSectionsContentWallets.map((content, index) => (
            <li className="flex flex-col items-center px-6" key={index}>
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
