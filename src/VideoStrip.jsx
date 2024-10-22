import React, { forwardRef } from "react";

const VideoStrip = forwardRef((props, ref) => {
  const videoItems = [
    "./videos/video1.mp4",
    "./videos/video2.mp4",
    "./videos/video3.mp4",
    "./videos/video4.mp4",
  ];

  const handleMouseEnter = (e) => {
    const video = e.target;
    video.currentTime = 0;
    video.play();
  };

  const handleMouseLeave = (e) => {
    const video = e.target;
    video.pause();
  };

  // font earlear : font - ["Inter"];

  return (
    <div className="w-full flex flex-col mt-20 lg:mt-36 overflow-hidden h-auto">
      <div className="mb-10 lg:mb-16 flex flex-col gap-4 lg:gap-6 px-5 md:px-28">
        <h2 className="w-full text-start text-white text-3xl lg:text-4xl font-normal leading-10">
          For Video Editing
        </h2>
        <h1 className="w-full text-start text-[#ee750e] text-[30px] lg:text-[50px] font-extrabold  leading-10">
          TO GROW ON SOCIAL MEDIA FAST
        </h1>
      </div>

      <div className="w-full relative sm:flex justify-center origin-top-left py-2 overflow-x-scroll no-scrollbar">
        <div className="flex justify-start w-max">
          {videoItems.map((videoSrc, index) => (
            <div className="flex-shrink-0 px-2 md:px-4 py-2" key={index}>
              <div className="relative video-container rounded-[15px] md:rounded-[20px] lg:rounded-[24.80px] transform transition-all duration-300 hover:scale-103 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_#FF631B]">
                <video
                  className="w-[75vw] md:w-[35vw] lg:w-[18vw] h-[200px] md:h-[300px] lg:h-[496.07px] object-cover rounded-[15px] md:rounded-[20px] lg:rounded-[24.80px]"
                  muted
                  playsInline
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="overlay absolute inset-0 transition-opacity duration-300">
                  <img
                    className="w-full h-full object-cover rounded-[15px] md:rounded-[20px] lg:rounded-[24.80px]"
                    src={`./videos/thumbnail${index + 1}.jpg`}
                    alt={`Card ${index + 1}`}
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-20 rounded-[15px] md:rounded-[20px] lg:rounded-[24.80px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="ri-play-circle-line text-white text-4xl md:text-5xl lg:text-6xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default VideoStrip;
