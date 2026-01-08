"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="w-full font-monosans bg-[#fefefe] overflow-hidden">
      {/* --- 1. WHITE TOP SECTION --- */}
      <div className="py-10 md:py-18 lg:py-20 px-4 md:px-12 lg:px-20 relative">
        {/* Ghost Text Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
          <span className="text-[18vw] md:text-[15vw] font-black text-black opacity-[0.03] leading-none uppercase tracking-tighter block">
            SINNEXTECH
          </span>
        </div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* Responsive Grid: 
              - Mobile: 1 column
              - Tablet (md): 2 columns (Branding left, CTA right, Nav below)
              - Desktop (lg): 12-column grid
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-y-20 lg:gap-16 items-start">
            {/* Column 1: Branding & Socials */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <a href="/" className="flex items-center gap-2 group w-fit">
                  <div className="relative border-2 border-black rounded-sm px-2 py-1 group-hover:bg-black transition-colors duration-300">
                    <div className="relative w-8 h-7 md:w-10 md:h-9">
                      <Image
                        src="/images/logo.png"
                        alt="SINNEXTech Logo"
                        width={200}
                        height={200}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <span className="font-bold text-black tracking-widest uppercase text-xs md:text-sm">
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
                      className="relative w-10 h-10 overflow-hidden bg-black rounded-full flex items-center justify-center group"
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
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+923000000000"
                    className="text-black font-bold hover:text-primary transition-colors"
                  >
                    P: +92 (3XX) XXX-XXXX
                  </a>
                  <a
                    href="mailto:hello@sinnextech.com"
                    className="text-black font-bold hover:text-primary transition-colors uppercase"
                  >
                    E: hello@sinnextech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Pill (Full width on md, Center on lg) */}
            <div className="md:col-span-2 lg:col-span-5 flex justify-start lg:justify-center order-3 lg:order-2">
              <div className="flex flex-col gap-6 w-full">
                <span className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black">
                  Navigation
                </span>
                <div className="flex flex-wrap gap-2 bg-black p-2 md:p-3 rounded-2xl border border-black/5 shadow-xl">
                  {footerLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex-1 min-w-[90px] px-4 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-black hover:bg-white transition-all duration-300 text-center"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: CTA Section (Aligned right on md/lg) */}
            <div className="lg:col-span-4 flex flex-col items-start md:items-end justify-between md:min-h-[220px] lg:min-h-[300px] order-2 lg:order-3">
              <div className="flex items-center gap-2 mb-8 md:mb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Driven By Design
                </span>
                <span className="w-8 h-[1px] bg-gray-200"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  SINNEX
                </span>
              </div>

              <div className="space-y-6 flex flex-col items-start md:items-end w-full">
                <p className="text-gray-400 text-[10px] md:text-[11px] uppercase tracking-widest font-bold md:text-right leading-relaxed">
                  Ready to elevate your <br className="hidden md:block" />{" "}
                  digital presence?
                </p>
                <a
                  href="/contact"
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[13px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
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

      {/* --- 2. BLACK BOTTOM DOCK --- */}
      <div className="bg-[#080808] rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] px-6 md:px-12 lg:px-20 py-8 md:py-10 text-white relative z-20">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center md:text-left">
            <span className="text-gray-400 w-full md:w-auto mb-1 md:mb-0">
              © {currentYear} SINNEXTECH
            </span>
            <p className="flex gap-2">
              Powered by <span className="text-white">SinnexTech</span>
            </p>
            <p className="flex gap-2 border-l border-white/10 pl-4">
              Created by <span className="text-white">Dev Team</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              {["Licenses", "Changelog"].map((item) => (
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
              className="group flex items-center gap-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-5 py-2.5 rounded-full transition-all duration-500"
            >
              <span className="text-[9px] uppercase tracking-widest font-bold">
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
