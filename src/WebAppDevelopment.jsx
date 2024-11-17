import React, { forwardRef } from "react";

const WebAppDevelopment = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full px-5 md:px-10 lg:px-28 mt-20 lg:mt-36">
      <div className="mb-12 lg:mb-16 flex flex-col gap-4 lg:gap-6">
        <div className="text-start text-white text-3xl lg:text-4xl font-normal leading-10">
          For Web and App Development
        </div>
        <div className="text-start text-white text-[30px] lg:text-[50px] font-extrabold leading-10">
          TO BUILD YOUR DREAM BUSINESS
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-5">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 aspect-video flex flex-col gap-3">
          <div className="md:h-[50vh]">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="./images2/web1.jpg"
              alt=""
            />
          </div>
          <a href="https://upskillmafia.com/mern/" target="_blank">
            <div className="w-fit lg:h-16 px-4 lg:px-6 py-2 lg:py-4 bg-black border-2 border-secondary flex items-center gap-2 transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_rgba(238,117,14,1)]">
              <div className="text-white text-base lg:text-xl font-medium uppercase leading-loose">
                Check out
              </div>
              <div className="w-8 text-white text-2xl">
                <i className="ri-arrow-right-down-line"></i>
              </div>
            </div>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 aspect-video flex flex-col gap-3">
          <div className="md:h-[50vh]">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="./images2/web2.jpg"
              alt=""
            />
          </div>
          <a
            href="https://tutedude.com/tracks/fullstackdevelopment"
            target="_blank"
          >
            <div className="w-fit lg:h-16 px-4 lg:px-6 py-2 lg:py-4 bg-black border-2 border-secondary flex items-center gap-2 transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_rgba(238,117,14,1)]">
              <div className="text-white text-base lg:text-xl font-medium uppercase leading-loose">
                Check out
              </div>
              <div className="w-8 text-white text-2xl">
                <i className="ri-arrow-right-down-line"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default WebAppDevelopment;
