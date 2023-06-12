import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import imageSlide1 from "public/slider-image01.jpg";

export default function Home() {
  const [sliderValue, setSliderValue] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const [slidePicture, setsliderPicture] = useState(false);

  const handleSlide = () => {
    setsliderPicture(!slidePicture);
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const slides = [
    {
      url: "https://bellroy-cms-images.imgix.net/3954/slider-image01.jpg",
    },
    {
      url: "https://bellroy-cms-images.imgix.net/4413/slider-image02.jpg",
    },
    {
      url: "https://bellroy-cms-images.imgix.net/4414/slider-image03.jpg",
    },
    {
      url: "https://bellroy-cms-images.imgix.net/4425/slider-image04.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastslide = currentIndex === slides.length - 1;
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
          <Image src="/../public/logo.png" width={120} height={1} alt="test" />
          <div className="dropdown relative w-max">
            <button
              className="text-sm px-4 py-2.5 text-center inline-flex items-center hover:text-orange-600"
              onClick={handleDropDown}
            >
              Bags
            </button>
          </div>
        </div>
        <a href="/#" className="hover:text-orange-600">
          Wallets
        </a>
        <a href="/#" className="hover:text-orange-600">
          Accessories
        </a>
        <a href="/#" className="hover:text-orange-600">
          Tech
        </a>
        <a href="/#" className="hover:text-orange-600">
          Travel
        </a>
        <a href="/#" className="hover:text-orange-600">
          Collections
        </a>
        <a href="/#" className="hover:text-orange-600">
          About Us
        </a>
        <div className="gap-2 font-normal space-x-4 text-xs flex justify-end text-gray-500 p-2">
          <a href="/#">Help</a>
          <a href="/#">Find In-Store</a>
          <span className="flex justify-items-center">
            <Image src="/email.png" alt="mail" width={20} height={20} />
          </span>
          <span>
            <Image
              src="/magnifying-glass.png"
              alt="mail"
              width={20}
              height={20}
            />
          </span>
          <span className="flex items-center">
            <Image src="/trolley.png" alt="mail" width={22} height={20} />
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
          <li className="flex items-center flex-col px-6">
            <Image
              src="/Men's_Bags.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="#" className=" hover:text-orange-600">
              Men's Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image
              src="/Womens_Bags.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600">
              Woman's Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6 ">
            <Image
              src="/Backpacks.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600">
              Backpacks
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image
              src="/Crossbody.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600 text-center">
              Slings & Crossbody <br />
              Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image src="/Totes.avif" width={75} height={75} alt="Mens Bags" />
            <a href="/#" className="hover:text-orange-600 text-center">
              Totes & Shoulder <br />
              Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image
              src="/nav-icon-cooler-bags.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600 text-center">
              Market & Cooler <br />
              Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image
              src="/Workbags.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600">
              Work Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6">
            <Image
              src="/Travel_Bags.avif"
              width={75}
              height={75}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600">
              Duffel Bags
            </a>
          </li>
          <li className="flex items-center flex-col px-6 space-y-8">
            <Image
              className="flex relative top-5"
              src="/add.png"
              width={40}
              height={40}
              alt="Mens Bags"
            />
            <a href="/#" className="hover:text-orange-600">
              All Bags
            </a>
          </li>
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
            <Image src="/leather.png" alt="check-mark" width={30} height={10} />
          </div>
          <div>
            <span className="text-base text-background-main pl-4">
              Environmentally certified leather
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Image src="/trophy.png" alt="check-mark" width={30} height={10} />
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

      <div className="relative flex justify-center bg-gray-200">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-[582px] h-[462px] duration-500 text-9xl bg-no-repeat"
        ></div>
        <div className="absolute top=[50%] -translate-x-0 translate-y-[350%]  left-2 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size="40" />
        </div>
        <div className="absolute top=[50%] -translate-x-0 translate-y-[350%] right-2 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size="40" />
        </div>
      </div>

      {/* {slidePicture ? (
        <div className="flex justify-center flex-row bg-gray-200 p-32 space-x-6">
          <Transition
            show={true}
            className="relative flex divide-y divide-white-100 drop-shadow-lg z-0"
            enter="transform transition ease-in-out duration-300"
            enterFrom="opacity-100 -translate-x-36"
            enterTo="opacity-100 translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-100 -translate-x-36"
          >
            <div className="flex flex-col justify-center items-center bg-gray-200 ">
              <Image
                src="/slider-image01.jpg"
                width={500}
                height={500}
                alt="Wallet Holder"
              />
              <p className="p-8 text-center w-full text-sm bg-white drop-shadow-lg">
                Made from premium, environmentally certified leather,
                <br />
                that only gets better with age...
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-200 ">
              <Image
                src="/slider-image02.jpg"
                width={500}
                height={500}
                alt="Wallet Holder"
              />
              <p className="p-8 text-center w-full text-sm bg-white drop-shadow-lg">
                and fewer layers of leather, to eliminate bulk from <br />
                start...
              </p>
            </div>
            <div
              className="absolute text-7xl text-white cursor-pointer right-2 duration-500"
              onClick={handleSlide}
            >
              <BsChevronCompactRight />
            </div>
          </Transition>
        </div>
      ) : (
        <div className="flex justify-center flex-row bg-gray-200 p-32 space-x-6">
          <div
            className="absolute text-7xl p-2 left-5 text-white cursor-pointer duration-500"
            onClick={handleSlide}
          >
            <BsChevronCompactLeft />
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-200 ">
            <Image
              src="/slider-image03.jpg"
              width={500}
              height={500}
              alt="Wallet Holder"
            />
            <p className="p-8 text-center w-full text-sm bg-white drop-shadow-lg">
              their clever design features help keep them slim, even <br /> when
              they're full…
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-200 ">
            <Image
              src="/slider-image04.jpg"
              width={500}
              height={500}
              alt="Wallet Holder"
            />
            <p className="p-8 text-center w-full text-sm bg-white drop-shadow-lg">
              so they'll be with you from Day One to Day 1000, and <br />{" "}
              beyond.
            </p>
          </div>
        </div>
      )} */}

      {/* <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight />
      </div> */}
      {/* <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft />
      </div> */}
    </header>
  );
}
