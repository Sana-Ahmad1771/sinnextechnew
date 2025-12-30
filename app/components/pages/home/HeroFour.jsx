"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

function HorizontalSlider({ images, direction = "left", speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  const imageList = [...images, ...images];

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex items-center"
        style={{ willChange: "transform" }}
        animate={{ x: direction === "left" ? [0, -distance] : [-distance, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {imageList.map((img, idx) => (
          <div key={idx} className="mx-1 sm:mx-2 flex-shrink-0">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 xl:w-72 xl:h-80">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Vertical Parallax Column =================
function ParallaxColumn({
  images,
  direction = "up",
  speed = 20,
  scrollDirection,
  columnIndex,
}) {
  const controls = useAnimation();
  const imageList = [...images, ...images];
  const prevScrollDirection = useRef("down");

  useEffect(() => {
    const animateColumn = async () => {
      if (prevScrollDirection.current !== scrollDirection) {
        // Smoothly reverse direction with a gentle ease
        if (scrollDirection === "down") {
          await controls.start({
            y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
              duration: speed,
              ease: [0.25, 0.46, 0.45, 0.94], // Nice smooth easing
            },
          });
        } else {
          await controls.start({
            y: direction === "up" ? ["-50%", "0%"] : ["0%", "-50%"],
            transition: {
              duration: speed,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          });
        }

        // Then start the infinite animation
        controls.start({
          y:
            scrollDirection === "down"
              ? direction === "up"
                ? ["0%", "-50%"]
                : ["-50%", "0%"]
              : direction === "up"
              ? ["-50%", "0%"]
              : ["0%", "-50%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        });
      } else {
        // Continue with current animation
        controls.start({
          y:
            scrollDirection === "down"
              ? direction === "up"
                ? ["0%", "-50%"]
                : ["-50%", "0%"]
              : direction === "up"
              ? ["-50%", "0%"]
              : ["0%", "-50%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        });
      }

      prevScrollDirection.current = scrollDirection;
    };

    animateColumn();
  }, [scrollDirection, direction, speed, controls]);

  // Add slight delay to each column for a wave effect
  const columnDelay = columnIndex * 0.5;

  return (
    <motion.div
      className="flex flex-col overflow-hidden relative w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: columnDelay, ease: "easeOut" }}
    >
      <motion.div className="flex flex-col" animate={controls}>
        {imageList.map((img, idx) => (
          <motion.div
            key={idx}
            className="mb-4 flex-shrink-0 relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ================= Images =================
const images1 = [
  { src: "/images/project.png", alt: "Design" },
  { src: "/images/project.png", alt: "Studio" },
  { src: "/images/project.png", alt: "Yoga" },
  { src: "/images/project.png", alt: "Bag" },
  { src: "/images/project.png", alt: "Education" },
  { src: "/images/project.png", alt: "Collaboration" },
];

const images2 = [
  { src: "/images/project.png", alt: "Design" },
  { src: "/images/project.png", alt: "Studio" },
  { src: "/images/project.png", alt: "Yoga" },
  { src: "/images/project.png", alt: "Bag" },
  { src: "/images/project.png", alt: "Education" },
  { src: "/images/project.png", alt: "Collaboration" },
];

const images3 = [
  { src: "/images/project.png", alt: "Design" },
  { src: "/images/project.png", alt: "Studio" },
  { src: "/images/project.png", alt: "Yoga" },
  { src: "/images/project.png", alt: "Bag" },
  { src: "/images/project.png", alt: "Education" },
  { src: "/images/project.png", alt: "Collaboration" },
];

// ================= Hero Section =================
// ... (Keep HorizontalSlider, ParallaxColumn, and images constants as they are)

const HeroFour = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isInView, setIsInView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const sectionRef = useRef(null);


  // ... (Keep the useEffect for scroll handling)

  const getColumnDirection = (columnIndex) => {
    if (!hasScrolled) return columnIndex === 1 ? "down" : "up";
    if (scrollDirection === "up" && isInView)
      return columnIndex === 1 ? "up" : "down";
    return columnIndex === 1 ? "down" : "up";
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-secondary flex items-center"
    >
      {/* 1. PARALLAX BACKGROUND LAYER 
          This is moved up in the DOM so it sits behind by default, 
          but we use z-0 to be safe.
      */}
      <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[120%] z-0 hidden lg:block">
        <motion.div
          className="flex justify-center gap-6 h-full"
          initial={{ rotate: 12, scale: 1.1 }} // Rotation applied here
          style={{ transformOrigin: "center center" }}
        >
          <ParallaxColumn
            images={images1}
            direction={getColumnDirection(0)}
            speed={40}
            scrollDirection={scrollDirection}
            columnIndex={0}
          />
          <ParallaxColumn
            images={images2}
            direction={getColumnDirection(1)}
            speed={35}
            scrollDirection={scrollDirection}
            columnIndex={1}
          />
          <ParallaxColumn
            images={images3}
            direction={getColumnDirection(2)}
            speed={45}
            scrollDirection={scrollDirection}
            columnIndex={2}
          />
        </motion.div>

        {/* Subtle overlay to fade the images as they go behind content */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="lg:flex items-center">
          {/* 2. LEFT CONTENT 
              Added bg-primary and padding to "hide" the images behind it.
          */}
          <motion.div
            className="lg:w-[60%] space-y-8 py-20 backdrop-blur-md bg-white/20 p-4 rounded-[32px] border border-white/30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-6xl text-dark-black">
              {/* Heading 1: Moves RIGHT on scroll */}
              <motion.h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight">
                Empowering
              </motion.h1>

              {/* Heading 2: Moves LEFT on scroll */}
              <motion.h1 className="text-5xl font-serif md:text-[110px] font-medium leading-[1.1] tracking-tight whitespace-nowrap">
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
          </motion.div>

          {/* 3. MOBILE VIEW 
          */}
          <div className="lg:hidden w-full mt-10">
            <HorizontalSlider images={images1} direction="left" speed={25} />
            <HorizontalSlider images={images3} direction="right" speed={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFour;
