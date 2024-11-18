import React, { useState, forwardRef } from "react";

const UIUXProductDesign = forwardRef((props, ref) => {
  const [flippedCards, setFlippedCards] = useState({});

  //flipped cards on click
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  //flipping cards onhover
  const handleCardInteraction = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const cardContents = [
    {
      number: "01",
      title: "UI / UX Creative Design",
      description:
        "Crafting intuitive interfaces for modern web applications with user-centric approaches.",
      icon: "ri-layout-masonry-fill",
    },
    {
      number: "02",
      title: "Web App Design",
      description:
        "Transforming ideas into visually stunning digital solutions for seamless user experiences.",
      icon: "ri-window-fill",
    },
    {
      number: "03",
      title: "Mobile App Design",
      description:
        "Creating engaging mobile experiences through thoughtful design and optimization.",
      icon: "ri-smartphone-fill",
    },
    {
      number: "04",
      title: "Landing Page Design",
      description:
        "Designing captivating landing pages that convert visitors into loyal customers.",
      icon: "ri-pages-fill",
    },
    {
      number: "05",
      title: "SaaS Design",
      description:
        "Developing intuitive and scalable designs for Software as a Service platforms.",
      icon: "ri-cloud-fill",
    },
    {
      number: "06",
      title: "Conversion Rate Design",
      description:
        "Optimizing user flows and interfaces to enhance conversion rates and user engagement.",
      icon: "ri-line-chart-fill",
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full flex flex-col mt-10 sm:mt-16 md:mt-20 lg:mt-36 px-4 sm:px-5 md:px-10 lg:px-28"
    >
      <div className="w-full max-w-[1240px] mb-8 sm:mb-12 lg:mb-16 flex flex-col gap-4 sm:gap-6">
        <div className="text-start text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-8 sm:leading-10">
          For UI/UX and Product Designs
        </div>
        <div className="w-full  flex-wrap justify-start items-center gap-2 sm:gap-3 inline-flex">
          {[
            "Landing Page Design",
            "Web App Design",
            "Saas Design",
            "Conversion rate Design",
            "Mobile App Design",
          ].map((item, index) => (
            <div
              key={index}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-[100px] border border-[#ff631b] justify-center items-center gap-2.5 flex"
            >
              <div className="text-center text-white text-sm sm:text-base lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {cardContents.map((content, index) => (
          <div
            key={index}
            className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] [perspective:1000px] hover:scale-[102%] transition-transform duration-300"

            // this line willflip cards on clicking
            onClick={() => toggleFlip(index)}

            // these lones flip cards onhovering 
            // onMouseEnter={() => handleCardInteraction(index)}
            // onMouseLeave={() => handleCardInteraction(index)}
          >
            <div
              className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                flippedCards[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front of the card (Image) */}
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={`./images2/product${index + 1}.jpg`}
                  alt="Design Card"
                />
              </div>

              {/* Back of the card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-4 sm:p-6 overflow-hidden">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#ff631b] rounded-full absolute -right-4 sm:-right-5 -top-6 sm:-top-7 flex items-center justify-center">
                  <p className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 text-white text-xl sm:text-2xl font-bold">
                    {content.number}
                  </p>
                </div>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ff631b] rounded-full mb-3 sm:mb-4 flex justify-center items-center text-lg sm:text-xl text-white">
                  <i className={content.icon}></i>
                </div>
                <h1 className="font-bold text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2">
                  {content.title}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-500 leading-5 sm:leading-6">
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default UIUXProductDesign;