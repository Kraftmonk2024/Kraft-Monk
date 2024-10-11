import React, { forwardRef } from "react";
// import video from "";
const VideoStrip = forwardRef((props, ref) => {
  const videoItems = [
    './videos/video1.mp4',
    './videos/video2.mp4',
    './videos/video3.mp4',
    './videos/video1.mp4',
  ] // Placeholder for multiple videos

  return (
    <div className="w-full flex flex-col mt-52 overflow-hidden h-auto">
      <div className="mb-16 flex flex-col gap-6 px-8 md:px-36">
        <h2 className="w-[309px] text-center text-white text-4xl font-normal font-['Inter'] leading-10">
          For Video Editing
        </h2>
        <h1 className="w-[859px] text-center text-[#ee750e] text-[50px] font-extrabold font-['Inter'] leading-10">
          TO GROW ON SOCIAL MEDIA FAST
        </h1>
      </div>

      <div className="w-[100%] relative flex origin-top-left rotate-[-0deg] py-2">
        <div className="flex justify-center w-full">
          <div className="flex animate-scroll2">
            {videoItems.map((videoSrc, index) => (
              <div className="flex-shrink-0 px-4" key={index}>
                <div className="relative video-container">
                  <video
                    className="w-[20vw] h-[496.07px] object-cover rounded-[24.80px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="overlay absolute inset-0 transition-opacity duration-300">
                    <img
                      className="w-full h-full object-cover rounded-[24.80px]"
                      src={`./images/img${index + 1}.jpg`}
                      alt={`Card ${index + 1}`}
                    />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-20 rounded-[24.80px]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-play-circle-line text-white text-6xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoStrip;
