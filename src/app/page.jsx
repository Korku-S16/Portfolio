import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:12 lg:px-24 xl:px-48">
      {/* Image Container */}
      <div className="h-1/2 lg:h-full  lg:w-1/2 relative">
        <Image src="/hero.png" alt="Hero img" fill className="object-contain" />
      </div>
      {/* Text Conatiner */}
        <div className=" h-1/2 lg:h-full  lg:w-1/2  flex flex-col items-center justify-center gap-8">
          {/* Titile */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Pixel Perfect: Showcasing My Digital Masterpieces
          </h1>
          <p>
            Explore my curated collection of digital masterpieces, crafted with
            precision and creativity.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-2 rounded-lg ring-2 ring-black bg-black text-white">
              View my Work
            </button>
            <button className="p-2 rounded-lg ring-2 ring-black">
              Contact Me
            </button>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
