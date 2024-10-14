import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="py-4 lg:py-36 px-4 md:p-14 lg:p-36 flex flex-col lg:flex-row gap-0 lg:gap-20 bg-[#131313]">
       <div className="w-full  flex-col justify-start items-start gap-[10px] lg:gap-[30px] inline-flex">
            <div className="self-stretch text-white  text-[30px] lg:text-[56px] font-medium ">Trusted by fast-moving
                companies
                & Start-up</div>
            <div className="w-[331px] h-px relative border border-black/10"></div>
            <div className=" flex justify-evenly lg:justify-start gap-6 w-full lg:gap-10 items-center flex-wrap">
                <div className="flex-col justify-start items-start  inline-flex">
                    <div className="text-[#fe3900] w-full text-center lg:text-start text-3xl lg:text-4xl font-medium ">3+ Year</div>
                    <div className="text-white text-[24px] lg:text-[28px] font-normal ">Experience</div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#fe3900] w-full text-center lg:text-start text-3xl lg:text-4xl font-medium ">20+</div>
                    <div className="text-white text-[24px] lg:text-[28px] font-normal ">Clients</div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#fe3900] w-full text-center lg:text-start text-3xl lg:text-4xl font-medium ">50+</div>
                    <div className="text-white text-[24px] lg:text-[28px] font-normal ">Projects Delivered</div>
                </div>
            </div>
        </div>

      <div className="flex items-center justify-center gap-6 py-12 flex-wrap">
        <div className="flex w-full">
         
            <div className="w-[33.3%] h-fit flex items-center justify-center rounded-full overflow-hidden px-5">
              <img className="w-20 rounded-full aspect-square object-cover" src="./logo/logo1.jpg" alt="logo"/>
            </div>
            <div className="w-[33.3%] h-fit flex items-center justify-center rounded-full overflow-hidden px-5">
              <img className="w-20 rounded-full aspect-square object-cover" src="./logo/logo2.jpg" alt="logo"/>
            </div>
            <div className="w-[33.3%] h-fit flex items-center justify-center rounded-full overflow-hidden px-5">
              <img className="w-20 rounded-full aspect-square object-cover" src="./logo/logo3.jpg" alt="logo"/>
            </div>
        
        </div>

        <div className="flex justify-center gap-5">
          {Array(2).fill().map((_, index) => (
            <div key={index} className="w-28 md:w-40 flex justify-center items-center aspect-video overflow-hidden">
              <img src={`logo/logo${index + 4}.png`} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
