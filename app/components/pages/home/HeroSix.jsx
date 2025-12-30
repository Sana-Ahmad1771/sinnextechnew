"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";

const TRAIL_IMAGES = [
  "images/project.png",
  "images/project2.png",
  "images/hero-1.jpg",
  "images/hero-2.jpg",
  "images/hero-3.jpg",
  "images/hero-4.jpg",
  "images/african.png",
  "images/bag-mn.png",
  "images/female-green.png",
];

const Hero = () => {
  const [images, setImages] = useState([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageCount = useRef(0);

  // --- Image Trail Logic ---
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = Math.hypot(
      clientX - lastMousePos.current.x,
      clientY - lastMousePos.current.y
    );

    if (distance > 90) {
      lastMousePos.current = { x: clientX, y: clientY };
      const id = Date.now();
      const imgIndex = imageCount.current % TRAIL_IMAGES.length;
      imageCount.current++;

      const newImage = {
        id,
        x: clientX,
        y: clientY,
        url: TRAIL_IMAGES[imgIndex],
      };
      setImages((prev) => [...prev, newImage]);
      setTimeout(() => {
        setImages((prev) => prev.filter((img) => img.id !== id));
      }, 1000);
    }
  };

  // --- Icon Animation Variants ---
  const iconSlideVariants = {
    initial: { y: 0, rotateX: 0 },
    hover: { y: "-120%", rotateX: 45 },
  };
  const iconSlideVariants2 = {
    initial: { y: "120%", rotateX: -45 },
    hover: { y: 0, rotateX: 0 },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-[#080808] overflow-hidden flex flex-col items-center justify-center cursor-default"
    >
      {/* --- 1. Image Trail Overlay --- */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <AnimatePresence>
          {images.map((img) => (
            <motion.img
              key={img.id}
              src={img.url}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: Math.random() * 20 - 10,
              }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-48 h-64 object-cover rounded-xl shadow-2xl border border-white/10"
              style={{
                left: img.x,
                top: img.y,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* --- Background Abstract Elements (Simulation) --- */}

      {/* You would replace these divs with actual 3D rendered images using next/image if you have them */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Left dark block simulation */}
        <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0"></div>
        {/* Right dark block simulation */}
        <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0"></div>
      </div>

      {/* --- 3. Main Typography --- */}
      <div className="relative z-10 text-center px-4 select-none">
        <div className="relative inline-block">
          <span className="absolute -top-4 -right-6 md:-top-8 md:-right-10 text-gray-500 text-sm md:text-2xl font-bold">
            ®
          </span>
          <h1 className="text-[18vw] leading-[0.85] font-black uppercase text-white tracking-tighter">
            SINNEX
          </h1>
        </div>
        <p className="mt-8 text-gray-400 text-sm md:text-lg uppercase tracking-[0.3em] font-medium">
          Designing Your Digital World
        </p>
      </div>

      {/* --- 4. Bottom Status Bar --- */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-6 py-8 flex justify-between items-end text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
        {/* Social Icons with Sliding 3D Logic */}
        <div className="flex items-center gap-4">
          {[
            { id: "ig", icon: <IoLogoInstagram size={22} />, url: "#" },
            { id: "li", icon: <RiLinkedinFill size={22} />, url: "#" },
          ].map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              initial="initial"
              whileHover="hover"
              className="relative w-12 h-12 overflow-hidden border border-white/10 bg-white/5 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
            >
              <div className="relative h-6 w-6 overflow-hidden">
                <motion.div
                  variants={iconSlideVariants}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  {social.icon}
                </motion.div>
                <motion.div
                  variants={iconSlideVariants2}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  {social.icon}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block tracking-[0.5em]">VISUAL IDENTITY</div>

        {/* <div className="flex items-center gap-4">
          <span className="text-white cursor-pointer hover:opacity-50 transition-opacity">
            Bē
          </span>
          <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-bounce mt-1"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
