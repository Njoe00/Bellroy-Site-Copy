import react from "react";

export default function NewsLetterSignUp() {
  return (
    <div className="px-5 py-3.5 flex flex-col bg-background-news-letter-colour items-center z-50">
      <h2 className="text-orange-600 text-center text-2xl font-serif flex justify-center">
        Get exclusive access to new products, deals & surprise treats.
      </h2>
      <div className="w-[452px] h-10 justify-center items-center flex flex-row bg-white rounded-sm drop-shadow-md">
        <input
          className="w-[381.94px] h-8 flex border-white text-sm font-serif"
          type="email"
          placeholder="Enter your email register"
        />
        <div className="flex justify-end items-center">
          <button className="z-10 flex h-8 w-16 items-center text-center justify-center bg-gray-400 text-white rounded-md">
            Sumbit
          </button>
        </div>
      </div>
    </div>
  );
}
