"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
          end: "top 70%",
          scrub: 1,
        },
      }
    );
    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-start leading-[0.85] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.3em]"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-white/20" : "text-white"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default function Timeline() {
  const sectionRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const moveUp = useTransform(scrollYProgress, [0, 1], [100, -190]);
  const moveDown = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const steps = [
    {
      id: 1,
      title: "Discovery",
      description:
        "Deep dive into stakeholder goals and user needs to ensure project alignment.",
      color: "bg-white/[0.03]",
    },
    {
      id: 2,
      title: "Framework",
      description:
        "Mapping journeys and defining the structural backbone of your digital product.",
      color: "bg-white/[0.05]",
    },
    {
      id: 3,
      title: "UX Design",
      description:
        "Crafting intuitive UI/UX prototypes validated through rigorous research.",
      color: "bg-white/[0.03]",
    },
    {
      id: 4,
      title: "Development",
      description:
        "Building scalable, high-performance systems with precision engineering.",
      color: "bg-white/[0.05]",
    },
    {
      id: 5,
      title: "QA & Release",
      description:
        "Seamless deployment following comprehensive user acceptance testing.",
      color: "bg-white/[0.03]",
    },
    {
      id: 6,
      title: "Optimization",
      description:
        "Continuous monitoring and data-driven updates for long-term growth.",
      color: "bg-white/[0.05]",
    },
  ];

  const columns = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

  return (
    <section
      ref={sectionRef}
      className="rounded-[2.5rem] md:rounded-[4.5rem] py-32 bg-[#050505] overflow-hidden border border-white/5 "
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        {/* Header Section: Split Heading (Left) and Paragraph (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-32 gap-10">
          <div className="lg:w-2/3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-white text-sm">✱</span> OUR METHODOLOGY
            </p>
            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              <ParallaxSplitText text="The Engineering" />
              <ParallaxSplitText text="Process" isGrey={true} />
            </h2>
          </div>

          <div className="lg:w-1/4 lg:pb-6">
            <p className="text-sm md:text-base text-white/40 uppercase tracking-[0.15em] leading-relaxed border-l border-white/10 pl-6">
              A structured approach ensuring clarity and high-performance
              quality at every digital milestone.
            </p>
          </div>
        </div>

        {/* Masonry Parallax Grid */}
        {/* Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {columns.map((column, colIndex) => {
            const isZag = colIndex % 2 === 0;
            const parallax = isZag ? moveUp : moveDown;

            return (
              <div
                key={colIndex}
                className={`flex flex-col gap-8 ${isZag ? "lg:pt-40" : "pt-0"}`}
              >
                {column.map((stepIndex) => {
                  const step = steps[stepIndex];
                  return (
                    <motion.div
                      key={step.id}
                      style={{ y: isLargeScreen ? parallax : 0 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative p-10 md:p-12 min-h-[400px] rounded-3xl border border-white/5 backdrop-blur-3xl transition-all duration-700 hover:border-white/20 flex flex-col justify-between overflow-hidden ${step.color}`}
                    >
                      {/* Premium Spotlight Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="flex justify-between items-start relative z-10">
                        <span className="text-5xl font-black text-white/5 group-hover:text-primary transition-colors duration-500">
                          {String(step.id).padStart(2, "0")}
                        </span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-black group-hover:scale-110 group-hover:rotate-[45deg] transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                          ✦
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter text-white/90 group-hover:text-white">
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-white/30 group-hover:text-white/70 transition-colors duration-500">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
