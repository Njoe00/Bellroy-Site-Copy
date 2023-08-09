import react from "react";

export default function NewsLetterSignUp() {
  return (
    <div className="px-5 py-3.5 flex flex-col bg-background-news-letter-colour items-center">
      <h2 className="text-orange-600 text-center text-2xl font-serif flex justify-center">
        Get exclusive access to new products, deals & surprise treats.
      </h2>
      <div className="w-[452px] h-10 justify-center items-center flex relative">
        <input
          className="absolute w-[381.94px] h-8 flex border-white"
          type="email"
          placeholder="Enter your email register"
        />
        <div className="flex justify-end">
          <button className="absolute flex h-8 w-16 items-center justify-center bg-gray-200 text-white">
            Sumbit
          </button>
        </div>
      </div>
    </div>
  );
}
