import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-24 px-8 md:px-24 py-4 bg-black flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="logo.jpg"
          alt=""
        />
        <div className="text-white/70 text-2xl font-bold">Kraft Monk.</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-4 py-2.5">
          <div className="text-white text-base font-medium leading-tight">
            Work
          </div>
        </div>
        <div className="px-4 py-2.5">
          <div className="text-white text-base font-medium leading-tight">
            Services
          </div>
        </div>
        <div className="px-4 py-3 bg-tertiary rounded-md flex items-center gap-1.5 transition-all hover:bg-secondary">
          <div className="text-white text-base font-medium leading-tight">
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
