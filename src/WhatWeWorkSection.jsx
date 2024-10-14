import React from "react";

const WhatWeWorkSection = () => {
  return (
    <div className="w-full sticky left-0 flex flex-col  items-center bg-gre pt-20 lg:pt-24 ">
    <div className="w-full text-3xl md:text-5xl lg:text-6xl  mb-3 lg:mb-10">
        <span className="text-white/70 font-bold ">What </span>
        <span className="text-[#ff631b] font-bold ">we work!</span>
    </div>

    <div className="w-full  flex-col justify-start items-start gap-8 inline-flex">
        {/* <!-- Branding --> */}
        <div className="self-stretch static top-0 flex-col justify-start items-start gap-4 flex">
            <div className="text-white text-2xl md:text-3xl font-medium  capitalize leading-10">For Branding
                and LOGO'S
            </div>
            <div className="flex flex-wrap gap-8 ">

                {/* <!-- card 1 --> */}
                <div className="bg-[#235347] sticky top-[15vh] w-full  flex h-[235px]  md:h-[415px]">
                    <div className="w-full md:w-1/2 h-full">
                        <img className="w-full h-full cover" src="card1.png" alt=""></img>
                    </div>
                    <div className=" md:w-1/2 h-full justify-center items-center hidden md:flex px-5 ">
                        <div className=" flex-col justify-start items-center gap-4  ">
                            <div
                                className="w-full wrap text-white md:text-[35px] lg:text-[50px] font-bold font-['SF Pro Display'] uppercase leading-[60px]">
                                Make a
                                professional LOGO with us</div>
                            <div className=" flex-col justify-start items-start mt-5 gap-3 flex">
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center  flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Logo Design</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND IDENTITY</div>
                                    </div>
                                    <div
                                        className=" px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND GUIDELINES</div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Brand Collateral</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            SOCIAL MEDIA BRANDING</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card 2 --> */}
                <div className="bg-[#003A70] sticky top-[18vh] w-full flex h-[235px]  md:h-[415px]">
                    <div className=" w-full md:w-1/2 h-full">
                        <img className="w-full h-full cover" src="card2.png" alt=""></img>
                    </div>
                    <div className="md:w-1/2  h-full justify-center items-center hidden md:flex px-5">
                        <div className=" flex-col justify-start items-center gap-4  ">
                            <div
                                className="w-full text-white md:text-[35px] lg:text-[50px] font-bold font-['SF Pro Display'] uppercase leading-[60px]">
                                Make a
                                professional LOGO with us</div>
                            <div className=" flex-col justify-start items-start mt-5 gap-3 flex">
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg  font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Logo Design</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg  font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND IDENTITY</div>
                                    </div>
                                    <div
                                        className=" px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg  font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND GUIDELINES</div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg  font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Brand Collateral</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg  font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            SOCIAL MEDIA BRANDING</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card 3 --> */}
                <div className="bg-[#e38326] sticky top-[22vh] w-full  flex h-[235px]  md:h-[415px]">
                    <div className="w-full md:w-1/2 h-full">
                        <img className="w-full h-full cover " src="card3.png" alt=""></img>
                    </div>
                    <div className="md:w-1/2  h-full justify-center items-center hidden md:flex px-5">
                        <div className=" flex-col justify-start items-center gap-4  ">
                            <div
                                className="w-full  wrap text-white md:text-[35px] lg:text-[50px] font-bold font-['SF Pro Display'] uppercase leading-[60px]">
                                Make a
                                professional LOGO with us</div>
                            <div className=" flex-col justify-start items-start mt-5 gap-3 flex">
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Logo Design</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND IDENTITY</div>
                                    </div>
                                    <div
                                        className=" px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND GUIDELINES</div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Brand Collateral</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            SOCIAL MEDIA BRANDING</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card 4 --> */}
                <div className="bg-[#052c2d] sticky top-[15vh] w-full  flex h-[235px]  md:h-[415px]">
                    <div className=" w-full md:w-1/2 h-full">
                        <img className="w-full h-full cover" src="card4.png" alt=""></img>
                    </div>
                    <div className="md:w-1/2  h-full justify-center items-center hidden md:flex px-5">
                        <div className=" flex-col justify-start items-center gap-4  ">
                            <div
                                className="w-full wrap text-white md:text-[35px] lg:text-[50px] font-bold font-['SF Pro Display'] uppercase leading-[60px]">
                                Make a
                                professional LOGO with us</div>
                            <div className=" flex-col justify-start items-start mt-5 gap-3 flex">
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Logo Design</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND IDENTITY</div>
                                    </div>
                                    <div
                                        className=" px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            BRAND GUIDELINES</div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-2.5 inline-flex">
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            Brand Collateral</div>
                                    </div>
                                    <div
                                        className="px-4 py-2.5 rounded-[100px] border border-[#e4bc78] justify-center items-center gap-2.5 flex">
                                        <div
                                            className="text-center text-[#e4bc78] md:text-sm lg:text-lg font-medium font-['SF Pro Display'] uppercase leading-normal">
                                            SOCIAL MEDIA BRANDING</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</div>


  );
};

export default WhatWeWorkSection;
