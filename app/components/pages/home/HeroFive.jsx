"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroFive() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const images = [
    "images/project2.png",
    "images/project.png",
    "images/project2.png",
     "images/project.png", 
    "video/video-4.mp4", // Center image (Index 4)
    "images/project.png", 
    "images/project2.png",
    "images/project.png",
    "images/project2.png",
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".image-grid", {
        scale: 4, // Zooms into the center
        duration: 2,
        ease: "power1.inOut",
      })
        .to(
          ".grid-item:not(.main-img)",
          {
            opacity: 0,
            duration: 0.5,
          },
          "<"
        ) // Start fading others while zooming
        .to(
          ".hero-content",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            pointerEvents: "all",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert(); // Clean cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-10 bg-secondary w-full h-screen overflow-hidden"
    >
      {/* Grid Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="image-grid grid grid-cols-3 grid-rows-3 gap-4 w-[120vw] h-[120vh] transform origin-center">
          {images.map((src, idx) => {
            const isVideo = src.endsWith(".mp4");
            const isCenter = idx === 4;

            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-lg grid-item ${
                  isCenter ? "main-img" : ""
                }`}
              >
                {isVideo ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white opacity-0 translate-y-12 pointer-events-none px-4">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
          THE NEW COLLECTION
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Experience luxury through a new lens. Our latest designs are crafted
          for the bold.
        </p>
        <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}
