"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);
  const gridMedia = Array(9).fill({
    type: "image",
    src: "/images/faq3.jpg",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500", // Slightly shorter for better mobile UX
          scrub: 1,
          pin: true,
        },
      });

      // Initial States
      gsap.set(".grid-item", { scale: 0.8, opacity: 0 });
      gsap.set(".grid-item:nth-child(5)", { scale: 1, opacity: 1 });
      gsap.set(".final-cta", { pointerEvents: "none" });

      tl.to(".grid-item", {
        opacity: 1,
        scale: 1,
        stagger: { amount: 0.5, from: "center" },
        duration: 1,
      })
        .to(".grid-item:not(:nth-child(5))", {
          // Use Viewport units for movement to prevent breaking layout on small screens
          x: (i) => {
            const xValues = isMobile
              ? [-150, 0, 150, -150, 150, -150, 0, 150]
              : [-1000, 0, 1000, -1000, 1000, -1000, 0, 1000];
            return xValues[i] || 0;
          },
          y: (i) => {
            const yValues = isMobile
              ? [-150, -150, -150, 0, 0, 150, 150, 150]
              : [-1000, -1000, -1000, 0, 0, 1000, 1000, 1000];
            return yValues[i] || 0;
          },
          scale: isMobile ? 1.5 : 2.5,
          opacity: 0,
          filter: "blur(15px)",
          duration: 3,
          ease: "power2.in",
        })
        .to(
          ".grid-item:nth-child(5)",
          {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            duration: 2.5,
            ease: "expo.inOut",
          },
          "-=2.5"
        )
        .to(".center-overlay", { opacity: 0.7, duration: 1 }, "-=1.5")
        .to(".scroll-indicator", { opacity: 0, duration: 0.5 }, "-=2")
        .to(
          ".final-cta",
          {
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
            duration: 1.5,
            ease: "power4.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] bg-[#080808] overflow-hidden flex items-center justify-center font-monosans"
    >
      {/* GRID CONTAINER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-8 w-[95vw] h-[60vh] md:w-[70vw] md:h-[80vh] place-items-center">
          {gridMedia.map((item, idx) => (
            <div
              key={idx}
              className={`grid-item relative overflow-hidden rounded-2xl md:rounded-4xl shadow-2xl w-full h-full ${
                idx === 4 ? "z-20 origin-center" : "z-10"
              }`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover grayscale"
              />
              {idx === 4 && (
                <div className="center-overlay absolute inset-0 bg-black opacity-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="scroll-indicator absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
        <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">
          Keep Scrolling
        </span>
        <div className="w-[1px] h-8 md:h-12 bg-white/40 animate-bounce" />
      </div>

      {/* CONTENT */}
      <div className="final-cta relative z-[100] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 text-center opacity-0 translate-y-10 flex flex-col items-center pointer-events-none">
        <p className="text-primary text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] font-black mb-4 md:mb-6">
          Next Phase
        </p>
        <h2 className="text-[12vw] lg:text-[8.5rem] leading-[0.85] font-black uppercase text-white tracking-tighter mb-5 md:mb-12">
          Let’s shape <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #fff" }}
          >
            your future
          </span>
        </h2>

        <a
          href="/contact"
          className="group relative cursor-pointer inline-flex items-center gap-4 bg-primary text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10">Start Your Project</span>
          <span className="relative z-10 transition-transform duration-500 group-hover:rotate-45 text-lg">
            ✦
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>

        <p className="text-white/30 pt-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-medium">
          Sinnex Studios — 2026 Edition
        </p>
      </div>

      {/* DECORATIVE SIDES - Hidden on Mobile */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col  gap-20 opacity-20">
        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">
          Creative
        </span>
        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">
          Strategy
        </span>
      </div>
    </section>
  );
}
