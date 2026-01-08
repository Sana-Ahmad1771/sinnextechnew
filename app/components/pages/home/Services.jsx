"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ParallaxSplitText from "./ParallaxSplitText.jsx";

const services = [
  {
    id: "01",
    title: "Design",
    description:
      "Translating brand strategy into compelling visuals that captivate audiences and communicate your message with clarity and impact.",
    image: "/images/designout.jpg",
  },
  {
    id: "02",
    title: "Identity",
    description:
      "Building distinctive visual and verbal systems that authentically express your brand's core values, personality, and unique position in the market.",
    image: "/images/hero-4.jpg",
  },
  {
    id: "03",
    title: "Strategy",
    description:
      "Crafting a clear, actionable roadmap that defines your brand's purpose, vision, and competitive positioning for long-term market success.",
    image: "/images/project2.jpg",
  },
  {
    id: "04",
    title: "Rebranding",
    description:
      "Transforming existing brands with renewed strategies, modern design approaches, and refreshed communication that resonates with contemporary audiences.",
    image: "/images/hero-4.jpg",
  },
  {
    id: "06",
    title: "Website Development",
    description:
      "Creating responsive, high-performance websites that deliver seamless user experiences while accurately reflecting your brand's identity and objectives.",
      image: "/images/faq6.avif",
  },
  {
    id: "07",
    title: "Search Engine Optimization (SEO)",
    description:
      "Implementing strategic optimization techniques to improve online visibility, drive organic traffic, and enhance search engine rankings effectively.",
    image: "/images/faq2.jpg",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to disable heavy mouse-tracking effects
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section className="bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] text-white py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto border-t border-white/20">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24 pt-6">
          <div className="max-w-9xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-sm">✱</span> Our Services
            </p>
            <h2 className=" text-[14vw] md:text-[8rem] leading-[0.9] font-black uppercase tracking-tighter">
              <ParallaxSplitText text="What We Bring" />
              <div className="opacity-50">
                <ParallaxSplitText text="To Your Brand" />
              </div>
            </h2>
          </div>

          <a
            href="/about"
            className="group relative flex items-center gap-3 bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">All Services</span>
            <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
              ✦
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* --- SERVICES LIST --- */}
        <div className="border-t border-white/20">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                className="group relative border-b border-white/20 py-8 md:py-12 lg:py-16 cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6 relative z-10">
                  {/* 1. Number */}
                  <div className="md:col-span-1 text-white/40 font-bold text-sm md:text-base">
                    ({service.id})
                  </div>

                  {/* 2. Title Section */}
                  <div className="md:col-span-7 relative flex items-center min-h-[60px] md:min-h-[120px]">
                    <div className="service-title-wrap relative z-20 w-full">
                      <h2
                        className="text-4xl sm:text-5xl md:text-[4.5rem] lg:text-[5rem] font-black uppercase tracking-tighter transition-opacity duration-500"
                        style={{ opacity: isActive || isMobile ? 1 : 0.5 }}
                      >
                        {service.title}
                      </h2>

                      {/* Masked Reveal (Desktop Only) */}
                      {!isMobile && (
                        <AnimatePresence>
                          {isActive && (
                            <motion.h2
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 text-4xl sm:text-5xl md:text-[4.5rem] lg:text-[5rem] font-black uppercase tracking-tighter"
                              style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: `${50 + mouse.x * 120}% ${
                                  50 + mouse.y * 120
                                }%`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                pointerEvents: "none",
                                zIndex: 21,
                              }}
                            >
                              {service.title}
                            </motion.h2>
                          )}
                        </AnimatePresence>
                      )}
                    </div>

                    {/* 3. Floating Image Card (Desktop Only) */}
                    {!isMobile && (
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute pointer-events-none hidden md:block"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              x: mouse.x * 150 + 100,
                              y: mouse.y * 100,
                              rotateX: mouse.y * -20,
                              rotateY: mouse.x * 20,
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            style={{
                              left: "20%",
                              width: "15rem",
                              height: "18rem",
                              zIndex: 0,
                              perspective: "1000px",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <img
                              src={service.image}
                              className="rounded-3xl w-full h-full object-cover shadow-2xl brightness-90"
                              alt={service.title}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>

                  {/* 4. Description */}
                  <div className="md:col-span-3">
                    <p className="text-xs md:text-sm font-light text-white/60 md:text-white/80 leading-relaxed max-w-sm md:max-w-[250px]">
                      {service.description}
                    </p>
                  </div>

                  {/* 5. Arrow */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-10 h-10 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <FiArrowUpRight className="text-lg md:text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
