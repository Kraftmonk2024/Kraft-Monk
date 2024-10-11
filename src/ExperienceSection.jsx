import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="py-36 px-4 md:p-36 flex gap-20 bg-[#131313]">
      <div className="w-[652px] h-[272px] flex-col justify-start items-start gap-[30px] inline-flex">
        <h2 className="self-stretch text-white text-[56px] font-medium">Trusted by fast-moving companies & Start-ups</h2>
        <div className="w-[331px] h-px relative border border-black/10"></div>
        <div className="w-[581px] justify-between items-center inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <h3 className="text-[#fe3900] text-4xl font-medium">3+ Year</h3>
            <p className="text-white text-[28px] font-normal">Experience</p>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <h3 className="text-[#fe3900] text-4xl font-medium">20+</h3>
            <p className="text-white text-[28px] font-normal">Clients</p>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <h3 className="text-[#fe3900] text-4xl font-medium">50+</h3>
            <p className="text-white text-[28px] font-normal">Projects Delivered</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 py-12 flex-wrap">
        <div className="flex gap-5 w-full">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="w-[33.3%] h-fit flex items-center justify-center rounded-full overflow-hidden px-5">
              <img className="w-20 rounded-full aspect-square object-cover" src={`images/img21.jpg`} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-5">
          {Array(2).fill().map((_, index) => (
            <div key={index} className="w-40 aspect-video overflow-hidden bg-red-700">
              <img src={`images/img14.jpg`} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
