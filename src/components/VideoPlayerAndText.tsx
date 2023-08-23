import React from "react";

export default function VideoPlayerAndText() {
  return (
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
  );
}
