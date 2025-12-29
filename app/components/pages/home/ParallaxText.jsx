"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxText = ({ text = "Services" }) => {
  const ref = useRef(null);

  // Track scroll position of this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <strong className="text-6xl md:text-8xl font-bold uppercase flex gap-1">
        {text.split("").map((char, index) => {
          // Each letter moves at a different speed
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, index % 2 === 0 ? -80 : -40]
          );

          return (
            <motion.span
              key={index}
              style={{ y }}
              className="inline-block"
            >
              {char}
            </motion.span>
          );
        })}
      </strong>
    </div>
  );
};

export default ParallaxText;
