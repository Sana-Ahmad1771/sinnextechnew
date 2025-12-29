"use client";
import React, { useRef } from "react";
import Image from "next/image";
import HeroImage from "@/public/images/bg-sinnex.avif";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";

const Herotwo = () => {
  const containerRef = useRef(null);

  // 1. Hook into the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress (0 to 1) to horizontal movement (pixels)
  // Heading 1 moves Right (0 to 200px)
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 250]);
  // Heading 2 moves Left (0 to -200px)
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const stats = [
    { value: "20 +", label: "Projects Done" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section 
      ref={containerRef} 
      className="xl:mx-10 lg:mx-5 mx-2.5 overflow-hidden" // overflow-hidden prevents horizontal scrollbars
    >
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden rounded-[40px]">
        {/* Background Image Layer - Remains Static */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#8974EB66] to-[#8974EB00]" />
        </div>

        {/* Content Wrapper */}
        <div className="relative xl:max-w-[1440px] xl:mx-auto px-5 lg:px-10 2xl:px-0 z-10 h-full w-full p-8 md:p-16 flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row justify-between items-center h-full">
            <div className="max-w-6xl text-dark-black">
              
              {/* Heading 1: Moves RIGHT on scroll */}
              <motion.h1 
                style={{ x: xRight }}
                className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight"
              >
                Empowering
              </motion.h1>

              {/* Heading 2: Moves LEFT on scroll */}
              <motion.h1 
                style={{ x: xLeft }}
                className="text-5xl font-serif md:text-[110px] font-medium leading-[1.1] tracking-tight whitespace-nowrap"
              >
                Healthcare Brands
              </motion.h1>

              <p className="text-black text-base font-normal font-roboto mt-4 xl:w-[80%] lg:w-[80%]">
                Transforming healthcare facilities with tailored digital
                solutions for branding, web development, and digital presence.
              </p>
              
              <div className="flex gap-8 mt-10">
                <button className="flex items-center gap-2 border-b border-black pb-1 hover:opacity-70 transition">
                  Get in touch <BsArrowUpRight />
                </button>
                <button className="flex items-center gap-2 border-b border-black pb-1 hover:opacity-70 transition">
                  Our services <BsArrowUpRight />
                </button>
              </div>
            </div>

            {/* Floating Project Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block absolute -right-30 top-20 group"
            >
              <div className="backdrop-blur-md bg-white/20 p-4 rounded-[32px] border border-white/30 w-64 ">
                <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-4">
                  <Image src={HeroImage} alt="Project" fill className="object-cover" />
                </div>
                <div className="flex justify-between items-end text-white px-1">
                  <p className="text-sm font-light leading-snug">Discover Our <br /> Recent Project</p>
                  <div className="bg-white/30 p-2 rounded-full"><BsArrowUpRight /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="absolute bottom-0 right-0 bg-white pt-12 pl-12 pr-20 pb-14 rounded-tl-[50px] hidden md:flex items-center gap-16">
          <div className="absolute -top-[46px] -right-1 w-[50px] h-[50px] bg-transparent rounded-br-[50px] shadow-[20px_20px_0_0_white] pointer-events-none" />
          <div className="absolute -bottom-1 -left-[46px] w-[50px] h-[50px] bg-transparent rounded-br-[50px] shadow-[20px_20px_0_0_white] pointer-events-none" />

          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-5xl font-bold text-slate-900 tracking-tighter">{stat.value}</span>
              <p className="text-[10px] text-slate-400 font-bold max-w-[140px] mt-2 leading-tight uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="grid grid-cols-2 gap-6 mt-8 md:hidden px-4">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <span className="text-3xl font-bold">{stat.value}</span>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Herotwo;