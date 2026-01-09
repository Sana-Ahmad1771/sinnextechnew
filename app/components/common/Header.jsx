"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const Header = ({ variant = "dark" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const pathname = usePathname();

  const pillRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    setIsLg(window.innerWidth >= 1024);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const menuItems = [
    { name: "Home", id: "(01)", path: "/" },
    { name: "About", id: "(02)", path: "/about" },
    { name: "Projects", id: "(03)", path: "/projects" },
    { name: "Services", id: "(04)", path: "/services" },
    { name: "Blog", id: "(05)", path: "/blog" },
  ];

  // GSAP Smooth Navigation Logic
  useLayoutEffect(() => {
    const activeIndex = navLinks.findIndex((link) => link.path === pathname);
    const activeLink = linksRef.current[activeIndex];
    const pill = pillRef.current;

    // If there's no exact match (e.g. /projects/[slug]) hide the pill so it doesn't linger
    if (!activeLink && pill) {
      gsap.to(pill, { autoAlpha: 0, width: 0, duration: 0.25, overwrite: true });
      return;
    }

    if (activeLink && pill) {
      const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = activeLink;

      // Ensure the pill is visible when there is an active link
      gsap.set(pill, { autoAlpha: 1 });

      // The first time it runs, we jump to the position instantly to avoid the "filling" effect
      const isFirstLoad = !pill.dataset.initialized;

      if (isFirstLoad) {
        gsap.set(pill, {
          x: offsetLeft,
          width: offsetWidth,
          height: offsetHeight,
          top: offsetTop,
        });
        pill.dataset.initialized = "true";
      } else {
        // Subsequent moves are smooth and horizontal
        gsap.to(pill, {
          x: offsetLeft,
          width: offsetWidth,
          height: offsetHeight, // Matches height immediately
          top: offsetTop, // Matches top immediately
          duration: 0.6,
          ease: "expo.out", // High quality, smooth professional ease
          overwrite: true,
        });
      }
    }
  }, [pathname, scrolled, isLg]);

  const isLightMode = variant === "light" && !scrolled;
  const textColor = isLightMode ? "text-black" : "text-white";
  const borderColor = isLightMode ? "border-black/20" : "border-white/20";

  return (
    <>
      <nav
        className="fixed z-[60] left-1/2 -translate-x-1/2 transition-all duration-500"
        style={{
          top: scrolled ? "16px" : "0px",
          width: scrolled ? (isLg ? "85%" : "95%") : "100%",
        }}
      >
        <div
          className={`w-full transition-all duration-500 px-6 py-5 lg:px-12 ${
            scrolled
              ? "rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-lg"
              : "bg-transparent border-transparent mt-2"
          }`}
        >
          <div className="flex items-center justify-between mx-auto max-w-[1400px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={`relative border-2 rounded-sm px-3 py-1 group-hover:bg-primary transition-colors duration-300 ${
                  isLightMode ? "border-black" : "border-white"
                }`}
              >
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
                className={`font-bold tracking-widest uppercase text-sm transition-all duration-500 ${textColor} ${
                  scrolled ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              >
                SINNEXTech®
              </span>
            </Link>

            {/* Desktop Links */}
            <div
              className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm relative ${
                isLightMode
                  ? "bg-black/5 border-black/5"
                  : "bg-white/5 border-white/5"
              }`}
            >
              {/* The GSAP Pill - Strictly Horizontal */}
              <div
                ref={pillRef}
                className={`absolute rounded-full pointer-events-none ${
                  isLightMode ? "bg-black" : "bg-white"
                }`}
                style={{ willChange: "transform, width, opacity", opacity: 0 }}
              />

              {navLinks.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    ref={(el) => (linksRef.current[idx] = el)}
                    className={`relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 z-10 ${
                      isActive
                        ? isLightMode
                          ? "text-white"
                          : "text-black"
                        : isLightMode
                        ? "text-black/60 hover:text-black"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className={`flex items-center cursor-pointer justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:bg-primary hover:text-white ${borderColor} ${textColor}`}
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Pop-out Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />
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
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-8 right-8 text-black hover:rotate-90 transition-transform duration-300"
              >
                <FiX size={32} />
              </button>
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-start gap-4 text-black"
                  >
                    <span className="text-[5.5vw] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter transition-transform group-hover:translate-x-3 duration-300">
                      {item.name}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-black/30 mt-1">
                      {item.id}
                    </span>
                  </Link>
                ))}
              </div>
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
