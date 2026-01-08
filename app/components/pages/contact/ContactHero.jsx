"use client";

import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ClientOnly from "./ClientOnly";

const ContactHero = () => {
  // ===============================
  // Form State
  // ===============================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ===============================
  // Handlers
  // ===============================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form Submitted:", formData);

    // Optional: reset form
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative m-2 overflow-hidden rounded-4xl bg-[#080808] text-white py-10 md:py-24 lg:pt-32 px-4 md:px-12 lg:px-20 font-monosans min-h-screen">
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-[120px] z-0" />
        <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-[120px] z-0" />
      </div>

      <section className="relative z-10 w-full max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start lg:items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex gap-2">
              <span>✱</span> Contact Us
            </p>
            <h1 className="font-monosansnarrow text-[12vw] md:text-[8.5rem] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-wide">
              <span className="block">Start</span>
              <span className="opacity-40 block">Project.</span>
            </h1>
          </div>
          <div className="w-full lg:col-span-4 border-l border-white/10 pl-6">
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest leading-relaxed max-w-xs">
              Directing digital evolution through{" "}
              <span className="text-white">strategic</span> design.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="group border-b border-white/5 pb-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@sinnextech.com"
                  className="group text-xl md:text-3xl font-monosansnarrow uppercase font-bold flex items-center justify-between hover:text-primary transition-colors"
                >
                  hello@SinnexTech.com
                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>

              <div className="group border-b border-white/5 pb-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  Software House
                </p>
                <p className="text-xl md:text-3xl font-monosansnarrow uppercase font-bold leading-tight">
                  No. 347 Office, M.Dubia Tower,
                  <br />
                  Khanna Pul, Islamabad, Pakistan
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Behance
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            <ClientOnly>
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest"
                    />
                    {errors.name && (
                      <p className="text-[9px] uppercase tracking-widest text-red-400 mt-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest"
                    />
                    {errors.email && (
                      <p className="text-[9px] uppercase tracking-widest text-red-400 mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-xs uppercase tracking-widest resize-none"
                  />
                  {errors.message && (
                    <p className="text-[9px] uppercase tracking-widest text-red-400 mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-500"
                >
                  <span className="relative z-10">Send Message</span>
                  <FiArrowUpRight className="relative z-10 text-lg group-hover:rotate-45 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </ClientOnly>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactHero;
