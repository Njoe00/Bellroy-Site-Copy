import React, { useState } from "react";

export default function NewsLetterSignUp() {
  const [buttonColour, setButtonColour] = useState(false);

  const changeButtonColour = () => {
    setButtonColour(!buttonColour);
  };

  return (
    <div className="px-5 py-3.5 flex flex-col bg-background-news-letter-colour items-center outline-none border-none">
      <h2 className="text-orange-600 text-center text-2xl font-serif flex justify-center">
        Get exclusive access to new products, deals & surprise treats.
      </h2>
      <div className="w-[452px] h-10 justify-center items-center flex flex-row bg-white rounded-md drop-shadow-lg m-4">
        <input
          className="w-[381.94px] h-8 flex text-sm outline-0 font-serif  border-none focus:ring-0 focus:border-none"
          type="email"
          placeholder="Enter your email to register"
          onFocus={changeButtonColour}
          onBlur={changeButtonColour}
        />
        <div className="flex justify-end items-center">
          <button
            className={`z-50 flex h-8 w-16 items-center text-center text-xs justify-center font-sans text-white rounded-md transition-colors ease-in-out duration-250 ${
              buttonColour ? `bg-orange-600` : `bg-gray-300`
            }`}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="w-[452px] text-xs text-center text-gray-400">
        You are signing up to receive product updates and newsletters. By
        signing up, you are consenting to our
        <span className="px-1 cursor-pointer text-orange-600 underline">
          privacy policy
        </span>
        but you can opt out at any time.
      </div>
    </div>
  );
}
