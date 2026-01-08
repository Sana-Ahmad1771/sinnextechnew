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
        const increment = Math.random() * 2 + 0.5;
        const nextValue = Math.min(prev + increment, 100);

        if (nextValue >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
        }

        return nextValue;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Generate consistent particle data that won't change between renders
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: (i * 7.13 + 23.45) % 100, // Pseudo-random but consistent
        y: (i * 13.79 + 41.23) % 100,
        duration: 3 + (i % 3) * 0.5,
        delay: i * 0.1,
      })),
    []
  );

  if (!isVisible) return null;

  return (
    <AnimatePresence onExitComplete={() => setIsVisible(false)}>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-dark-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* --- Background Abstract Elements (Untouched Styles) --- */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0" />
            <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0" />
          </div>

          {/* Particle System */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
                initial={{
                  x: `${particle.x}vw`,
                  y: `${particle.y}vh`,
                  opacity: 0,
                }}
                animate={{
                  y: ["-10vh", "110vh"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Content Wrapper */}
          <div className="relative h-full flex flex-col justify-between p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-12 h-12 md:w-20 md:h-20">
                    <Image
                      src="/images/logo.png"
                      alt="Sinnex Tech Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <motion.h2 className="text-xl md:text-3xl text-white font-monosans font-semibold tracking-wide">
                    SinnexTech
                  </motion.h2>
                </div>

                <div className="w-full max-w-md">
                  <div className="relative h-1.5 w-48 md:w-64 bg-slate-200 rounded-full overflow-hidden">
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

            {/* Bottom Status */}
            <motion.div className="flex flex-col items-end gap-2">
              <span className="text-4xl md:text-6xl font-bold text-white font-mono">
                {Math.floor(progress)}%
              </span>
              <p className="text-[10px] md:text-xs text-gray-50">
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