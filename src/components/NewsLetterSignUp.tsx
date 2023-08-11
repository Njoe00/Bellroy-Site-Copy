import React, { useState } from "react";

export default function NewsLetterSignUp() {
  const [buttonColour, setButtonColour] = useState(false);

  const HandleButtonColour = () => {
    setButtonColour(!buttonColour);
  };

  return (
    <div className="flex flex-col items-center border-none bg-background-news-letter-colour px-5 py-3.5 outline-none">
      <h2 className="flex justify-center text-center font-serif text-2xl text-orange-600">
        Get exclusive access to new products, deals & surprise treats.
      </h2>
      <div className="m-4 flex h-10 w-[452px] flex-row items-center justify-center rounded-md bg-white drop-shadow-lg">
        <input
          className="flex h-8 w-[381.94px] border-none font-serif text-sm  outline-0 focus:border-none focus:ring-0"
          type="email"
          placeholder="Enter your email to register"
          onFocus={HandleButtonColour}
          onBlur={HandleButtonColour}
        />
        <div className="flex items-center justify-end">
          <button
            className={`duration-250 z-50 flex h-8 w-16 items-center justify-center rounded-md text-center font-sans text-xs text-white transition-colors ease-in-out ${
              buttonColour ? `bg-orange-600` : `bg-gray-300`
            }`}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="w-[452px] text-center text-xs text-gray-400">
        You are signing up to receive product updates and newsletters. By
        signing up, you are consenting to our
        <span className="cursor-pointer px-1 text-orange-600 underline">
          privacy policy
        </span>
        but you can opt out at any time.
      </div>
    </div>
  );
}
