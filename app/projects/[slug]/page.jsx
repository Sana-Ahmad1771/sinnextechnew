"use client";

import React, { use, useEffect, useRef } from "react";
import { projects } from "../../data/projects.js";
import HeaderTwo from "../../components/common/HeaderTwo.jsx";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../../components/common/Footer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================
    WORD BY WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 70%",
          scrub: 1.2,
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[1.05] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="relative overflow-hidden inline-block">
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-[#8d8d8d]" : "text-black"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};
export default function ProjectPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const project = projects.find((p) => p.slug === slug);
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);
  // Ref for the central image trigger
  const centralImageRef = useRef(null);

  useEffect(() => {
    if (centralImageRef.current) {
      // Animation to remove grayscale on scroll
      gsap.to(centralImageRef.current, {
        filter: "grayscale(0%)",
        scale: 1.05,
        scrollTrigger: {
          trigger: centralImageRef.current,
          start: "top 80%", // Starts turning to color when top of image hits 80% of screen
          end: "top 20%", // Fully colored and then starts fading back as it leaves
          scrub: true, // Smooth transition tied to scroll
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, [project]);
  if (!project)
    return <p className="text-center py-20 text-red-500">Project not found.</p>;

  return (
    <main className="bg-[#F2F2F2] min-h-screen font-monosans">
      {/* --- BLACK HERO WRAPPER (Header + Hero Section) --- */}
      <div className="relative m-2 rounded-4xl bg-[#080808] text-white overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0"></div>
          <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0"></div>
        </div>

        {/* Header inside the black container */}
        <HeaderTwo variant="dark" />

        {/* Hero Content */}
        <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="w-full lg:w-1/2 h-full">
              <h1 className="text-[12vw] md:text-[9rem] font-black leading-[0.8] uppercase tracking-tighter mb-12 flex flex-wrap gap-x-4">
                {project.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={index === 0 ? "opacity-100" : "opacity-40"}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <div className="h-[1px] w-full bg-white/10 mb-15" />
              <div className="flex items-end h-full">
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md italic text-gray-400">
                  "{project.description}"
                </p>
              </div>
            </div>

            <div className="group w-full lg:w-[45%] aspect-[4/3] relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={project.gallery[0]}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </section>
      </div>
      {/* --- END OF BLACK HERO WRAPPER --- */}

      {/* --- LIGHT SECTION (Metadata & Details) --- */}
      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-[1600px] mx-auto text-black">
        {/* METADATA BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-28 relative z-20">
          {[
            { label: "Service", val: project.service },

            { label: "Industry", val: project.industry },

            { label: "Year", val: project.year },

            { label: "View Link", val: project.title, isLink: true },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl px-6 py-5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase font-bold tracking-widest"
            >
              <span className="text-gray-400">{item.label}</span>

              <span className="text-black">
                {item.val} {item.isLink && "↗"}
              </span>
            </div>
          ))}
        </div>

        {/* HUGE CENTRAL IMAGE */}
        {/* HUGE CENTRAL IMAGE WITH SCROLL TRIGGERED COLOR */}
        <div className="mt-20 w-full aspect-[16/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200">
          <Image
            ref={centralImageRef}
            src={project.img}
            alt="Main Feature"
            fill
            className="object-cover will-change-transform grayscale"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>

        {/* PROJECT PURPOSE */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
          {/* LEFT SIDE: STICKY CONTENT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-tight">
              <ParallaxSplitText className=" text-black" text="Project" />
              <ParallaxSplitText text=" Purpose" isGrey={true} />
            </h2>
            <div className="mt-12 space-y-8">
              <p className="text-gray-600 leading-relaxed text-xl max-w-xl">
                {project.purpose}
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic Planning",
                  "Technical Execution",
                  "Visual Identity",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-black/40"
                  >
                    <span className="w-8 h-[1px] bg-primary"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING GALLERY */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="aspect-[16/10] relative rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={project.gallery[0]}
                alt="Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/10] relative rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={project.gallery[0]}
                alt="Gallery 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/10] relative rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={project.gallery[0]}
                alt="Gallery 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ACHIEVED GOALS */}
        <div className="mt-32 pt-16 border-t border-gray-300">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Achieved Goals
          </h2>
          <div className="space-y-5">
            <p className="text-gray-500 text-sm leading-relaxed">
              Curabitur a felis neque. Sed ornare eu elit vitae lobortis. Donec
              vulputate hendrerit sodales.
            </p>
            <div className="space-y-4">
              {[
                "Conversion uplift",
                "Brand recognition",
                "System scalability",
              ].map((goal, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-primary font-bold">{i + 1}.</span>
                  <span className="text-xs uppercase font-black tracking-widest">
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-32  grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Block: The "Emily Carter" Style Box */}
          <div className="bg-[#EAEAEA] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between min-h-[500px]">
            <div className="space-y-6">
              <div className="w-24 h-24 relative rounded-2xl overflow-hidden grayscale">
                <Image
                  src={project.customerimage}
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl mb-3 font-bold uppercase tracking-tighter">
                  {project.customer}
                </h4>
              </div>
            </div>
            <div className="pt-10 border-t border-black/5">
              <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight italic text-black/80">
                "{project.customerreview}"
              </p>
            </div>
          </div>

          {/* Right Block: The Phone/Hand Image Style */}
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] shadow-2xl group">
            <Image
              src={project.gallery[0] || project.img}
              alt="Feature Detail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-32 pt-24 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-tight">
              <ParallaxSplitText className=" text-black" text="Other" />
              <ParallaxSplitText text=" Projects" isGrey={true} />
            </h2>
            <Link
              href="/projects"
              className="text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group"
            >
              View All Works{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    Explore Case ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <Footer />
    </main>
  );
}
