"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";

const TRAIL_IMAGES = [
  "images/project.jpg",
  "images/project2.jpg",
  "images/hero-2.jpg",
  "images/hero-4.jpg",
  "images/african.jpg",
  "images/faq6.avif",
  "images/bag-mn.jpg",
  "images/female-green.jpg",
];

const AboutHero = () => {
  const [images, setImages] = useState([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageCount = useRef(0);
  const sectionRef = useRef(null); // Reference to the Hero section

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    // Get mouse position relative to the Hero section container
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const distance = Math.hypot(
      x - lastMousePos.current.x,
      y - lastMousePos.current.y
    );

    // Only drop image if moved enough distance
    if (distance > 90) {
      lastMousePos.current = { x, y };
      const id = Date.now();
      const imgIndex = imageCount.current % TRAIL_IMAGES.length;
      imageCount.current++;

      const newImage = {
        id,
        x,
        y,
        url: TRAIL_IMAGES[imgIndex],
      };

      setImages((prev) => [...prev, newImage]);
      setTimeout(() => {
        setImages((prev) => prev.filter((img) => img.id !== id));
      }, 1000);
    }
  };

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
      ref={sectionRef} // Attach ref here
      onMouseMove={handleMouseMove}
      className="relative rounded-4xl md:h-screen h-[70vh] max-h-[1000px] w-full bg-[#080808] overflow-hidden flex flex-col items-center justify-center cursor-default"
    >
      {/* 1. Image Trail Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
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
                // Ensures the image stays centered on cursor but clipped by container
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* --- Background Abstract Elements --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0"></div>
        <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0"></div>
      </div>

      {/* --- 3. Main Typography --- */}
      <div className="relative z-10 text-center px-4 ">
        <div className="relative inline-block">
          <span className="absolute -top-4 -right-6 md:-top-6 md:right-24 text-gray-500 text-sm md:text-2xl font-bold">
            ®
          </span>
          <h1 className="text-[10vw] leading-[0.85] font-black uppercase text-white tracking-tighter">
            Crafting
          </h1>
          <h1 className="text-[10vw] leading-[0.85] font-black uppercase text-white tracking-tighter">
            The Future
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.5em] leading-relaxed">
            We are a collective of visionaries, engineers, and designers
            dedicated to redefining the digital landscape through SinnexTech.
          </p>
        </motion.div>
      </div>

      {/* --- 4. Bottom Status Bar --- */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-6 py-8 flex justify-between items-end text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
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
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  {social.icon}
                </motion.div>
                <motion.div
                  variants={iconSlideVariants2}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  {social.icon}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="hidden md:block tracking-[0.5em]">VISUAL IDENTITY</div>
        <div className="w-12 h-12"></div> {/* Spacer for symmetry */}
      </div>
    </section>
  );
};

export default AboutHero;
