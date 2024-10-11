import React from "react";

const ContactSection = () => {
  return (
    <section className="py-36 px-4 md:p-36">
      <div className="bg-[#EE750E] p-9 flex flex-col gap-9 rounded-xl overflow-hidden">
        <h1 className="text-[#131313] text-[56px] font-medium">
          Ready to turn your ideas into reality? Let's work together!
        </h1>
        <div className="h-8 justify-start items-center gap-8 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <i className="ri-phone-line text-2xl relative text-white"></i>
            <p className="text-black text-2xl font-normal font-['Inter'] leading-loose">
              +91 9008881443
            </p>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <i className="ri-phone-line text-2xl relative text-white"></i>
            <p className="w-[226px] text-black text-2xl font-normal font-['Inter'] leading-loose">
              +91 79994 9959
            </p>
            <i className="ri-mail-line text-2xl relative text-white"></i>
            <p className="text-black text-2xl font-medium leading-loose">
              kraftmonkofficial@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
