import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-36 md:py-10 bg-[#131313] flex flex-col gap-14 mt-36">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h2 className="text-white/70 text-xl font-medium">Contact Us</h2>
          <div className="h-6 justify-start items-center gap-8 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <i className="ri-phone-line text-secondary text-2xl"></i>
              <p className="text-white text-xl font-normal leading-normal">
                +91 9008881443
              </p>
              <p className="text-white text-xl font-medium leading-normal">
                +91 79994 9959
              </p>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <i className="ri-mail-line text-secondary text-2xl"></i>
              <p className="text-white text-xl font-medium leading-normal">
                kraftmonkofficial@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-white/70 text-xl font-medium">Socials</h2>
          <div className="flex gap-4">
            <i className="ri-linkedin-fill hover:text-secondary text-white text-xl"></i>
            <i className="ri-instagram-line hover:text-secondary text-white text-xl"></i>
            <i className="ri-youtube-line hover:text-secondary text-white text-xl"></i>
          </div>
        </div>
      </div>

      <hr className="opacity-30" />

      <p className="text-center text-white/75 text-xl font-normal">
        KraftMonk©2024 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
