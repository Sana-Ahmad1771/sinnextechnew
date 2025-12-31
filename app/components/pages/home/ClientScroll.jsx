"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your client logos
import Client1 from "@/public/images/client1.svg";
import Client2 from "@/public/images/client2.svg";
import Client3 from "@/public/images/client3.svg";

const clients = [Client1, Client2, Client3, Client1, Client2, Client3];

const ClientScroll = () => {
  return (
    <section className="relative w-full bg-[#f4f4f4] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Section Label - Matches the "ABOUT US" style from your reference */}
          <div className="lg:col-span-3">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> TRUSTED BY
            </h2>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">
              Strategic Partnerships & Global Clients
            </p>
          </div>

          {/* Scrolling Logos Container */}
          <div className="lg:col-span-9 overflow-hidden relative">
            {/* Gradient Fade Overlays for a high-end look */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex gap-24 items-center"
              animate={{ x: ["0%", "-50%"] }} // Adjusted to -50% to match the duplicated array length
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {/* Duplicate logos for seamless scroll */}
              {[...clients, ...clients].map((Client, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={Client}
                    alt={`Client ${idx + 1}`}
                    width={140}
                    height={60}
                    className="object-contain max-h-8 w-auto"
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
