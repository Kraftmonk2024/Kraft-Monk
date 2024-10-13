import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-24 px-3 md:px-10 lg:px-24 py-4 bg-black flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="logo.jpg"
          alt=""
        />
        <div className="text-white/70 text-lg lg:text-2xl font-bold">Kraft Monk.</div>
      </div>
      <div className="flex items-center text-base lg:text-lg gap-4">
        <div className="px-4 py-2.5  hidden md:block">
          <div className="text-white  font-medium leading-tight">
            Work
          </div>
        </div>
        <div className="px-4 py-2.5  hidden md:block">
          <div className="text-white  font-medium leading-tight">
            Services
          </div>
        </div>
        <div className="px-2 lg:px-4 py-1 lg:py-3 bg-tertiary rounded-md flex items-center gap-1.5 transition-all hover:bg-secondary">
          <div className="text-white  font-medium leading-tight">
            Schedule a call
          </div>
          <div className="w-5 text-xl text-white">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
