import React, { forwardRef } from "react";

const WebAppDevelopment = forwardRef((props, ref) => {
  return (
    <div class=" w-full px-8 md:px-40 mt-20">
      <div class=" mb-16 flex flex-col gap-6 ">
        <div class="text-start text-white text-4xl font-normal font-['Inter'] leading-10">
          For Web and App Development
        </div>
        <div class="text-start text-white text-[50px] font-extrabold font-['Inter'] leading-10">
          TO BUILD YOUR DREAM BUSINESS
        </div>
      </div>

      <div class="w-full flex gap-5">
        <div class="w-1/2 h-full flex flex-col gap-3">
          <img class="w-full h-[50vh] rounded-3xl" src="./images2/web1.jpg" alt="" />
          <a href="https://upskillmafia.com/mern/">
            <div class="h-16 w-fit px-6 py-4 bg-black border-2 border-secondary flex items-center gap-2 transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_rgba(238,117,14,1)]">
              <div class="text-white text-xl font-medium  uppercase leading-loose">
                Check out
              </div>
              <div class="w-8 text-white text-2xl">
                <i class="ri-arrow-right-down-line"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="w-1/2 h-full flex flex-col gap-3">
          <img class="w-full h-[50vh] rounded-3xl" src="./images2/web2.jpg" alt="" />
          <a href="https://tutedude.com/tracks/fullstackdevelopment">
            <div class="h-16 w-fit px-6 py-4 bg-black border-2 border-secondary flex items-center gap-2 transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_rgba(238,117,14,1)]">
              <div class="text-white text-xl font-medium  uppercase leading-loose">
                Check out
              </div>
              <div class="w-8 text-white text-2xl">
                <i class="ri-arrow-right-down-line"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default WebAppDevelopment;
