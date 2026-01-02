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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        },
      });

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
          x: (i) => [-1000, 0, 1000, -1000, 1000, -1000, 0, 1000][i] || 0,
          y: (i) => [-1000, -1000, -1000, 0, 0, 1000, 1000, 1000][i] || 0,
          scale: 2,
          opacity: 0,
          filter: "blur(20px)",
          duration: 3,
          ease: "power2.in",
        })
        .to(
          ".grid-item:nth-child(5)",
          {
            width: "100vw",
            height: "100vh",
            maxWidth: "none", // Prevent constraints
            maxHeight: "none",
            borderRadius: 0,
            duration: 2,
            ease: "expo.inOut",
          },
          "-=2"
        )
        .to(".center-overlay", { opacity: 0.8, duration: 1 }, "-=1.2")
        .to(".scroll-indicator", { opacity: 0, duration: 0.5 })
        .to(".final-cta", {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 1.5,
          ease: "power4.out",
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen rounded-4xl bg-[#080808] overflow-hidden flex items-center justify-center font-monosans"
    >
      {/* GRID CONTAINER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        {/* Added place */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-8 w-[90vw] h-[80vh] md:w-[70vw] place-items-center">
          {gridMedia.map((item, idx) => (
            <div
              key={idx}
              className={`grid-item relative overflow-hidden rounded-4xl shadow-2xl w-full h-full ${
                idx === 4 ? "z-20 origin-center" : "z-10"
              }`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />

              {idx === 4 && (
                <div className="center-overlay absolute inset-0 bg-black opacity-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* REST OF YOUR UI */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
        <span className="text-white text-[10px] uppercase tracking-[0.4em]">
          Keep Scrolling
        </span>
        <div className="w-[1px] h-12 bg-white/60 animate-bounce" />
      </div>

      <div className="final-cta relative z-[100] text-center px-6 opacity-0 translate-y-20 flex flex-col items-center pointer-events-none">
        <p className="text-primary text-[10px] uppercase tracking-[0.8em] font-black mb-6">
          Next Phase
        </p>
        <h2 className="text-[12vw] md:text-[8.5rem] leading-[0.85] font-black uppercase text-white tracking-tighter mb-12">
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
          className="group relative cursor-pointer inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10">Start Your Project</span>
          <span className="relative z-10 transition-transform duration-500 group-hover:rotate-45 text-lg">
            ✦
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
        <p className="text-white/40 pt-5 text-[10px] uppercase tracking-[0.3em] font-medium">
          Sinnex Studios — 2026 Edition
        </p>
      </div>

      {/* --- DECORATIVE SIDES --- */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-20 opacity-20">
        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase">
          Creative
        </span>

        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase">
          Strategy
        </span>
      </div>
    </section>
  );
}
