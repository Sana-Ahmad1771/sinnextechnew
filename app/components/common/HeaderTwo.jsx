"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    setIsLg(window.innerWidth >= 1024);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    const handleResize = () => setIsLg(window.innerWidth >= 1024);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navStyles = {
    left: "50%",
    top: scrolled ? "16px" : "0px",
    width: scrolled ? (isLg ? "85%" : "95%") : "100%",
    transform: "translateX(-50%)",
    transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const menuItems = [
    { name: "Home", id: "(01)" },
    { name: "About", id: "(02)" },
    { name: "Projects", id: "(03)" },
    { name: "Services", id: "(04)" },
    { name: "Blog", id: "(05)" },
  ];

  return (
    <>
      <nav className="fixed z-[60]" style={navStyles}>
        <div
          className={`w-full transition-all duration-500 px-6 py-5 lg:px-12 ${
            scrolled
              ? "rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-lg"
              : "bg-transparent border-transparent mt-2"
          }`}
        >
          <div className="flex items-center justify-between mx-auto max-w-[1400px]">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative border-2 border-white rounded-sm px-3 py-1 group-hover:bg-primary transition-colors duration-300">
                <div className="relative w-8 h-7">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <span
                className={`font-bold text-white tracking-widest uppercase text-sm transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                } hidden lg:block`}
              >
                SINNEXTech®
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
              {["Home", "Studio", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    index === 0
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-primary transition-all duration-300"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- POP-OUT OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] "
            />

            {/* Menu Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: "30%",
                y: "30%",
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: "30%",
                y: "30%",
                filter: "blur(10px)",
              }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-6 right-6 w-[90vw] md:w-[600px] bg-white rounded-[2.5rem] p-10 md:p-16 z-[80] shadow-2xl origin-bottom-right"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-8 right-8 text-black hover:rotate-90 transition-transform duration-300"
              >
                <FiX size={32} />
              </button>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={`/${item.name.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="group flex items-start gap-4 text-black"
                  >
                    <span className="text-[5.5vw] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter transition-transform group-hover:translate-x-3 duration-300">
                      {item.name}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-black/30 mt-1">
                      {item.id}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 w-full bg-[#0d0d0d] text-white rounded-full py-6 flex items-center justify-center gap-2 group overflow-hidden relative"
              >
                <span className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs relative z-10">
                  Get In Touch
                </span>
                <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                  ✦
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
