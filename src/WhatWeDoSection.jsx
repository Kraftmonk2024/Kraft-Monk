import React from "react";
import CategorySection from "./CategorySection";

const WhatWeDoSection = () => {
  const categories = [
    {
      title: "Branding",
      items: [
        "Logo Design",
        "Brand Identity",
        "Brand Guidelines",
        "Brand Collateral",
        "Social Media Branding",
      ],
    },
    {
      title: "Graphic Design",
      items: [
        "Print Design",
        "Social Media Graphics",
        "Banner & Ads",
        "PPT & Pitch Deck",
        "Packaging Design",
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        "Landing Page Design",
        "Web App Design",
        "Saas Design",
        "Conversion Rate Design",
        "Mobile App Design",
      ],
    },
    {
      title: "Development",
      items: [
        "Front-End",
        "Back-End",
        "API & Database Development",
        "Web Hosting Setup",
        "Web Application",
      ],
    },
    {
      title: "Video Editing",
      items: [
        "Social Media Videos",
        "Promotional Videos",
        "Podcast Videos",
        "Explainer Videos",
        "Color Grading",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-8 md:px-24 py-24 bg-black">
      <div className="w-full max-w-[1240px] mb-16">
        <span className="text-white/70 text-5xl font-bold">What </span>
        <span className="text-[#ff631b] text-5xl font-bold">we do!</span>
      </div>
      <div className="w-full max-w-[1240px] flex-col justify-start items-start gap-8 inline-flex">
        {categories.map((category, index) => (
          <React.Fragment key={category.title}>
            {index > 0 && (
              <div className="w-full h-px relative border border-white/50"></div>
            )}
            <CategorySection title={category.title} items={category.items} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoSection;
