"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const navRef = useRef(null);
  const scrolledRef = useRef(false);
  const lastYRef = useRef(0);
  const settleTimeoutRef = useRef(null);

  // Initialize window-related states safely
  useEffect(() => {
    // Set initial values after component mounts
    setIsLg(window.innerWidth >= 1024);
    lastYRef.current = window.scrollY;
    const initialScrolled = window.scrollY > 50;
    scrolledRef.current = initialScrolled;
    setScrolled(initialScrolled);
  }, []);

  // Update CSS variable for content padding
  const updateHeaderHeight = () => {
    if (navRef.current) {
      const height = Math.ceil(navRef.current.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${height}px`
      );
    }
  };

  useLayoutEffect(() => {
    updateHeaderHeight();
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsLg(window.innerWidth >= 1024);
      updateHeaderHeight();
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const delta = currentY - lastYRef.current;
          lastYRef.current = currentY;

          // Behavior: scroll down a little -> shrink (scrolled=true)
          //           scroll up a little   -> expand (scrolled=false)
          // Small thresholds to avoid jitter
          let newScrolled = scrolledRef.current;

          if (currentY <= 10) {
            newScrolled = false;
          } else if (delta > 8) {
            newScrolled = true;
          } else if (delta < -8) {
            newScrolled = false;
          }

          if (newScrolled !== scrolledRef.current) {
            scrolledRef.current = newScrolled;
            setScrolled(newScrolled);
            if (settleTimeoutRef.current)
              clearTimeout(settleTimeoutRef.current);
            settleTimeoutRef.current = window.setTimeout(
              updateHeaderHeight,
              350
            );
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Call onResize to ensure initial state is correct
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, []);

  // Calculate styles based on state
  const navStyles = {
    left: isLg ? "50%" : "0",
    top: scrolled ? "16px" : "0",
    width: scrolled ? (isLg ? "80%" : "100%") : "100%",
    transform: isLg ? "translateX(-50%)" : "none",
    willChange: "transform, width, top",
    transition:
      "width 360ms cubic-bezier(0.4,0,0.2,1), transform 360ms cubic-bezier(0.4,0,0.2,1), top 360ms cubic-bezier(0.4,0,0.2,1)",
  };

  return (
    <nav ref={navRef} className="fixed z-50" style={navStyles}>
      <div className="w-full rounded-2xl border-b backdrop-blur-lg text-black bg-white/40 border-white/10 transition-all duration-300 px-4 py-5 lg:py-6">
        <div className="flex items-center justify-between max-w-[1500px] mx-auto">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-1 overflow-hidden"
            aria-label="Sinnex Tech - Home"
          >
            {/* Logo Image */}
            <div
              className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 relative"
              style={{
                width: scrolled ? "47px" : "60px",
                height: scrolled ? "39px" : "55px",
              }}
            >
              <Image
                src="/images/logo.png" // replace with your logo path
                alt="Sinnex Tech Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Logo Text */}
            <div
              style={{
                transformOrigin: "left center",
                transform: scrolled ? "scaleX(0)" : "scaleX(1)",
                opacity: scrolled ? 0 : 1,
                transition:
                  "transform 350ms cubic-bezier(0.4,0,0.2,1), opacity 250ms linear",
                overflow: "hidden",
                width: "127px",
              }}
            >
              <p className="font-bold font-serif capitalize text-black text-xl">
                sinnexTech
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {["Cases", "Services", "About Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={` uppercase text-black hover:text-primary/80 transition-all duration-300 ${
                  scrolled ? "text-sm" : "text-base"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Book Call */}
            <button
              className={`flex items-center gap-2 px-6 py-2 lg:px-7 lg:py-3 rounded-3xl text-white bg-primary hover:bg-primary/80 transition-all duration-300 ${
                scrolled ? "text-sm h-10" : "text-base h-12"
              }`}
            >
              BOOK A CALL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-white"
              >
                <circle cx="10.2" cy="7.2" r="1.8" />
                <circle cx="10.2" cy="16.8" r="1.8" />
                <circle cx="15" cy="12" r="1.8" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4H14M2 8H14M2 12H14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
