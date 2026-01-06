"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ================================
    PARALLAX SPLIT TEXT COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-center leading-[0.9] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.2em]"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-black/30" : "text-black"
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
    STORY SECTION COMPONENT
================================ */
const StorySection = () => {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Small Tagline */}
        <div className="flex justify-center items-center gap-4 mb-12 opacity-40">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Our Story — SinnexTech — Our Story
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
            <ParallaxSplitText text="Empowering Growth," />
            <ParallaxSplitText text="Scaling Limits." isGrey={true} />
          </h2>
        </div>

        {/* Body Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-xl md:text-2xl font-medium text-black/70 leading-relaxed tracking-tight">
            SinnexTech was founded on a simple premise: technology should be a
            bridge, not a barrier. What began as a specialized development house
            has transformed into a strategic digital partner, blending
            high-performance engineering with visionary design to help brands
            dominate their industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-4">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            <Link
              href="/projects"
              className="group flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Our Portfolio
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

export default StorySection;
