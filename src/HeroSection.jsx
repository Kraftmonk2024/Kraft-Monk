import React from "react";

const HeroSection = ({ onExploreWorkClick }) => {
  return (
    <div className="flex-grow px-5 md:px-10 lg:px-24 py-10 lg:py-32 bg-black flex flex-col justify-center items-start gap-8">
      <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
        <div className="text-white text-lg  md:text-2xl lg:text-3xl font-normal">
          Kraft Monk - A Design & Development Studio.
        </div>
        <div className="text-3xl md:text-5xl lg:text-7xl font-bold">
          <span className="text-white">
            Helping Businesses Grow <i className="ri-arrow-right-up-line"></i>{" "}
            Online with
          </span>
          <span className="text-secondary"> Digital Solutions.</span>
        </div>
      </div>
      <div className=" px-3 lg:px-6 py-1 md:py-2 lg:py-4 bg-black border-2 border-secondary flex items-center gap-2 transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_rgba(238,117,14,1)]">
        <div
          onClick={onExploreWorkClick}
          className="text-white text-sm md:text-lg lg:text-xl font-medium uppercase leading-loose"
        >
          Explore our Work
        </div>
        <div className="w-8 text-white text-2xl">
          <i className="ri-arrow-right-down-line"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
