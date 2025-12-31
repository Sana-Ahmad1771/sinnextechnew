"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Auto Planeta", category: "Web Design – UI/UX", img: "/images/project.jpg" },
  { title: "Cobot EX", category: "Web Design – UI/UX", img: "/images/project2.jpg" },
  { title: "Bujnowska", category: "Web Design – UI/UX", img: "/images/female-green.jpg" },
  { title: "Cam Waw", category: "Web Design – UI/UX", img: "/images/african.jpg" },
  { title: "Colabo", category: "Web Design – UI/UX", img: "/images/bag-mn.jpg" },
];

const Realizations = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    gsap.to(el, {
      x: () => -(el.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: ".realizations-section",
        start: "top top",
        end: () => `+=${el.scrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section className="realizations-section bg-black text-white py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        {/* Left: Section Label */}
        <div className="lg:col-span-4 border-t border-white/20 pt-4">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
            <span className="text-sm">✱</span> OUR REALIZATIONS
          </p>
        </div>

        {/* Right: Bold Heading & Filter simulation */}
        <div className="lg:col-span-8 border-t border-white/20 pt-4">
          <h2 className="text-[5vw] md:text-[4rem] leading-tight uppercase font-bold mb-10">
            Good Design Makes A <br /> Product <span className="text-white/40">Useful.</span>
          </h2>
          
          {/* Filter Pills (Modeling Ref Image 2) */}
          <div className="flex flex-wrap gap-3">
            {["LOGO", "WEBSITES", "ONLINE STORES", "SERVICES"].map((item, idx) => (
              <button 
                key={item} 
                className={`px-6 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-widest transition-all hover:bg-white hover:text-black ${idx === 1 ? 'bg-white text-black' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-6 px-6 md:px-12 lg:px-20 will-change-transform">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="relative shrink-0 w-[300px] md:w-[450px] aspect-[3/4] overflow-hidden rounded-sm group cursor-pointer"
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              {/* Card Details */}
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-2xl md:text-4xl font-bold uppercase mb-2 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;