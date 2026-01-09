"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

/* ================================
    WORD BY WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
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

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[1.05] ${className}`}
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

const ResultsSection = () => {
  const stats = [
    {
      value: "95",
      symbol: "%",
      label:
        "Clients continue working with SinnexTech due to reliable delivery, clear communication, and measurable results.",
    },
    {
      value: "20",
      symbol: "+",
      label:
        "Digital solutions successfully delivered across healthcare, SaaS, and enterprise platforms.",
      lowOpacityValue: true,
    },
    {
      value: "99",
      symbol: "%",
      label:
        "Client satisfaction driven by performance-focused development and long-term technical support.",
    },
  ];

  return (
    <section className="text-black py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1500px] mx-auto border-t border-black/10 ">
        {/* Top Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 py-8 mb-12 lg:mb-32">
          <div className="w-full lg:w-[65%]">
            <p className="text-[10px] mb-6 uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> Results
            </p>
            {/* Heading: uses clamp-like text sizing for mobile and fluid scaling */}
            {/* <h2 className="font-monosansnarrow text-[18vw] sm:text-[14vw] lg:text-[10rem] leading-[0.9] font-black uppercase tracking-tighter">
              <ParallaxSplitText
                className="tracking-wide block"
                text="Impact"
              />
              <ParallaxSplitText
                className="tracking-wide opacity-40 block"
                text="you can feel"
              />
            </h2> */}
             <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Impact" className="block" />
              <ParallaxSplitText text="you can feel" className="opacity-40 block" />
            </h2>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-md">
              Clear and effortless interactions build trust. That trust
              translates into better performance, higher conversions and
              stronger customer relationships.
            </p>
            <a
              href="/about"
              className="group w-full sm:w-fit relative flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Learn More About Us</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col py-5 lg:py-10 ${
                index !== 0 ? "md:border-l border-black/10 md:pl-12" : ""
              } ${index !== 2 ? "pr-12" : ""}`}
            >
              <h3 className="text-8xl font-mononarrowbold md:text-[9rem] font-medium tracking-tighter mb-6 flex items-baseline">
                {/* Number Styling */}
                <span
                  className={
                    stat.lowOpacityValue ? "opacity-50" : "opacity-100"
                  }
                >
                  {stat.value}
                </span>
                <span
                  className={
                    stat.symbol === "+" ? "opacity-100 ml-2" : "opacity-50 ml-2"
                  }
                >
                  {stat.symbol}
                </span>
              </h3>
              <p className="text-sm text-gray-600 max-w-[280px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
