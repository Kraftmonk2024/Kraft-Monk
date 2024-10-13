import React, { forwardRef } from "react";

const UIUXProductDesign = forwardRef((props, ref) => {
  return (
    <div className="w-full flex flex-col mt-20 lg:mt-36 px-5 md:px-10 lg:px-28">
      <div className="w-full max-w-[1240px] mb-16 flex flex-col gap-6">
        <div className="text-start text-white text-3xl lg:text-4xl font-semibold font-['Inter'] leading-10">
          For UI/UX and Product Designs
        </div>
        <div className="w-full flex-wrap justify-start items-center gap-3 inline-flex">
          {[
            "Landing Page Design",
            "Web App Design",
            "Saas Design",
            "Conversion rate Design",
            "Mobile App Design",
          ].map((item, index) => (
            <div
              key={index}
              className="px-4 py-2.5 rounded-[100px] border border-[#ff631b] justify-center items-center gap-2.5 flex"
            >
              <div className="text-center text-white text-base lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            {index < 6 && (
              <img
                className="w-full h-full"
                src={`./images2/product${index + 1}.jpg`}
                alt="Design Card"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default UIUXProductDesign;
