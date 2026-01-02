"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================
   WORD-BY-WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 70%",
          scrub: 1.2,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[1.05] tracking-[-0.04em] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.2em]"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-[#8d8d8d]" : "text-black"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

/* ================================
   HIGH TECH / INNOVATION SECTION
================================ */
const HighTec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Responsive Transformations
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // On mobile, we keep the width closer to 100% to avoid awkward gaps
  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? ["95%", "100%", "95%"] : ["85%", "100%", "85%"]
  );

  // Height needs to be more substantial on mobile (vh units)
  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? ["30vh", "45vh", "30vh"] : ["40vh", "70vh", "40vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  return (
    <>
      <section
        ref={containerRef}
        className="bg-[#f4f4f4] py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto border-t border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-1 lg:gap-10">
            <div className="lg:col-span-4 pt-4 md:pt-6">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
                <span className="text-sm">✱</span> Innovation
              </p>
            </div>

            {/* RIGHT: Main Content */}
            <div className="lg:col-span-8 pt-1 md:pt-6">
              <h2 className="font-monosansnarrow text-[14vw] sm:text-[10vw] md:text-[4.5rem] lg:text-[5rem] leading-[1] md:leading-[1.1] font-black uppercase tracking-tighter">
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <ParallaxSplitText
                    className="tracking-wide"
                    text="Transforming"
                  />
                  <ParallaxSplitText
                    className="text-[8vw] md:text-[4rem] lg:text-[4.5rem] tracking-[-0.1em] opacity-100 font-normal"
                    text="𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃"
                  />
                </div>
                <ParallaxSplitText
                  text="healthcare through"
                  className="mt-1 tracking-wide"
                />
                <ParallaxSplitText
                  className="tracking-wide"
                  text="technology and innovation"
                  isGrey={true}
                />
              </h2>

              {/* Body Text: Width adjustment for readability */}
              <div className="mt-8 md:mt-12 max-w-full md:max-w-2xl">
                <p className="text-lg sm:text-xl md:text-2xl leading-[1.4] md:leading-[1.5] text-black font-medium opacity-90">
                  At SinnexTech, we combine technology, design, and strategy to
                  deliver digital healthcare solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section - Centered */}
          <div className="flex justify-center items-center mt-10 md:mt-20 relative">
            <motion.div
              style={{
                scale,
                width,
                height,
                opacity,
                willChange: "transform, width, height",
              }}
              className="relative cursor-pointer group overflow-hidden rounded-xl md:rounded-3xl shadow-2xl"
              onClick={() => setIsOpen(true)}
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/video/video-5.mp4" type="video/mp4" />
              </video>

              {/* Play Button - Responsive Size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/60 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-130 transition-all duration-500">
                  <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1.5 md:ml-2" />
                </div>
              </div>

              {/* Overlay Label - Responsive Placement */}
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/70 font-bold bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  Project Showcase — 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/98 p-4 md:p-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                Close [×]
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-6xl aspect-video rounded-lg overflow-hidden"
              >
                <video
                  src="/video/video-5.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default HighTec;
