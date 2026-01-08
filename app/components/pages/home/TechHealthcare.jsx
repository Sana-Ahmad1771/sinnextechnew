"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const TechHealthcare = () => {
  /* ===========================
     Scroll-based parallax logic
  ============================ */
  const { scrollYProgress } = useScroll();

  // Row 1 → LEFT
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  // Row 2 → RIGHT
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  /* ===========================
     Animation variants
  ============================ */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto ">
        {/* ===========================
           Header Content
        ============================ */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4 block"
            >
              Innovation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-medium leading-[1.1] text-slate-900"
            >
              Where technology meets healthcare
            </motion.h2>
          </div>

          <div className="lg:w-[40%]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              SinnexTech transforms how healthcare organizations connect with
              patients and streamline operations. We design systems that work as
              hard as the people who use them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <button className="flex items-center gap-2 text-black border-b border-black pb-1 hover:opacity-70 transition">
                Learn More <BsArrowUpRight />
              </button>

              <button className="flex items-center gap-2 text-black border-b border-black pb-1 hover:opacity-70 transition">
                Our Work <BsArrowUpRight />
              </button>
            </motion.div>
          </div>
        </div>

        {/* ===========================
           Parallax Image Grid
        ============================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {/* ---------- ROW 1 (LEFT) ---------- */}
          <motion.div
            style={{ x: xLeft }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="aspect-square rounded-xl relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src="/images/project.png"
                  alt="Project Preview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <BsArrowRight className="-rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ---------- ROW 2 (RIGHT) ---------- */}
          <motion.div
            style={{ x: xRight }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="aspect-square rounded-xl relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src="/images/project.png"
                  alt="Project Preview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <BsArrowRight className="-rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechHealthcare;
