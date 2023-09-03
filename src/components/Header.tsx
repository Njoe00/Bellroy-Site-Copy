import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [headerContent, setHeaderContent] = useState("Wallets");
  const [headersection, setHeaderSection] = useState(WalletsContent);

  useEffect(() => {
    if (headerContent === "Bags") {
      setHeaderSection(BagsContent);
    } else if (headerContent === "Wallets") {
      setHeaderSection(WalletsContent);
    } else if (headerContent === "Accessories") {
      setHeaderSection(AccessoriesContent);
    } else if (headerContent === "Tech") {
      setHeaderSection(TechContent);
    } else if (headerContent === "Travel") {
      setHeaderSection(headerSubSectionsContentBags);
    } else if (headerContent === "Collections") {
      setHeaderSection(headerSubSectionsContentBags);
    } else if (headerContent === "About us") {
      setHeaderSection(headerSubSectionsContentBags);
    }
  }, [headerContent]);

  const changeHeaderContent = (section: string) => {
    setHeaderContent(section);
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
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
                onMouseEnter={() => {
                  handleMouseEnter();
                  changeHeaderContent(section.text);
                }}
                className="text-sm py-2.5 text-center inline-flex items-center hover:text-orange-600"
                onClick={() => {
                  changeHeaderContent(section.text);
                  handleDropDown();
                }}
                key={index}
              >
                {section.text}
              </button>
            ))}
          </div>
        </div>

        <div className="gap-2 font-normal items-center space-x-4 text-xs flex text-gray-500 p-2">
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
                width={18}
                height={18}
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
          {headersection.map((content, index) => (
            <li className="flex items-center flex-col px-6" key={index}>
              <Image
                src={content.image}
                width={84}
                height={84}
                alt="Mens Bags"
              />
              <a href="#" className=" hover:text-orange-600 overflow-auto">
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

const BagsContent = [
  {
    text: "Men's Bag's",
    image: "/header/Men's_Bags.avif",
  },
  {
    text: "Woman's Bags",
    image: "/header/Womens_Bags.avif",
  },
  { text: "Backpacks", image: "/header/Backpacks.avif" },
  {
    text: "Slings & Crossbody Bags",
    image: "/header/Crossbody.avif",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/header/Crossbody.avif",
  },
  {
    text: "Totes & Shoulder Bags",
    image: "/header/Totes.avif",
  },
  {
    text: "Market & Cooler Bags",
    image: "/header/nav-icon-cooler-bags.avif",
  },
  {
    text: "Work Bags",
    image: "/header/Workbags.avif",
  },
  {
    text: "Travel Bags",
    image: "/header/Travel_Bags.avif",
  },
];

const headerSubSectionsContentBags = [
  {
    text: "Men's Bag's",
    image: "/header/Men's_Bags.avif",
  },
  {
    text: "Woman's Bags",
    image: "/header/Womens_Bags.avif",
  },
  {
    text: "Backpacks",
    image: "/header/Backpacks.avif",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/header/Crossbody.avif",
  },
  {
    text: "Totes & Shoulder Bags",
    image: "/header/Totes.avif",
  },
  {
    text: "Market & Cooler Bags",
    image: "/header/nav-icon-cooler-bags.avif",
  },
  {
    text: "Work Bags",
    image: "/header/Workbags.avif",
  },
  {
    text: "Travel Bags",
    image: "/header/Travel_Bags.avif",
  },
];

export const WalletsContent = [
  {
    text: "Billfold's",
    image: "/header/Billfolds.avif",
  },
  {
    text: "Card Holders",
    image: "/header/Card_Holders.avif",
  },
  {
    text: "Zip Wallets",
    image: "/header/Zip_Wallets.avif",
  },
  {
    text: "Passport Holders",
    image: "/header/Passport_Holders_.avif",
  },
  {
    text: "RFID Protected",
    image: "/header/RFID.avif",
  },
];

const AccessoriesContent = [
  {
    text: "iPhone Cases",
    image: "/iPhone_Cases.avif",
  },
  {
    text: "Pixel Cases",
    image: "/Pixel_Cases.avif",
  },
  {
    text: "Samsung Cases",
    image: "/Quartz-Nav-Icon.avif",
  },
  { text: "Phone Wallets", image: "/nav-icon-phone-wallets.avif" },
];

const TechContent = [
  { text: "Pouches", image: "/nav-icon-pouches.avif" },
  {
    text: "Laptop & Tablet Sleeves",
    image: "",
  },
  { text: "Key Holders", image: "" },
  { text: "Folio", image: "" },
  { text: "Apple Watch Brands", image: "" },
  { text: "AirPods Cases", image: "" },
  { text: "AirTag Cases", image: "" },
];
