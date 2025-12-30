"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Randomized progress for a "natural" feel
        const increment = Math.random() * 2 + 0.5;
        const nextValue = Math.min(prev + increment, 100);

        if (nextValue >= 100) {
          clearInterval(interval);
          // Start the exit sequence
          setTimeout(() => setIsExiting(true), 500);
        }
        return nextValue;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Memoize particles so they don't regenerate every frame
  const particles = useMemo(() => [...Array(15)], []);

  if (!isVisible) return null;

  return (
    <AnimatePresence
      onExitComplete={() => setIsVisible(false)} // Removes component from DOM after exit
    >
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-dark-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }} // Slight slide up on exit
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* --- Background Abstract Elements (Simulation) --- */}

          {/* You would replace these divs with actual 3D rendered images using next/image if you have them */}

          <div className="absolute inset-0 pointer-events-none select-none">
            {/* Left dark block simulation */}
            <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0"></div>
            {/* Right dark block simulation */}
            <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0"></div>
          </div>
          {/* Background Gradient */}
          <motion.div className="absolute inset-0" />

          {/* Particle System */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
                initial={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: 0,
                }}
                animate={{
                  y: ["-10vh", "110vh"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="relative h-full flex flex-col justify-between p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/logo.png"
                    alt="Sinnex Tech Logo"
                    width={80}
                    height={80}
                    priority // Critical for preloader performance
                    className="object-contain"
                  />
                  <motion.h2 className="text-3xl text-white font-serif font-semibold tracking-wide">
                    SinnexTech
                  </motion.h2>
                </div>

                <div className="w-full max-w-md">
                  <div className="relative h-1.5 w-64 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className="flex flex-col items-end gap-2">
              <span className="text-6xl font-bold text-white font-mono">
                {Math.floor(progress)}%
              </span>
              <p className="text-xs text-gray-50">
                © {new Date().getFullYear()} Sinnex Technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
