import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Transition } from "@headlessui/react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactDown,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import QuotesContainer from "@/components/QuotesContainer";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import VideoPlayerAndText from "@/components/VideoPlayerAndText";
import SliderImageWallet from "@/components/SliderImageWallet";
import PaymentsContainer from "../components/PaymentsContainer";
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import SiteMapFooter from "@/components/SiteMapFooter";
import WalletTypeButtons from "@/components/WalletTypeButtons";
import BannerText from "@/components/BannerText";

=======
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import VideoPlayerAndText from "@/components/VideoPlayerAndText";
import BannerText from "@/components/BannerText";
import SliderImage from "@/components/SliderImage";
import WalletTypeButtons from "@/components/WalletTypeButtons";
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)

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

<<<<<<< HEAD
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesSetOne.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastslide = currentIndex === slidesSetOne.length - 1;
    const newIndex = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let textValue;
  if (sliderValue === "9") {
    textValue = "Plus Cash";
  } else if (sliderValue === "1") {
    textValue = "1 Card";
  } else {
    textValue = `${sliderValue} Cards`;
  }

=======
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  return (
    <header className="bg-white z-100">
      <span className="place-content-end p-1 text-xs right-6 absolute text-gray-500 font-normal z-50">
        Free shipping available 🇨🇦
      </span>
      <Header />

      <div className="h-screen flex flex-col bg-background-main">
        <h1 className="font-serif flex text-white text-8xl p-16 justify-center">
          Slim Your Wallet
        </h1>
        <SliderImageWallet />
      </div>
<<<<<<< HEAD
      <div className="bg-gray-200 flex justify-evenly py-8 p-8">
        <div className="flex items-center pl-4">
          <div>
            <Image
              src="/check-mark.png"
              alt="check-mark"
              width={30}
              height={10}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
          <div>
            <span className="text-base text-background-main pl-4">
              3 year warranty
            </span>
          </div>
        </div>
        <div className="flex items-center -mx-96">
          <div>
            <Image
              src="/leather.png"
              alt="check-mark"
              width={30}
              height={10}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
          <div>
            <span className="text-base text-background-main pl-4">
              Environmentally certified leather
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Image
              src="/trophy.png"
              alt="check-mark"
              width={30}
              height={10}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
          <div>
            <span className="text-base text-background-main pl-4">
              Award-winning service
            </span>
          </div>
        </div>
      </div>

      <div className="flex m-11 justify-center">
        <div className="flex relative">
          <iframe
            width="814px"
            height="458px"
            src="https://www.youtube-nocookie.com/embed/IvkAjZd8rjE?autoplay=1&loop=1&playlist=IvkAjZd8rjE&origin=bellroy.com&modestbranding=1&showinfo=0&rel=0&version=3&mute=1"
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center ml-14">
          <h2 className="font-medium text-sm">
            THE SAME CAPACITY, WITHOUT THE <br /> THE EXTRA BULK
          </h2>
          <p className="flex items-center py-2 text-sm">
            <br />
            Our wallets are designed to hold what you need, while <br /> keeping
            your pockets trim and trailored.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col py-28 justify-center bg-gray-100 items-center z-40">
        <div className="flex flex-row space-x-4 drop-shadow-lg">
          <div>
            <div
              style={{
                backgroundImage: `url(${slidesSetOne[currentIndex].url})`,
              }}
              className="bg-cover w-[365px] h-[280px] duration-500 bg-no-repeat flex q"
            ></div>
            <div className="flex flex-col bottom-4 items-center text-xs">
              <div className="bg-white w-[365px] h-[94px] flex flex-col text-center justify-center p-4">
                {`${slidesSetOne[currentIndex].text}`}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${slidesSlidesSetTwo[currentIndex].url})`,
              }}
              className="bg-cover w-[365px] h-[280px] duration-500 bg-no-repeat flex q"
            ></div>
            <div className="flex flex-col bottom-4 items-center text-xs">
              <div className="bg-white w-[365px] h-[94px] flex flex-col text-center justify-center p-4">
                {`${slidesSlidesSetTwo[currentIndex].text}`}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] -translate-x-[-500px] translate-y-[-40%] left-2 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size="40" />
        </div>
        <div className="absolute top-[50%] -translate-x-[500px] translate-y-[-60%] right-1 text-2xl rounded-full p-2 text-gray-300 cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size="40" />
        </div>

=======

>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
      <BannerText />
      <VideoPlayerAndText />
      <SliderImage />

      <div className="bg-white flex flex-col items-center p-40">
<<<<<<< HEAD
        <h1 className="text-xl flex absolute h-40 w-auto">
          What do you carry in your wallet?
        </h1>
=======
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
        <WalletTypeButtons
          imagesToShow={imagesToShow}
          setImagesToShow={setImagesToShow}
        />

        <div className="flex flex-row flex-wrap justify-center">
          {walletDataSet.map((content, index) => (
<<<<<<< HEAD
            <ProductCard key={index} content={content} />
=======
            <ProductCard
              key={index}
              content={content}
              image={content.image}
              index={index}
              imageAlt={content.imageAlt}
            />
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
          ))}
        </div>
      </div>
      <QuotesContainer />
      <PaymentsContainer />
      <NewsLetterSignUp />
      <SiteMapFooter />
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
<<<<<<< HEAD
    showMoreImage: [
=======
    imageAlt: [
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
      "/card-Sleeves/card-Sleeve-Black_Alt.avif",
      "/card-Sleeves/card-Sleeve_Ocean_Alt.avif",
      "/card-Sleeves/card-Sleeve_Gray_Alt.avif",
      "/card-Sleeves/card-Sleeve_Teal_Alt.avif",
      "/card-Sleeves/card-Sleeve_Hazel_Alt.avif",
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/card-Sleeve-Black_Ash.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/card-Sleeve-Black_Ash_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/card-Sleeve-Black_Ash_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "Carryology Essentials Edition",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/flip-Case_Terracotta.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["black"],
    price: "C$85",
    image: ["/card-Sleeves/card-Pocket-Ranger_Green.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/card-Sleeves/phone-Case_Black.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/phone-Case_Black_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/phone-Case_Black_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/card-Sleeves/card-Sleeve_Mirum_Black.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/card-Sleeve_Mirum_Black_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/card-Sleeve_Mirum_Black_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
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
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "RFID safe",
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$99",
    image: ["/CB-3.avif"],
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
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
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Minimalist Set",
    colours: ["black"],
    price: "C$109 - $C129",
    image: ["/wallets-coins/CB-16.avif"],
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "Valued at C$144 - C$164",
  },
  {
    name: "Slim Sleeve",
    colours: ["black", "card-sleeve-hazel", "wallet-chocolate"],
    price: "C$145",
    image: ["/CB-12.avif", "/CB-13.avif", "/CB-14.avif"],
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "Premium EditionRFID safe",
  },
  {
    name: "Slim Sleeve",
    colours: ["black"],
    price: "C$125",
    image: ["/CB-15.avif"],
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
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
<<<<<<< HEAD
    howMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
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
<<<<<<< HEAD
    showMoreImage: [],
=======
    imageAlt: [],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "RFID safe",
  },
  {
    name: "Flip Case",
    colours: ["black"],
    price: "C$69",
    image: ["/card-Sleeves/flip-case_Terracotta.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/flip-Case_Terracotta_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "Second Edition",
  },
  {
    name: "Card Pocket",
    colours: ["note-sleeve-ranger-green"],
    price: "C$85",
    image: ["/card-Sleeves/card-Pocket-Ranger_Green.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/card-Pocket-Ranger_Green_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Phone Case - 3 Card",
    colours: ["black"],
    price: "C$99",
    image: ["/phone-Case_Phone.avif"],
<<<<<<< HEAD
    showMoreImage: ["/phone-Case_Black_Alt.avif"],
=======
    imageAlt: ["/phone-Case_Black_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
  },
  {
    name: "Card Sleeve",
    colours: ["black"],
    price: "C$95",
    image: ["/card-Sleeves/card-Sleeve_Mirum.avif"],
<<<<<<< HEAD
    showMoreImage: ["/card-Sleeves/card-Sleeve_Mirum_Alt.avif"],
=======
    imageAlt: ["/card-Sleeves/card-Sleeve_Mirum_Alt.avif"],
>>>>>>> 6b92451 (adding alt images to product card and updating card buttons to show both images)
    edition: "MIRUM Edition",
  },
];
