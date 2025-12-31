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

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale and opacity transformations for video
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 0.9, 1, 0.9, 0.8]
  );
  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["85%", "92%", "100%", "92%", "85%"]
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["40vh", "55vh", "65vh", "55vh", "40vh"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 0.95, 0.95, 0.8]
  );

  return (
    <>
      <section
        ref={containerRef}
        className="bg-[#f4f4f4] py-32 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1500px] mx-auto  border-t border-black/7 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Label */}
          <div className="lg:col-span-4  pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> INNOVATION
            </p>
          </div>

          {/* Right Heading & Description */}
          <div className="lg:col-span-8 pt-4 flex flex-col">
            <h2 className="text-[9vw] md:text-[5rem] leading-[1.1] uppercase text-black font-['Mona_Sans_Narrow',_Impact,_sans-serif] mb-12">
              <ParallaxSplitText
                className="tracking-wide"
                text="Transforming"
              />
              <ParallaxSplitText
                className="tracking-wide"
                text="healthcare through"
              />

              <div className="flex items-center gap-6 flex-wrap mt-2">
                <ParallaxSplitText
                  className="opacity-20 tracking-wide"
                  text="technology and innovation"
                />
              </div>
            </h2>

            <div className="max-w-2xl mb-12">
              <p className="text-lg md:text-xl leading-[1.5] text-black font-medium opacity-90">
                At SinnexTech, we combine technology, design, and strategy to
                deliver digital healthcare solutions that make a real impact.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="col-span-12 flex justify-center">
            <motion.div
              style={{ scale, width, height, opacity }}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-2xl w-full max-w-[1500px]"
              onClick={() => setIsOpen(true)}
            >
              <video
                className="w-full h-full object-cover rounded-xl"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/video/video-5.mp4" type="video/mp4" />
              </video>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2" />{" "}
                </div>
              </div>

              {/* Overlay Label */}
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
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
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-10 right-10 text-white text-xs font-bold uppercase tracking-widest"
              >
                Close [×]
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-6xl aspect-video"
              >
                <video
                  src="/video/video-5.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </section>
    </>
  );
};

export default HighTec;
