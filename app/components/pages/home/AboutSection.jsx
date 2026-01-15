"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ================================
    WORD BY WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        yPercent: 120,
        opacity: 0,
      },
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-[#f4f4f4] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-monosans">
      <div className="max-w-[1500px] mx-auto border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-y-1 lg:gap-10">
        {/* LEFT */}
        <div className="lg:col-span-4 pt-4 md:pt-6">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
            <span className="text-sm">✱</span> ABOUT US
          </p>
        </div>

        {/* RIGHT: Main Content */}
        <div className="lg:col-span-8 pt-1 md:pt-6">
          <h2 className="font-monosansnarrow text-[14vw] sm:text-[10vw] md:text-[4.5rem] lg:text-[5rem] leading-[1] md:leading-[1.1] font-black uppercase tracking-tighter">
            <ParallaxSplitText
              className="tracking-wide"
              text="We design digital experiences"
            />

            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <ParallaxSplitText
                className="tracking-wide"
                text="that empower"
              />
              {/* The Barcode */}
              <ParallaxSplitText
                className="text-[8vw] md:text-[4rem] lg:text-[4.5rem] tracking-[-0.1em] opacity-100 font-normal"
                text="𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃"
              />
            </div>

            <ParallaxSplitText
              text="brands to stand out and"
              className="mt-1 tracking-wide"
              isGrey={true}
            />
            <ParallaxSplitText
              className="tracking-wide"
              text="engage their audiences™."
              isGrey={true}
            />
          </h2>

          {/* Body Text */}
          <div className="mt-8 md:mt-12 max-w-full md:max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl leading-[1.4] md:leading-[1.5] text-black font-medium opacity-90">
              By combining strategy, design, and technology, we transform ideas
              into meaningful digital experiences. Our work blends imagination
              with precision to create bold outcomes that drive growth.
            </p>
          </div>

          {/*Buttons Section*/}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center sm:items-center gap-6 md:gap-10">
            <Link
              href="/about"
              className="group relative w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Our story</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Contact us
              <span className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
