import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // GSAP animations for cursor and blur
      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.2,
        ease: "power3.out",
      });

      gsap.to(blurRef.current, {
        x: x - 250,
        y: y - 250,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Add event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="h-5 w-5 bg-[#ff5000] rounded-full fixed z-50 pointer-events-none"
      ></div>
      <div
        ref={blurRef}
        id="cursor-blur"
        className="h-[500px] w-[500px] bg-[#ff5000] opacity-30 rounded-full fixed filter blur-[80px] z-10 pointer-events-none"
      ></div>
    </>
  );
};

export default Cursor;
