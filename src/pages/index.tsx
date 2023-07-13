import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import VideoPlayerAndText from "@/components/VideoPlayerAndText";
import BannerText from "@/components/BannerText";
import SliderImage from "@/components/SliderImage";
import WalletTypeButtons from "@/components/WalletTypeButtons";

export default function Home() {
  const [walletDataSet, setWalletDataSet] = useState(cardsOnlyProduct);
  const [imagesToShow, setImagesToShow] = useState("Cards only");

  useEffect(() => {
    if (imagesToShow === "Cards only") {
      setWalletDataSet(cardsOnlyProduct);
    } else if (imagesToShow === "Cards and bills") {
      setWalletDataSet(cardsAndBillsProduct);
    } else if (imagesToShow === "Cards, bills and coins") {
      setWalletDataSet(cardsBillsAndCoinsProduct);
    }
  }, [imagesToShow]);

  return (
    <header className="bg-white z-100">
      <span className="place-content-end p-1 text-xs right-6 absolute text-gray-500 font-normal">
        Free shipping available 🇨🇦
      </span>
      <Header />

      <div className="h-screen bg-background-main">
        <h1 className="font-serif flex text-white text-8xl p-16 justify-center">
          Slim Your Wallet
        </h1>
      </div>

      <BannerText />
      <VideoPlayerAndText />
      <SliderImage />

      <div className="bg-white flex flex-col items-center p-40">
        <WalletTypeButtons
          imagesToShow={imagesToShow}
          setImagesToShow={setImagesToShow}
        />

        <div className="flex flex-row flex-wrap justify-center">
          {walletDataSet.map((content, index) => (
            <ProductCard
              key={index}
              content={content}
              image={content.image}
              index={index}
              imageAlt={content.imageAlt}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

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
    imageAlt: [
      "/card-Sleeves/card-Sleeve-Black_Alt.avif",
      "/card-Sleeves/card-Sleeve_Ocean_Alt.avif",
      "/card-Sleeves/card-Sleeve_Gray_Alt.avif",
      "/card-Sleeves/card-Sleeve_Teal_Alt.avif",
      "/card-Sleeves/card-Sleeve_Hazel_Alt.avif",
    ]
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/card-Sleeve-Black_Ash.avif"],
    imageAlt: ["/card-Sleeves/card-Sleeve-Black_Ash_Alt.avif"],
    edition: "Carryology Essentials Edition",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/flip-Case_Terracotta.avif"],
    imageAlt: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["black"],
    price: "C$85",
    image: ["/card-Sleeves/card-Pocket-Ranger_Green.avif"],
    imageAlt: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/card-Sleeves/phone-Case_Black.avif"],
    imageAlt: ["/card-Sleeves/phone-Case_Black_Alt.avif"],
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/card-Sleeves/card-Sleeve_Mirum_Black.avif"],
    imageAlt: ["/card-Sleeves/card-Sleeve_Mirum_Black_Alt.avif"],
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
    imageAlt: [],
    edition: "RFID safe",
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$99",
    image: ["/CB-3.avif"],
    imageAlt: [],
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
    imageAlt: [],
  },
  {
    name: "Minimalist Set",
    colours: ["black"],
    price: "C$109 - $C129",
    image: ["/wallets-coins/CB-16.avif"],
    imageAlt: [],
    edition: "Valued at C$144 - C$164",
  },
  {
    name: "Slim Sleeve",
    colours: ["black", "card-sleeve-hazel", "wallet-chocolate"],
    price: "C$145",
    image: ["/CB-12.avif", "/CB-13.avif", "/CB-14.avif"],
    imageAlt: [],
    edition: "Premium EditionRFID safe",
  },
  {
    name: "Slim Sleeve",
    colours: ["black"],
    price: "C$125",
    image: ["/CB-15.avif"],
    imageAlt: [],
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
    imageAlt: [],
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
    imageAlt: [],
    edition: "RFID safe",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/flip-case_Terracotta.avif"],
    imageAlt: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["note-sleeve-ranger-green"],
    price: "C$85",
    image: ["/card-Sleeves/card-Pocket-Ranger_Green.avif"],
    imageAlt: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/phone-Case_Phone.avif"],
    imageAlt: ["/phone-Case_Black_Alt.avif"],
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/card-Sleeves/card-Sleeve_Mirum.avif"],
    imageAlt: ["/card-Sleeves/card-Sleeve_Mirum_Alt.avif"],
    edition: "MIRUM Edition",
  },
];
