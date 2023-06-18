import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactDown,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const [sliderValue, setSliderValue] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const [slidePicture, setsliderPicture] = useState(false);
  const [imagesToShow, setImagesToShow] = useState("Cards only");

  const handleSlide = () => {
    setsliderPicture(!slidePicture);
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slidesSetOne = [
    {
      url: "https://bellroy-cms-images.imgix.net/3954/slider-image01.jpg",
      text: "Made from premium, enviormentally certified leather, that only gets better with age...",
    },
    {
      url: "https://bellroy-cms-images.imgix.net/4413/slider-image02.jpg",
      text: "and fewer of leather, to eliminate bulk from the start...",
    },
  ];

  const slidesSlidesSetTwo = [
    {
      url: "https://bellroy-cms-images.imgix.net/4414/slider-image03.jpg",
      text: "their clever design features help keep them slim, even when they're full…",
    },
    {
      url: "https://bellroy-cms-images.imgix.net/4425/slider-image04.jpg",
      text: "so they'll be with you from Day One to Day 1000, and beyond.",
    },
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

  const headerSubSectionsContentWallets = [
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
      price: "C$69",
      image: "0.avif",
    },
  ];

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

  return (
    <header className="bg-white z-100">
      <span className="place-content-end p-1 text-xs right-6 absolute text-gray-500 font-normal">
        Free shipping available 🇨🇦
      </span>
      <div className="bg-white p-5 flex relative gap-2 font-normal space-x-10 text-sm items-center h-28 z-10">
        <div className="gap-2 font-normal space-x-14 items-center flex">
          <Image
            src="/public/logo.png"
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
              style={{ height: "100%", width: "auto" }}
            />
          </span>
          <span className="flex items-center">
            <Image
              src="/trolley.png"
              alt="mail"
              width={22}
              height={20}
              style={{ height: "100%", width: "100%" }}
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
      <div className="h-screen bg-background-main">
        <h1 className="font-serif flex text-white text-8xl p-16 justify-center">
          Slim Your Wallet
        </h1>
      </div>
      <div>
        <p className="flex text-base p-0 font-bold justify-center bg-background-main">
          Move the slider to compare wallets
        </p>
      </div>
      {/* <div className='block mr-auto ml-auto w-28'>
            <div className='flex flex-col space-y-2 p-2 w-80'>
              <input type='range' className='w-full' min="0" max="9" step="1" value={sliderValue} 
                onChange={(event) => {
                  setSliderValue(event.target.value)
                }} 
                />
              <ul className="flex justify-between w-full px-2.5"> 
                <li className="flex justify-center relative">
                  <span className="absolute">
                    {textValue}
                    <Image 
                      src='/syw-compare.avif'
                      width={600} 
                      height={1700}
                      quality={100}
                      alt='alt'
                      key=123456
                      />
                  </span>
                </li>
              </ul>
            </div>
          </div> */}
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

        <div className="flex absolute justify-center bottom-4 items-center">
          {slidesSetOne.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white flex flex-col items-center p-40">
        <div className="flex">
          <a className="text-lg">Why do you carry in your wallet?</a>
        </div>
        <div className="flex flex-row">
          {whyDoYouCarryContent.map((content, i) => (
            <div
              className="flex flex-col space-x-36 py-14 items-center justify-center"
              key={i}
            >
              <div
                className="flex items-center flex-col px-24 group cursor-pointer"
                onClick={() => setImagesToShow(content.text)}
              >
                {imagesToShow === content.text ? (
                  <>
                    <Image
                      src={content.activeImage}
                      width={96}
                      height={71}
                      alt="Mens Bags"
                      style={{ height: "100%", width: "auto" }}
                    />
                    <div className="absolute group-hover:text-orange-600 text-2xl flex justify-center translate-y-32">
                      <BsChevronCompactDown />
                    </div>
                  </>
                ) : (
                  <Image
                    src={content.inactiveImage}
                    width={96}
                    height={71}
                    alt="Men's Bags"
                    style={{ height: "100%", width: "auto" }}
                  />
                )}
                <div className="group-hover:text-orange-600 text-sm translate-y-4 text-gray-400">
                  {content.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" group table flex-col relative  justify-center">
          <button className="invisible group-hover:visible absolute top-0 right-0 py-[4px] px-[14px] flex-col text-[12px] bg-gray-300">
            CLOSE X
          </button>
          <div className="bg-gray-200 flex flex-col px-16 py-32">
            <Image src="/0.avif" height={300} width={300} alt="test" />
            <div></div>
            <div className="relative flex flex-col items-center flex-wrap top-24 font-normal">
              <div className="text-sm">Card Sleeve</div>
              <div className="text-sm">C$69</div>
              <button className="relative hover:bg-orange-500 hover:text-white hover:border-white tracking-wider text-sm font-normal border rounded border-black text- px-4 py-2 top-6 ">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
