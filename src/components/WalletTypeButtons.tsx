import React from "react";
import Image from "next/image";
import { BsChevronCompactDown } from "react-icons/bs";


export default function WalletTypeButtons({
  imagesToShow,
  setImagesToShow,
  
}: {
  imagesToShow: string;
  setImagesToShow: (val: string) => void;
}) {
  return (
    <div className="flex flex-row">
      {whyDoYouCarryContent.map((content, index) => {
        const isActive = imagesToShow === content.text;
        return (
          <div
            className="flex flex-col space-x-36 py-14 items-center justify-center"
            key={index}
          >
            <div
              className="flex items-center flex-col px-24 group cursor-pointer"
              onClick={() => setImagesToShow(content.text)}
            >
              <Image
                src={isActive ? content.activeImage : content.inactiveImage}
                width={96}
                height={71}
                alt="Mens Bags"
                style={{ height: "100%", width: "auto" }}
              />
              <div className="absolute group-hover:text-orange-600 text-2xl flex justify-center translate-y-32">
                <BsChevronCompactDown />
              </div>

              <div className="group-hover:text-orange-600 text-sm translate-y-4 text-gray-400">
                {content.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const whyDoYouCarryContent = [
  {
    text: "Cards only",
    inactiveImage: "/icon-inactive-card-sleeve.jpg",
    activeImage: "/icon-active-card-sleeve.avif",
  },
  {
    text: "Cards and bills",
    inactiveImage: "/icon-inactive-card-sleeve.jpg",
    activeImage: "/icon-active-note-sleeve.jpg",
  },
  {
    text: "Cards, bills and coins",
    inactiveImage: "/icon-inactive-folio.jpg",
    activeImage: "/icon-active-folio.avif",
  },
];

const cardsOnlyProduct = [
  {
    name: "Card Sleeve",
    colours: [
      "black",
      "card-sleeve-ocean",
      "card-sleeve-gray",
      "card-sleeve-teal",
      "card-sleeve-hazel",
    ],
    price: "C$69",
    image: [
      "/card-Sleeves/card-Sleeve_Black.avif",
      "/card-Sleeves/card-Sleeve_Ocean.avif",
      "/card-Sleeves/card-Sleeve_Gray.avif",
      "/card-Sleeves/card-Sleeve_Teal.avif",
      "/card-Sleeves/card-Sleeve_Hazel.avif",
    ],
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/card-Sleeve-Black_Ash.avif"],
    edition: "Carryology Essentials Edition",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/flip-Case_Terracotta.avif"],
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["black"],
    price: "C$85",
    image: ["/card-Sleeves/card-Pocket-Ranger_Green.avif"],
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/card-Sleeves/phone-Case_Black.avif"],
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/card-Sleeves/card-Sleeve_Mirum_Black.avif"],
    edition: "MIRUM Edition",
  },
];

const cardsAndBillsProduct = [
  {
    name: "Apex Slim Sleeve",
    colours: ["black", "card-sleeve-gray", "card-sleeve-ocean"],
    price: "C$165",
    image: [
      "/wallets-coins/apex-Slim-Sleeve_Raven.avif",
      "/CB-1.avif",
      "/CB-2.avif",
    ],
    edition: "RFID safe",
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$99",
    image: ["/CB-3.avif"],
    edition: "Carryology Essentials Edition",
  },
  {
    name: "Slim Sleeve",
    colours: [
      "black",
      "card-sleeve-gray",
      "card-sleeve-ocean",
      "card-sleeve-teal",
      "wallet-chocolate",
      "card-sleeve-hazel",
    ],
    price: "C$99",
    image: [
      "/CB-4.avif",
      "/CB-6.avif",
      "/CB-7.avif",
      "/CB-8.avif",
      "/CB-10.avif",
      "/CB-11.avif",
    ],
  },
  {
    name: "Minimalist Set",
    colours: ["black"],
    price: "C$109 - $C129",
    image: ["/wallets-coins/CB-16.avif"],
    edition: "Valued at C$144 - C$164",
  },
  {
    name: "Slim Sleeve",
    colours: ["black", "card-sleeve-hazel", "wallet-chocolate"],
    price: "C$145",
    image: ["/CB-12.avif", "/CB-13.avif", "/CB-14.avif"],
    edition: "Premium EditionRFID safe",
  },
  {
    name: "Slim Sleeve",
    colours: ["black"],
    price: "C$125",
    image: ["/CB-15.avif"],
    edition: "MIRUM Edition",
  },
];

const cardsBillsAndCoinsProduct = [
  {
    name: "Folio Mini",
    colours: [
      "black",
      "card-sleeve-gray",
      "card-sleeve-teal",
      "note-sleeve-hazelnut",
    ],
    price: "C$115",
    image: [
      "/card-Bills-Coins/folio-Mini_Black.avif",
      "/card-Bills-Coins/folio-Mini_Gray.avif",
      "/card-Bills-Coins/folio-Mini_Teal.avif",
      "/card-Bills-Coins/folio-Mini_Hazel.avif",
    ],
    edition: "RFID safe",
  },
  {
    name: "Note Sleeve",
    colours: [
      "black",
      "card-sleeve-gray",
      "card-sleeve-ocean",
      "card-sleeve-teal",
      "note-sleeve-ranger-green",
      "note-sleeve-java",
      "note-sleeve-cocoa",
      "note-sleeve-terracotta",
    ],
    price: "C$115",
    image: [
      "/card-Bills-Coins/note-Sleeve_Black.avif",
      "/card-Bills-Coins/note-Sleeve_Gray.avif",
      "/card-Bills-Coins/note-Sleeve_Ocean.avif",
      "/card-Bills-Coins/note-Sleeve_Teal.avif",
      "/card-Bills-Coins/note-Sleeve_Ranger-Green.avif",
      "/card-Bills-Coins/note-Sleeve_Cocoa.avif",
      "/card-Bills-Coins/note-Sleeve_Java.avif",
      "/card-Bills-Coins/note-Sleeve_Terracotta",
    ],
    edition: "RFID safe",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/2.avif"],
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["black"],
    price: "C$85",
    image: ["/3.avif"],
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/4.avif"],
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/5.avif"],
    edition: "MIRUM Edition",
  },
];
