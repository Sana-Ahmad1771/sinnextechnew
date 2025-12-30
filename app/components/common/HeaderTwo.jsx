"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Initial check for screen size
    setIsLg(window.innerWidth >= 1024);

    const handleScroll = () => {
      // Threshold: Only change style after scrolling down 100px
      // so the header stays clean over the big hero text initially
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dynamic Navigation Container Styles
  const navStyles = {
    left: "50%",
    // Moves down slightly when it becomes a pill
    top: scrolled ? "16px" : "0px",
    // Width gets smaller on desktop when scrolled
    width: scrolled ? (isLg ? "85%" : "95%") : "100%",
    transform: "translateX(-50%)",
    // Smooth transition for the movement and reshaping
    transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <nav ref={navRef} className="fixed z-50" style={navStyles}>
      <div
        // Conditional classes for background and border
        className={`w-full transition-all duration-500 px-6 py-5 lg:px-12 
          ${
            scrolled
              ? "rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-lg"
              : "bg-transparent border-transparent mt-2"
          }`}
      >
        <div className="flex items-center justify-between mx-auto max-w-[1400px]">
          {/* --- Logo Section --- */}
          <a href="/" className="flex items-center gap-2 group">
            {/* The "Box" containing the PNG Logo */}
            <div className="relative border-2 border-white rounded-sm px-3 py-1 group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
              <div className="relative w-10 h-9 transition-all duration-300 group-hover:invert group-hover:brightness-0">
                <Image
                  src="/images/logo.png"
                  alt="SINNEXTech Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Studio Text - Sits to the right and fades out on scroll */}
            <span
              className={`font-bold text-white tracking-widest uppercase text-[10px] md:text-sm transition-all duration-500 ${
                scrolled
                  ? "opacity-0 -translate-x-4 pointer-events-none"
                  : "opacity-100 translate-x-0"
              } hidden lg:block`}
            >
              SINNEXTech®
            </span>
          </a>
          {/* --- Desktop Nav Links (Pill Style) --- */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {["Home", "Studio", "Projects", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                // Highlight the first item ('Home') like in the reference image
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                    ${
                      index === 0
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* --- Right Side Menu / CTA --- */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300">
              {/* Simple Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
