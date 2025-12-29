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
    <section className="py-10 xl:mx-10 lg:mx-5 mx-2.5 bg-white">
      <div className="flex flex-col lg:flex-row items-center xl:max-w-[1440px] xl:mx-auto px-5 lg:px-10 2xl:px-0">
        {/* Section Title */}
        <h2 className="text-[#b4b4b4] text-xl font-bold font-roboto text-center mb-8">
          Trusted by Clients
        </h2>

        {/* Scrolling Logos */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-20"
            animate={{ x: ["0%", "-100%"] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {Array(2) // Duplicate logos for seamless scroll
              .fill(clients)
              .flat()
              .map((Client, idx) => (
                <div key={idx} className="shrink-0 ">
                  <Image
                    src={Client}
                    alt={`Client ${idx + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientScroll;
