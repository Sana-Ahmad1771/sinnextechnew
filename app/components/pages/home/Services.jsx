"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

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
    image: "/images/hero-4.jpg",
  },
  {
    id: "07",
    title: "Search Engine Optimization (SEO)",
    description:
      "Implementing strategic optimization techniques to improve online visibility, drive organic traffic, and enhance search engine rankings effectively.",
    image: "/images/hero-4.jpg",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto border-t border-white/20">
        <div className="flex justify-between gap-10 mb-24 border-t border-white/20 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2">
              <span className="text-sm">✱</span> Our Services
            </p>
            <h2 className="text-[12vw] mt-10 md:text-[8rem] leading-[0.8] font-black uppercase tracking-tighter">
              {" "}
              What We Bring <br />{" "}
              <span className="text-white/40">To Your Brand</span>{" "}
            </h2>
          </div>
          <div className="flex items-end">
            <a
              href="/about"
              className="group relative flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">All Services</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>
        {/* --- SERVICES LIST --- */}{" "}
        <div className="border-t border-white/20">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                className="group relative border-b border-white/20 py-10 cursor-pointer overflow-visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 relative z-10">
                  {/* 1. Number */}
                  <div
                    className="md:col-span-1 text-white/40 font-bold z-30"
                    style={{
                      opacity: isActive ? 1 : 0.5,
                      transition: "opacity 0.4s ease",
                      color: "white",
                    }}
                  >
                    ({service.id})
                  </div>

                  {/* 2. Title Section with Masking */}
                  <div className="md:col-span-7 relative flex items-center h-32 md:h-48">
                    <div className="service-title-wrap relative z-20">
                      {/* Layer A: Base White Title (Visible always) */}
                      <h2
                        className="service-title text-6xl md:text-[5rem] font-black uppercase tracking-tighter"
                        style={{
                          opacity: isActive ? 1 : 0.5,
                          transition: "opacity 0.4s ease",
                          color: "white",
                          lineHeight: 1.1,
                        }}
                      >
                        {service.title.split(" ").map((word, wi) => (
                          <span
                            key={wi}
                            className="inline-block mr-3"
                            style={{
                              display: "inline-block",
                              whiteSpace: "normal",
                            }}
                          >
                            {word.split("").map((char, ci) => (
                              <span
                                key={ci}
                                className="gsap_split_letter inline-block"
                                style={{ display: "inline-block" }}
                              >
                                {char === " " ? "\u00A0" : char}
                              </span>
                            ))}
                          </span>
                        ))}
                      </h2>

                      {/* Layer B: Masked Reveal Title (Clips the image into letters) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="service-title absolute inset-0 text-6xl md:text-[9rem] font-black uppercase tracking-tighter"
                            style={{
                              backgroundImage: `url(${service.image})`,
                              backgroundSize: "450px 450px", // Size of the texture
                              backgroundRepeat: "no-repeat",
                              // Sync position with the floating card
                              backgroundPosition: `${50 + mouse.x * 120}% ${
                                50 + mouse.y * 120
                              }%`,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              pointerEvents: "none",
                              zIndex: 21,
                            }}
                          >
                            <div
                              className="gsap_split_word"
                              style={{
                                position: "relative",
                                display: "inline-block",
                              }}
                            >
                              {service.title.split("").map((char, i) => (
                                <div
                                  key={i}
                                  className="gsap_split_letter"
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                >
                                  {char === " " ? "\u00A0" : char}
                                </div>
                              ))}
                            </div>
                          </motion.h2>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 3. Floating Image Card (Centered behind text) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="service-image-wrap absolute pointer-events-none"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            x: mouse.x * 200 + 50, // Card movement
                            y: mouse.y * 150,
                            rotateX: mouse.y * -25,
                            rotateY: mouse.x * 25,
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                          }}
                          style={{
                            left: "15%",
                            width: "18rem",
                            height: "22rem",
                            zIndex: 0, // Behind the text
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <img
                            src={service.image}
                            className="service-image rounded-[2rem] w-full h-full object-cover shadow-2xl"
                            alt={service.title}
                            style={{
                              filter: "brightness(0.9)",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 4. Description */}
                  <div className="md:col-span-3 hidden lg:block z-30">
                    <p
                      className="text-sm font-monosans text-white/80 leading-snug max-w-[250px]"
                      style={{
                        opacity: isActive ? 1 : 0.5,
                        transition: "opacity 0.4s ease",
                        color: "white",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* 5. Arrow */}
                  <div className="md:col-span-1 flex justify-end z-30">
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <FiArrowUpRight size={28} />
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
