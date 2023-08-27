import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [headerContent, setHeaderContent] = useState(WalletsContent);
  const [headersection, setHeaderSection] = useState("Wallets");

  useEffect(() => {
    if (headersection === "Bags") {
      setHeaderContent(BagsContent);
    } else if (headersection === "Wallets") {
      setHeaderContent(WalletsContent);
    } else if (headersection === "Accessories") {
      setHeaderContent(AccessoriesContent);
    } else if (headersection === "Tech") {
      setHeaderContent(TechContent);
    } else if (headersection === "Travel") {
      setHeaderContent(TravelContent);
    } else if (headersection === "About Us") {
      setHeaderContent(AboutUsContent);
    }
  }, [headersection]);

  const changeHeaderContent = (section: string) => {
    setHeaderSection(section);
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  };

  return (
    <>
      <div
        className="bg-white p-5 flex relative gap-2 font-normal space-x-10 justify-between text-sm items-center h-[105px] z-10"
        onMouseLeave={() => {
          handleMouseLeave();
        }}
      >
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
                onMouseLeave={() => {
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
        className="relative flex divide-y divide-white-100 drop-shadow-lg z-0"
        enter="transform transition ease-in-out duration-300"
        enterFrom="opacity-100 -translate-y-36"
        enterTo="opacity-100 translate-y-0"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-100 -translate-y-36"
      >
        <ul className="absolute w-screen bg-white flex flex-row text-gray-500 justify-start pb-8 pl-32 text-sm">
          {headerContent.map((content, index) => (
            <li className="flex items-center flex-col px-2" key={index}>
              <Image
                className="rounded-md"
                src={content.image}
                width={Number(content.width)}
                height={Number(content.height)}
                alt="Mens Bags"
                style={{ height: content.height, width: content.width }}
              />
              <a
                href="#"
                className="break-normal w-32 text-center hover:text-orange-600 overflow-auto"
              >
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
    text: "About Us",
  },
];

const BagsContent = [
  {
    text: "Men's Bag's",
    image: "/header/Men's_Bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Woman's Bags",
    image: "/header/Womens_Bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Backpacks",
    image: "/header/Backpacks.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/header/Crossbody.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/header/Crossbody.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Totes & Shoulder Bags",
    image: "/header/Totes.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Market & Cooler Bags",
    image: "/header/nav-icon-cooler-bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Work Bags",
    image: "/header/Workbags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Travel Bags",
    image: "/header/Travel_Bags.avif",
    width: "74",
    height: "74",
  },
];

const headerSubSectionsContentBags = [
  {
    text: "Men's Bag's",
    image: "/Men's_Bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Woman's Bags",
    image: "/Womens_Bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Backpacks",
    image: "/Backpacks.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Slings & Crossbody Bags",
    image: "/Crossbody.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Totes & Shoulder Bags",
    image: "/Totes.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Market & Cooler Bags",
    image: "/nav-icon-cooler-bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Work Bags",
    image: "/Workbags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Travel Bags",
    image: "/Travel_Bags.avif",
    width: "74",
    height: "74",
  },
];

export const WalletsContent = [
  {
    text: "Billfold's",
    image: "/Billfolds.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Card Holders",
    image: "/Card_Holders.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Zip Wallets",
    image: "/Zip_Wallets.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Passport Holders",
    image: "/Passport_Holders_.avif",
    width: "74",
    height: "74",
  },
  {
    text: "RFID Protected",
    image: "/RFID.avif",
    width: "74",
    height: "74",
  },
];

const AccessoriesContent = [
  {
    text: "iPhone Cases",
    image: "/iPhone_Cases.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Pixel Cases",
    image: "/Pixel_Cases.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Samsung Cases",
    image: "/Quartz-Nav-Icon.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Phone Wallets",
    image: "/nav-icon-phone-wallets.avif",
    width: "74",
    height: "74",
  },
];

const TechContent = [
  {
    text: "Pouches",
    image: "/nav-icon-pouches.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Laptop & Tablet Sleeves",
    image: "/Laptop_Cases.avif",
    width: "74",
    height: "74",
  },
  { text: "Key Holders", image: "/Key_Covers.avif", width: "74", height: "74" },
  { text: "Folio", image: "/Folios.avif", width: "74", height: "74" },
  {
    text: "Apple Watch Brands",
    image: "/Apple_Watch.avif",
    width: "74",
    height: "74",
  },
  {
    text: "AirPods Cases",
    image: "/Airpod_Cases.avif",
    width: "74",
    height: "74",
  },
  { text: "AirTag Cases", image: "/AirTags.avif", width: "74", height: "74" },
];

const TravelContent = [
  {
    text: "Travel Bags",
    image: "/Travel_Bags.avif",
    width: "74",
    height: "74",
  },
  {
    text: "Passport Holders",
    image: "/header/Passport_Holders_.avif",
    width: "74",
    height: "74",
  },
  {
    text: "RFID Protected",
    image: "/header/RFID.avif",
    width: "74",
    height: "74",
  },
  { text: "Toiletry Bags", image: "/Folios.avif", width: "74", height: "74" },
];

const AboutUsContent = [
  {
    text: "Our Story",
    image: "/nav-icon-out-story.avif",
    width: "120",
    height: "84",
  },
  {
    text: "Our Materials",
    image: "/nav-icon-our-materials.avif",
    width: "120",
    height: "84",
  },
  {
    text: "Responible Business",
    image: "/nav-icon-responsible-business.avif",
    width: "120",
    height: "84",
  },
  {
    text: "The Jounrnal",
    image: "/nav-icon-the-journal.avif",
    width: "120",
    height: "84",
  },
  {
    text: "Ambassador",
    image: "/nav-icon-ambassadors.avif",
    width: "120",
    height: "84",
  },
  {
    text: "Shipping & Delivery",
    image: "/nav-icon-shipping-delivery.avif",
    width: "120",
    height: "84",
  },
];
