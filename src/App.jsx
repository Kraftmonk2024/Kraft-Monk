import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Strips from "./Strips";
import WhatWeDoSection from "./WhatWeDoSection";
import Cursor from "./Cursor.jsx";
import GraphicsSection from "./GraphicsSection.jsx";
import WebAppDevelopment from "./WebAppDevelopment.jsx";
import UIUXProductDesign from "./UIUXProductDesign.jsx";
import VideoStrip from "./VideoStrip.jsx";
import ContactSection from "./ContactSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create refs for each section
  const graphicsSectionRef = useRef(null);
  const uiuxSectionRef = useRef(null);
  const webDevSectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const whatWeWorkRef = useRef(null);

  // Track mouse movement for the cursor
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to scroll to the desired section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleScheduleClick = () => {
    scrollToSection(contactSectionRef);
  };

  const onExploreWorkClick = () => {
    scrollToSection(whatWeWorkRef);
  };

  return (
    <div className="w-full bg-primary relative">
      <Cursor mousePosition={mousePosition} />
      <div className="w-full min-h-screen flex flex-col">
        <Navbar handleScheduleClick={handleScheduleClick} />
        <HeroSection onExploreWorkClick={onExploreWorkClick} />
        <Strips />
        <WhatWeDoSection
          whatWeWorkRef={whatWeWorkRef}
          onGraphicsClick={() => scrollToSection(graphicsSectionRef)}
          onUIUXClick={() => scrollToSection(uiuxSectionRef)}
          onWebDevClick={() => scrollToSection(webDevSectionRef)}
          onVideoClick={() => scrollToSection(videoSectionRef)}
        />
        <GraphicsSection ref={graphicsSectionRef} />
        <WebAppDevelopment ref={webDevSectionRef} />
        <UIUXProductDesign ref={uiuxSectionRef} />
        <VideoStrip ref={videoSectionRef} />
        <ContactSection ref={contactSectionRef} />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
