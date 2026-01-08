"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 flex flex-col justify-center bg-black font-monosans overflow-hidden pt-20">
      {/* --- Background Abstract Elements --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0"></div>
        <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto ">
        {/* 1. TOP SUB-HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="lg:col-span-4 mx-auto md:mx-0 px-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2">
              <span className="text-sm">✱</span> Portfolio
            </p>
          </div>
        </motion.div>

        {/* 2. MAIN TYPOGRAPHY & CTA */}
        <div className="flex flex-col items-center md:items-start md:flex-row lg:items-end text-center sm:text-left justify-between gap-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter"
          >
            <span className="block text-white">Creative</span>
            <span className="block text-white opacity-40">Showcase</span>
          </motion.h1>

          {/* 3. CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mb-4" // Aligned with the baseline of the text
          >
            <a
              href="/contact"
              className="group relative w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10"> Get in Touch</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
