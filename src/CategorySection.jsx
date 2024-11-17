import React from "react";

const CategorySection = ({ title, items ,onClick }) => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
      <div className="text-white  text-2xl md:text-3xl lg:text-4xl font-medium capitalize leading-10">
        {title}
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onClick()}
            className="px-4 py-2.5 rounded-[100px] border border-white/40 flex items-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            <div className="text-white text-base lg:text-lg font-normal uppercase">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
