"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSplitText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".word-inner");
      gsap.fromTo(
        words,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "bottom 70%",
            scrub: 1.5,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap overflow-hidden ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-flex mr-[0.3em]"
        >
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </span>
  );
};

const faqs = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital solutions including UI/UX design, brand identity systems, custom web development, and strategic digital consulting.",
  },
  {
    id: "02",
    question: "How long does a project take?",
    answer:
      "Most branding and digital projects are completed within 4–8 weeks depending on scope.",
  },
  {
    id: "03",
    question: "Do you work with all industries?",
    answer:
      "We specialize in healthcare and tech but apply our design system across multiple industries.",
  },
  {
    id: "04",
    question: "Can you customize packages?",
    answer:
      "Yes. Every proposal is tailored to your goals, budget, and technical needs.",
  },
  {
    id: "05",
    question: "How can we start?",
    answer:
      "Click the Ask a Question button or contact us to schedule a discovery call.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-[#f9f9f9] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-monosans overflow-hidden">
      <div className="max-w-[1500px] mx-auto text-black">
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-24 border-t border-black/10 pt-8 md:pt-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-4xl">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
                <span className="text-sm">✱</span> Support & Inquiries
              </p>
              <h2 className="font-monosansnarrow mt-6 md:mt-10 text-[18vw] sm:text-[14vw] md:text-[8.5rem] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-wide">
                <ParallaxSplitText text="Quick" className="block" />
                <ParallaxSplitText text="Help" className="block opacity-40" />
              </h2>
            </div>
            <div className="lg:max-w-sm pb-4">
              <p className="text-base md:text-xl text-black/60 max-w-md font-medium leading-snug">
                Find answers to the most common questions about our services and
                process.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN GRID  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-stretch">
          {/* IMAGE BLOCK - Hidden on small mobile to save vertical space, or kept for visual */}
          <div className="lg:col-span-5 h-full order-2 lg:order-1">
            <motion.div
              className="relative h-[300px] md:h-full w-full min-h-[300px] lg:min-h-[500px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group border border-black/5"
              whileHover={{ scale: 0.99 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/faq6.avif"
                width={600}
                height={600}
                alt="FAQ illustration" // ← added alt text
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                  Sinnex Support
                </p>
              </div>
            </motion.div>
          </div>

          {/* ACCORDION BLOCK */}
          <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
            <div className="divide-y divide-black/10 border-t border-black/10">
              {faqs.map((faq, index) => {
                const open = expanded === index;
                return (
                  <div key={faq.id} className="group">
                    <button
                      onClick={() => setExpanded(open ? null : index)}
                      className="w-full py-8 md:py-10 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex gap-4 md:gap-8 items-start pr-4">
                        <span className="text-xs md:text-[16px] font-black text-black/20 mt-1.5 md:mt-2 uppercase tracking-widest">
                          {faq.id}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-500 leading-tight ${
                            open
                              ? "translate-x-2 md:translate-x-4 text-primary"
                              : "text-black"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                          open
                            ? "bg-primary text-white border-primary rotate-45"
                            : "border-black/10 text-black group-hover:border-black"
                        }`}
                      >
                        <span className="text-xl md:text-2xl font-light">
                          ＋
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 md:pb-10 pl-8 md:pl-20 text-base md:text-xl text-black/60 max-w-2xl font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* INTEGRATED CTA BOX */}
            <div className="mt-8 md:mt-12 bg-black text-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group/cta">
              <div className="relative z-10 text-center sm:text-left">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 md:mb-3 font-black">
                  Need more clarity?
                </p>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  Ask Us Directly.
                </h4>
              </div>
              <a
                href="/contact"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Ask a Question</span>
                <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                  ✦
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
