"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSplitText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word-inner");

    const tl = gsap.fromTo(
      words,
      { yPercent: 100, opacity: 0 },
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
    };
  }, []);

  return (
    <span ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-flex mr-[0.2em]"
        >
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </span>
  );
};

const caseStudies = [
  {
    title: "Bin Ali Medical",
    client: "Bin Ali Group",
    impact: "+140% Conversion",
    description:
      "Reimagining medical distribution through a streamlined, high-performance digital ecosystem.",
    img: "/images/project.jpg",
    tags: ["Website", "UX Strategy"],
  },
  {
    title: "Bensano",
    client: "Bensano Healthcare",
    impact: "Top 10 SaaS 2024",
    description:
      "Designing a human-centric interface for the world's most advanced health monitoring systems.",
    img: "/images/project2.jpg",
    tags: ["Product Design", "AI", "Website", "E-commerce"],
  },
  {
    title: "Jurhy",
    client: "Safecare",
    impact: "Award Winning",
    description:
      "A minimal, typography-driven portfolio for a world-class fashion photographer.",
    img: "/images/female-green.jpg",
    tags: ["Art Direction", "Web","Product Design", "AI", "Website", "E-commerce"],
  },
];

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let ctx = gsap.context(() => {
      gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth + 200),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${el.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#080808] rounded-4xl text-white py-32 overflow-hidden font-monosans"
    >
      {/* Header Area */}
      <div className="max-w-[1500px] mx-auto  mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold text-white flex items-center gap-2 mb-8">
              <span className="text-sm">✱</span> Case Studies
            </p>

            <h2 className="font-monosansnarrow text-[14vw] md:text-[8.5rem] leading-[0.85] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Stories of" className="block" />
              <ParallaxSplitText text="Success." className="block opacity-50" />
            </h2>
          </div>

          <div className="lg:col-span-4 border-l border-white/10 pl-8 pb-4">
            <p className="text-sm text-white/50 leading-relaxed uppercase tracking-widest font-medium max-w-sm">
              We don't just build websites; we create business assets that drive
              measurable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-20 md:gap-40 px-6 md:px-12 lg:px-20 will-change-transform"
      >
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="relative shrink-0 w-[85vw] md:w-[1100px] flex flex-col md:flex-row gap-10 md:gap-16 group"
          >
            {/* 1. Large Image with Metric Badge */}
            <div className="relative w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={study.img}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest z-10">
                {study.impact}
              </div>
            </div>

            {/* 2. Project Data Column */}
            <div className="w-full md:w-2/5 flex flex-col justify-between py-4">
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mb-2">
                    Client: {study.client}
                  </p>
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                </div>

                <p className="text-lg text-white/60 font-medium leading-relaxed max-w-sm">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] border border-white/10 px-4 py-2 rounded-full uppercase font-bold tracking-widest text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`/work/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group/btn flex items-center gap-4 mt-12 md:mt-0"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white transition-all duration-500">
                  <FiArrowRight className="text-xl group-hover/btn:text-black transition-colors" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                  View Full Case Study
                </span>
              </a>
            </div>
          </div>
        ))}

        {/* Closing CTA Card */}
        <div className="shrink-0 flex items-center justify-center w-[40vw] md:w-[600px] pr-20">
          <div className="text-center space-y-8">
            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Your project <br /> is next.
            </h4>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
