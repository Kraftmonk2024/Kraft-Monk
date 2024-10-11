import React, { forwardRef, useEffect, useRef } from "react";

const ScrollingRow = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstChild;
      let scrollAmount = 0;
      const step = () => {
        scrollAmount += 0.5;
        if (scrollAmount >= scrollContent.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, []);

  return (
    <div ref={scrollRef} className="overflow-hidden">
      <div className="flex animate-scroll">
        {children}
        {children} {/* Duplicate content for continuous scrolling */}
      </div>
    </div>
  );
};

const GraphicsSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full flex flex-col py-24 overflow-y-hidden">
      {/* Header Section */}
      <div className="w-full max-w-[1240px] mb-16 flex flex-col gap-6 px-8 md:px-36">
        <div className="text-start text-white text-4xl font-normal font-['Inter'] leading-10">
          For Graphic Design’s
        </div>
        <div className="text-start text-white text-[50px] font-extrabold font-['Inter'] leading-10">
          TO STANDOUT FROM THE CROWD
        </div>
        <div className="w-[1231px] h-11 justify-start items-center gap-3 inline-flex">
          {[
            "Print Design",
            "Banner & Ads",
            "PPT & Pitch Deck",
            "Packaging Design",
            "Social Media graphics",
          ].map((text, index) => (
            <div
              key={index}
              className="px-4 py-2.5 rounded-[100px] border border-[#ff631b] justify-center items-center gap-2.5 flex"
            >
              <div className="text-center text-white text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery with Scrolling Rows */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-8">
          {/* Row 1 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <ScrollingRow>
              {["img1", "img2", "img3", "img4", "img5"].map((img, index) => (
                <div key={index} className={`flex-none w-${index % 3 === 0 ? '4' : '3'}/12 px-2`}>
                  <img
                    src={`images/${img}.jpg`}
                    alt={`Design ${index + 1}`}
                    className="w-full h-[35vh] object-cover rounded-md shadow-lg"
                  />
                </div>
              ))}
            </ScrollingRow>
          </div>

          {/* Row 2 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <ScrollingRow>
              {["img6", "img7", "img8", "img9"].map((img, index) => (
                <div key={index} className={`flex-none w-${index % 2 === 0 ? '5' : '3'}/12 px-2`}>
                  <img
                    src={`images/${img}.jpg`}
                    alt={`Design ${index + 6}`}
                    className="w-full h-[35vh] object-cover rounded-md shadow-lg"
                  />
                </div>
              ))}
            </ScrollingRow>
          </div>

          {/* Row 3 */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <ScrollingRow>
              {["img10", "img11", "img12", "img13", "img14"].map((img, index) => (
                <div key={index} className={`flex-none w-${index % 4 === 0 ? '5' : '3'}/12 px-2`}>
                  <img
                    src={`images/${img}.jpg`}
                    alt={`Design ${index + 10}`}
                    className="w-full h-[35vh] object-cover rounded-md shadow-lg"
                  />
                </div>
              ))}
            </ScrollingRow>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GraphicsSection;
