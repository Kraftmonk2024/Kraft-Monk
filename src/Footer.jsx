import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-10 lg:px-36 py-4 md:py-10 bg-[#131313] flex flex-col gap-7 lg:gap-14 mt-36">
<div class="flex flex-col lg:flex-row gap-4 justify-between">
            <div class="flex flex-col gap-8">
                <div class="text-white/70 text-2xl font-medium ">Contact Us</div>
                <div class=" justify-start items-center gap-5 lg:gap-8 flex flex-wrap">
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-phone-line text-2xl relative text-white"></i>
                    <div class=" text-gray-100 text-xl lg:text-2xl  font-['Inter'] leading-loose">+91 9008881443</div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-phone-line text-2xl relative text-white"></i>
                    <div class=" text-gray-100 text-xl lg:text-2xl  font-['Inter'] leading-loose">+91 79994 9959</div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-mail-line text-2xl relative text-white"></i>
                    <div class="text-gray-100 text-base lg:text-2xl font-medium  leading-loose">
                        kraftmonkofficial@gmail.com
                    </div>
                </div>
               
            </div>
            </div>

            <div class="flex flex-col gap-4 lg:gap-6 mt-5">
                <div class="text-white/70 text-2xl font-medium">Socials</div>
                <div class="flex gap-4">
                    <i class="ri-linkedin-fill hover:text-secondary
                         text-white text-xl"></i>
                    <i class="ri-instagram-line hover:text-secondary
                         text-white text-xl"></i>
                    <i class="ri-youtube-line hover:text-secondary
                         text-white text-xl"></i>
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
