import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Strips from "./Strips";
import WhatWeDoSection from "./WhatWeDoSection";
import Cursor from "./Cursor.jsx";
import WhatWeWorkSection from "./WhatWeWorkSection.jsx";
import GraphicsSection from "./GraphicsSection.jsx";
import WebAppDevelopment from "./WebAppDevelopment.jsx";
import UIUXProductDesign from "./UIUXProductDesign.jsx";
import VideoStrip from "./VideoStrip.jsx";
import ContactSection from "./ContactSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full bg-primary relative">
      <Cursor mousePosition={mousePosition} />
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <Strips />
        <WhatWeDoSection />
        <WhatWeWorkSection />
        <GraphicsSection />
        <WebAppDevelopment />
        <UIUXProductDesign />
        <VideoStrip />
        <ContactSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
