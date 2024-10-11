import React from "react";

const CategorySection = ({ title, items }) => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
      <div className="text-white text-4xl font-medium capitalize leading-10">
        {title}
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2.5 rounded-[100px] border border-white/40 flex items-center"
          >
            <div className="text-white text-lg font-normal uppercase">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
