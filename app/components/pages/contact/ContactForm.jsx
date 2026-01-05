"use client";

import React, { useEffect, useRef } from "react";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================
    PARALLAX TEXT COMPONENT (Consistent with Home)
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

const ContactForm = () => {
  return (
    <main className="bg-[#080808] text-white font-monosans min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-start lg:items-end mb-20">
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-6 flex gap-2">
              <span>✱</span> Get in Touch
            </p>
            <h1 className="font-monosansnarrow text-[15vw] md:text-[9rem] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Let's build" className="block" />
              <ParallaxSplitText text="together." className="opacity-40 block" />
            </h1>
          </div>
          <div className="w-full lg:col-span-4 border-l border-white/10 pl-6 md:pl-8">
            <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest leading-relaxed max-w-xs">
              Whether you have a <span className="text-white">bold idea</span> or a complex challenge, we're ready.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="group border-b border-white/5 pb-8 transition-colors hover:border-white/20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Email Us</p>
                <a href="mailto:hello@agency.com" className="text-2xl md:text-4xl font-monosansnarrow uppercase font-bold flex items-center justify-between group">
                  hello@SinnexTech.com
                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>

              <div className="group border-b border-white/5 pb-8 transition-colors hover:border-white/20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Visit Studio</p>
                <p className="text-2xl md:text-4xl font-monosansnarrow uppercase font-bold leading-none">
                  No. 347 Office, M.Dubia Tower,
                  <br />
                  Khanna Pul, Islamabad, Pakistan
                </p>
              </div>

              <div className="group border-b border-white/5 pb-8 transition-colors hover:border-white/20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Socials</p>
                <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest font-bold">
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors">Behance</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="bg-[#121212] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Service Required</label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white/40 appearance-none">
                  <option className="bg-[#121212]">Web Design & Strategy</option>
                  <option className="bg-[#121212]">Artificial Intelligence</option>
                  <option className="bg-[#121212]">Brand Identity</option>
                  <option className="bg-[#121212]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/10 resize-none"
                />
              </div>

              <button className="group relative w-full flex items-center justify-center gap-3 bg-white text-black px-10 py-6 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300">
                <span className="relative z-10">Send Inquiry</span>
                <FiArrowUpRight className="relative z-10 text-lg group-hover:rotate-45 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;