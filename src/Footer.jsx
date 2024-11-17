import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-10 lg:px-36 py-4 md:py-10 bg-[#131313] flex flex-col gap-7 lg:gap-14 mt-36">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-8">
          <div className="text-white/70 text-2xl font-medium ">Contact Us</div>
          <div className=" justify-start items-center gap-5 lg:gap-8 flex flex-wrap">
            <div className="justify-start items-center gap-2 flex">
              <i className="ri-phone-line text-2xl relative text-secondary"></i>
              <div className=" text-gray-100 text-xl lg:text-2xl  font-['Inter'] leading-loose">
                +91 79994 9959
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <i className="ri-phone-line text-2xl relative text-secondary"></i>
              <div className=" text-gray-100 text-xl lg:text-2xl  font-['Inter'] leading-loose">
                +91 9008881443
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <i className="ri-mail-line text-2xl relative text-secondary"></i>
              <div className="text-gray-100 text-base lg:text-2xl font-medium  leading-loose">
                kraftmonkofficial@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 mt-5">
          <div className="text-white/70 text-2xl font-medium">Socials</div>
          <div className="flex gap-4">
            <i
              className="ri-linkedin-fill hover:text-secondary
                         text-white text-xl"
            ></i>
            <a
              href="https://www.instagram.com/kraftmonk_official/"
              target="_blank"
            >
              <i
                className="ri-instagram-line hover:text-secondary
                         text-white text-xl"
              ></i>
            </a>
            <i
              className="ri-youtube-line hover:text-secondary
                         text-white text-xl"
            ></i>
          </div>
        </div>
      </div>

      <hr className="opacity-30" />

      <p className="text-center text-white/75 text-base lg:text-xl font-normal">
        KraftMonk©2024 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
