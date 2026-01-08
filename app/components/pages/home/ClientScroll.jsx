"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your client logos
import Client1 from "../../../../public/images/client1.svg";
import Client2 from "../../../../public/images/client1.svg";
import Client3 from "../../../../public/images/client1.svg";

const clients = [Client1, Client2, Client3]; // Simplified the base array

const ClientScroll = () => {
  return (
  
    <section className="relative w-full bg-[#f4f4f4] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 overflow-hidden">

      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Section Label: Aligned exactly where the Logo/Brand starts in the header */}
          <div className="w-full lg:col-span-3 text-center lg:text-left">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-sm">✱</span> Trusted By
            </p>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">
              Strategic Partnerships <span className="hidden sm:inline">&</span> Global Clients
            </p>
          </div>

          {/* Scrolling Logos Container: Spans the rest of the header's nav width */}
          <div className="w-full lg:col-span-9 overflow-hidden relative">
            {/* Gradient Fade Overlays - Subtle enough to not break symmetry */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex gap-12 md:gap-24 items-center w-max"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 25, 
                ease: "linear" 
              }}
            >
              {/* Duplicate logos multiple times for seamless scroll */}
              {[...clients, ...clients, ...clients, ...clients].map((Client, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={Client}
                    alt={`Client logo ${idx}`}
                    width={140}
                    height={60}
                    className="object-contain h-6 md:h-8 lg:h-9 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientScroll;