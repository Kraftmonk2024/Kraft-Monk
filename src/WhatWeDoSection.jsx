// WhatWeDoSection.js
import React from "react";
import CategorySection from "./CategorySection";
import WhatWeWorkSection from "./WhatWeWorkSection";

const WhatWeDoSection = ({
  onGraphicsClick,
  onUIUXClick,
  onWebDevClick,
  onVideoClick,
}) => {
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
      onClick: onGraphicsClick,
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
      onClick: onUIUXClick,
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
      onClick: onWebDevClick,
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
      onClick: onVideoClick,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-5  md:px-10 lg:px-24 py-20 md:py-28 bg-black">
      <div className="w-full text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8 lg:mb-16">
        <span className="text-white/70 font-bold">What </span>
        <span className="text-[#ff631b]  font-bold">we do!</span>
      </div>
      <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
        {categories.map((category, index) => (
          <React.Fragment key={category.title}>
            {index > 0 && (
              <div className="w-full h-px relative border border-white/50"></div>
            )}
            <CategorySection
              title={category.title}
              items={category.items}
              onClick={category.onClick}
            />
          </React.Fragment>
        ))}
      </div>
      <WhatWeWorkSection />
    </div>
  );
};

export default WhatWeDoSection;
