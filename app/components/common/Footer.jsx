"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Animation Variants for the Social Icons ---
  const iconSlideVariants = {
    initial: { y: 0 },
    hover: { y: -40 },
  };

  const iconSlideVariants2 = {
    initial: { y: 40 },
    hover: { y: 0 },
  };

  const socialLinks = [
    { id: "ig", icon: <IoLogoInstagram size={20} />, url: "#" },
    { id: "li", icon: <RiLinkedinFill size={20} />, url: "#" },
    { id: "tw", icon: <IoLogoTwitter size={20} />, url: "#" },
    { id: "fb", icon: <RiFacebookFill size={20} />, url: "#" },
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="w-full font-monosans bg-white overflow-hidden">
      {/* --- 1. WHITE TOP SECTION --- */}
      <div className="px-6 md:px-12 lg:px-20 pt-24 pb-20 bg-white relative">
        {/* Ghost Text Background - Positioned behind everything */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
          <span className="text-[15vw] font-black text-black opacity-[0.03] leading-none uppercase tracking-tighter">
            SINNEXTECH
          </span>
        </div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Column 1: Branding & Socials */}
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-8">
                <a href="/" className="flex items-center gap-2 group w-fit">
                  <div className="relative border-2 border-black rounded-sm px-3 py-1 group-hover:bg-black transition-colors duration-300 flex items-center justify-center">
                    <div className="relative w-10 h-9">
                      <Image
                        src="/images/logo.png"
                        alt="SINNEXTech Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <span className="font-bold text-black tracking-widest uppercase text-[10px] md:text-sm">
                    SINNEXTech®
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      initial="initial"
                      whileHover="hover"
                      className="relative w-11 h-11 overflow-hidden bg-black rounded-full flex items-center justify-center group"
                    >
                      <div className="relative h-5 w-5 overflow-hidden">
                        <motion.div
                          variants={iconSlideVariants}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute inset-0 flex items-center justify-center text-white"
                        >
                          {social.icon}
                        </motion.div>
                        <motion.div
                          variants={iconSlideVariants2}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute inset-0 flex items-center justify-center text-white"
                        >
                          {social.icon}
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                <p>
                  No. 347 Office, M.Dubia Tower,
                  <br />
                  Khanna Pul, Islamabad, Pakistan
                </p>
                <div className="pt-2 flex flex-col gap-1">
                  <a
                    href="tel:+923000000000"
                    className="text-black font-bold hover:underline"
                  >
                    P: +92 (3XX) XXX-XXXX
                  </a>
                  <a
                    href="mailto:hello@sinnextech.com"
                    className="text-black font-bold hover:underline "
                  >
                    E: HELLO@SINNEXTECH.COM
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Pill */}
            <div className="lg:col-span-4 flex justify-start lg:justify-center">
              <div className="flex flex-col gap-6 w-full lg:w-fit">
                <span className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black block">
                  Navigation
                </span>
                <div className="flex  gap-2 bg-black p-3 rounded-4xl border border-black/5 shadow-2xl shadow-black/20">
                  {footerLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-black hover:bg-white transition-all duration-300 text-center"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: CTA Section */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between lg:min-h-[350px]">
              <div className="flex items-center gap-2 mb-8 lg:mb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Driven By Design
                </span>
                <span className="w-8 h-[1px] bg-gray-200"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  SINNEX
                </span>
              </div>

              <div className="space-y-6 flex flex-col items-start lg:items-end w-full">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold lg:text-right">
                  Ready to elevate your <br /> digital presence?
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 md:gap-10">
                  <a
                    href="/about"
                    className="group relative max-w-3xl flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                      ✦
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. BLACK BOTTOM DOCK --- */}
      <div className="bg-[#080808] rounded-t-4xl px-6 md:px-12 lg:px-20 py-10 text-white relative z-20">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <span className="text-gray-400">© {currentYear} SINNEXTECH</span>
            <p className="flex gap-2">
              Powered by <span className="text-white">SinnexTech</span>
            </p>
            <p className="flex gap-2">
              Created by <span className="text-white">Flowaze</span>
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-6 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              {["Style Guide", "Licenses", "Changelog"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-6 py-3 rounded-full transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Top
              </span>
              <span className="text-lg group-hover:-translate-y-1 transition-transform italic">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
