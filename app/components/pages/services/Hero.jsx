"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero.png";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const services = [
    "Web Development",
    "Branding",
    "Digital Marketing",
    "SEO Optimization",
    "Content Creation",
    "UI/UX Design",
    "Mobile App Development",
    "Analytics & Reporting",
  ];

  return (
    <>
      <section className="xl:mx-10 lg:mx-5 mx-2.5 bg-gradient-to-b from-[#8974EB66] to-[#8974EB00] rounded-[20px]">
        <div className="xl:max-w-[1440px] xl:mx-auto px-5 lg:px-10 2xl:px-0 grid lg:grid-cols-2 justify-between">
          <motion.div
            className="mt-20 xl:mt-40 xl:px-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Infinite Pills Carousel */}
            <div className="relative w-full max-w-xl overflow-hidden">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...services, ...services].map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-2xl backdrop-blur-lg text-black bg-white/40 border-white/10 whitespace-nowrap text-base font-medium"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            <h1 className="text-black text-[42px] md:text-[56px] font-serif font-medium font-poppins leading-[46.17px] md:leading-[61.58px] ">
              Empowering
            </h1>
            <h1 className="text-black text-[42px] md:text-[120px] font-medium font-poppins leading-tight md:leading-[130px]">
              Healthcare Brands
            </h1>
            <p className="text-black text-base font-normal font-roboto mt-4 xl:w-[55%] lg:w-[75%]">
              Transforming healthcare facilities with tailored digital solutions
              for branding, web development, and digital presence.
            </p>
            <div className="lg:mt-9 mt-7 flex flex-wrap justify-center sm:justify-normal items-center gap-6">
              <motion.button
                className="h-[39px] bg-primary rounded-lg text-white text-base font-normal font-roboto px-2.5 flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get a Free Consultation
              </motion.button>
              <motion.div
                className="flex items-center gap-2 text-black text-base font-normal font-roboto mt-5 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Our Work <BsArrowUpRight />
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={HeroImage} alt="Hero Image" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
