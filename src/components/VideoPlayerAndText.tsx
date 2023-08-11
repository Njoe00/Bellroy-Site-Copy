import react from "react";

export default function VideoPlayerAndText() {
  return (
    <div className="m-11 flex justify-center">
      <div className="relative flex">
        <iframe
          width="814px"
          height="458px"
          src="https://www.youtube-nocookie.com/embed/IvkAjZd8rjE?autoplay=1&loop=1&playlist=IvkAjZd8rjE&origin=bellroy.com&modestbranding=1&showinfo=0&rel=0&version=3&mute=1"
        />
      </div>
      <div className="ml-14 flex flex-col items-center justify-center text-center">
        <h2 className="text-sm font-medium">
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
