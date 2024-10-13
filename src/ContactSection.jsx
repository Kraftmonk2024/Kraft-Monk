import React from "react";

const ContactSection = () => {
  return (
    <section className="py-0 lg:py-36 px-4 mt-20 md:p-10 lg:p-28 mb-20">
      <div className="bg-[#EE750E] p-4 lg:p-9 flex flex-col gap-4 lg:gap-9 rounded-xl overflow-hidden">
        <h1 className="text-[#131313] text-[34px] lg:text-[56px] font-medium">
          Ready to turn your ideas into reality? Let's work together!
        </h1>
        <div class=" justify-start items-center gap-5 lg:gap-8 flex flex-wrap">
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-phone-line text-2xl relative text-white"></i>
                    <div class=" text-black text-xl lg:text-2xl font-medium font-['Inter'] leading-loose">+91 9008881443</div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-phone-line text-2xl relative text-white"></i>
                    <div class=" text-black text-xl lg:text-2xl font-medium font-['Inter'] leading-loose">+91 79994 9959</div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                    <i class="ri-mail-line text-2xl relative text-white"></i>
                    <div class="text-black text-base lg:text-2xl font-medium  leading-loose">
                        kraftmonkofficial@gmail.com
                    </div>
                </div>
               
            </div>
      </div>
    </section>
  );
};

export default ContactSection;
