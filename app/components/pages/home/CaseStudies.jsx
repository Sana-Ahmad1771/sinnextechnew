"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
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
    <div ref={containerRef} className={`flex flex-wrap leading-[1.05] ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="relative overflow-hidden inline-block mr-[0.2em]">
          <span className={`word inline-block will-change-transform ${isGrey ? "text-[#8d8d8d]" : "text-white"}`}>
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

const caseStudies = [
  { title: "Bin Ali Medical", slug: "bin-ali", impact: "+140% Conversion", img: "/images/faq6.avif", tags: ["Website", "UX Strategy"] },
  { title: "Bensano", slug: "bensano", impact: "Top 10 SaaS 2024", img: "/images/faq2.jpg", tags: ["Product Design", "AI"] },
  { title: "Jurhy", slug: "jurhy", impact: "Award Winning", img: "/images/female-green.jpg", tags: ["Art Direction", "Web"] },
  { title: "Safecare", slug: "safecare", impact: "Next Gen AI", img: "/images/project.jpg", tags: ["HealthTech", "Branding"] },
];

const CaseStudies = () => {
  const trackRef = useRef(null);
  const pos = useRef(0);
  const speed = useRef(0.6); 
  const isNavigating = useRef(false);

  const duplicated = [...caseStudies, ...caseStudies, ...caseStudies];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;

    const loop = () => {
      if (!isNavigating.current) {
        pos.current -= speed.current;
      }

      const totalWidth = track.scrollWidth / 3;

      if (pos.current <= -totalWidth * 2) {
        pos.current += totalWidth;
      } else if (pos.current >= -totalWidth / 2) {
        pos.current -= totalWidth;
      }

      track.style.transform = `translate3d(${pos.current}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const navigate = (direction) => {
    if (isNavigating.current) return;
    isNavigating.current = true;

    // Responsive move amount: smaller jump on mobile
    const moveAmount = window.innerWidth < 768 ? 300 : 500; 
    const targetPos = direction === "right" ? pos.current - moveAmount : pos.current + moveAmount;

    gsap.to(pos, {
      current: targetPos,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        isNavigating.current = false;
      },
    });
  };

  return (
    <section className="bg-[#080808] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] text-white py-16 md:py-32 overflow-hidden font-monosans">
      
      {/* HEADER */}
      <div className="max-w-[1500px] mx-auto mb-10 md:mb-16 px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-4 md:mb-6 flex gap-2">
              <span>✱</span> Case Studies
            </p>
            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Stories of" className="block" />
              <ParallaxSplitText text="Success." className="opacity-40 block" />
            </h2>
          </div>

          <div className="w-full lg:col-span-4 flex justify-between items-center lg:items-end lg:border-l border-white/10 lg:pl-8">
            <p className="hidden lg:block text-xs text-white/40 uppercase tracking-widest max-w-[200px]">
              Strategic design for <span className="text-white">evolution</span>.
            </p>

            {/* NAVIGATION ARROWS */}
            <div className="flex gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => navigate("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer"
              >
                <FiArrowLeft className="text-sm md:text-base" />
              </button>
              <button
                onClick={() => navigate("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer"
              >
                <FiArrowRight className="text-sm md:text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INFINITE CAROUSEL */}
      <div
        className="relative py-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex gap-4 md:gap-10 will-change-transform">
          {duplicated.map((study, idx) => (
            <Link
              key={idx}
              href={`/projects/${study.slug}`}
              onMouseEnter={() => (speed.current = 0.1)}
              onMouseLeave={() => (speed.current = 0.6)}
              className="group relative shrink-0 w-[85vw] sm:w-[400px] md:w-[550px] lg:w-[650px] aspect-[16/10] overflow-hidden rounded-[1.25rem] md:rounded-[2rem] border border-white/5 bg-[#121212] block cursor-pointer"
            >
              <Image
                src={study.img}
                alt={study.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-xl px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                  {study.impact}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-white text-black px-2 py-1 md:px-3 md:py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter">{study.title}</h3>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                    <FiArrowUpRight className="text-lg md:text-xl" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mt-10 md:mt-16 flex flex-col sm:flex-row gap-6 justify-between items-center">
        <p className="hidden md:block text-[10px] text-white/50 uppercase tracking-[0.4em]">Explore our archive</p>
        <Link href="/projects" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto group cursor-pointer relative flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300">
            <span className="relative z-10"> View All Projects</span>
            <span className="text-base md:text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">✦</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudies;