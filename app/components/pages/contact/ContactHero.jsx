"use client";

import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        ease: "power3.out",
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
              isGrey ? "text-[#8d8d8d]" : "text-white"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

const ContactHero = () => {
  return (
   /* Added overflow-hidden and ensure relative for stacking context */
    <main className="relative m-2 overflow-hidden rounded-4xl bg-[#080808] text-white font-monosans min-h-screen">
      
      {/* --- Background Abstract Elements --- */}
      {/* Changed z-10 to -z-10 and ensured it is relative to the main container */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <div 
          className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-[120px] z-0"
        />
        <div 
          className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-[120px] z-0"
        />
      </div>
     
      <section className="relative z-10 w-full px-6 md:px-12 max-w-[1500px] mx-auto pt-32 pb-20 md:pt-48 md:pb-32">
      
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start lg:items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex gap-2">
              <span>✱</span> Contact Us
            </p>
            <h1 className="font-monosansnarrow text-[12vw] md:text-[8.5rem] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Start a" className="block" />
              <ParallaxSplitText text="Project." className="opacity-40 block" />
            </h1>
          </div>
          <div className="w-full lg:col-span-4 border-l border-white/10 pl-6">
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest leading-relaxed max-w-xs">
              Directing digital evolution through{" "}
              <span className="text-white">strategic</span> design.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="group border-b border-white/5 pb-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@agency.com"
                  className="text-xl md:text-3xl font-monosansnarrow uppercase font-bold flex items-center justify-between hover:text-primary transition-colors"
                >
                  hello@SinnexTech.com
                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>
              <div className="group border-b border-white/5 pb-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  SOftware House
                </p>
                <p className="text-xl md:text-3xl font-monosansnarrow uppercase font-bold leading-tight">
                  No. 347 Office, M.Dubia Tower,
                  <br />
                  Khanna Pul, Islamabad, Pakistan
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Behance
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            <form className="space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest"
                />
              </div>
              <textarea
                rows="3"
                placeholder="MESSAGE"
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest resize-none"
              />
              <button className="group relative w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-500">
                <span className="relative z-10">Send Message</span>
                <FiArrowUpRight className="relative z-10 text-lg group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="relative z-10 w-full h-[50vh] md:h-[70vh] px-6 md:px-12 pb-20">
        <div className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 grayscale invert contrast-[1.2] opacity-60 hover:opacity-100 transition-opacity duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46292.54791963975!2d73.04884158450868!3d33.57170264387163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e0!3m2!1sen!2s!4v1767612425026!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactHero;
