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
              isGrey ? "text-[#8d8d8d]" : ""
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
  const centralImageRef = useRef(null);

  useEffect(() => {
    if (centralImageRef.current) {
      gsap.to(centralImageRef.current, {
        filter: "grayscale(0%)",
        scale: 1.05,
        scrollTrigger: {
          trigger: centralImageRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
  }, [project]);

  if (!project)
    return <p className="text-center py-20 text-red-500">Project not found.</p>;

  // Standardized Padding Variable
  const sectionPadding = "px-4 md:px-12 lg:px-20";

  return (
    <main className="bg-[#F2F2F2] min-h-screen font-monosans">
      {/* --- BLACK HERO WRAPPER --- */}
      <div className="relative m-2 rounded-3xl md:rounded-4xl bg-[#080808] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-[120px] z-0" />
          <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-[120px] z-0" />
        </div>

        <HeaderTwo variant="dark" />

        <section
          className={`relative z-10 py-12 md:py-24 lg:py-32 ${sectionPadding}`}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center justify-between max-w-[1500px] mx-auto py-10">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw]  font-black leading-[0.85] uppercase tracking-tighter mb-8 flex flex-wrap gap-x-3 md:gap-x-4">
                {project.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={index === 0 ? "text-white" : "text-white/40"}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <div className="h-[1px] w-full bg-white/10 mb-8" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-md italic text-gray-400">
                "{project.description}"
              </p>
            </div>

            <div className="group w-full lg:w-[45%] aspect-[4/3] relative z-10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={project.gallery[0]}
                alt={project.title}
                width={700}
                height={700}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>
          </div>
        </section>
      </div>

      {/* --- LIGHT SECTION --- */}
      <section
        className={`py-12 md:py-24 lg:py-32 ${sectionPadding} text-black`}
      >
        <div className="max-w-[1500px] mx-auto">
          {/* METADATA BAR - Adjusted negative margin for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 -mt-20 md:-mt-36 lg:-mt-42 relative z-20">
            {[
              { label: "Service", val: project.service },
              { label: "Industry", val: project.industry },
              { label: "Year", val: project.year },
              { label: "View Link", val: project.title, isLink: true },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl px-5 py-4 md:px-6 md:py-5 flex justify-between items-center text-[10px] md:text-xs uppercase font-bold tracking-widest shadow-sm"
              >
                <span className="text-gray-400">{item.label}</span>
                <span className="text-black text-right truncate ml-4">
                  {item.val} {item.isLink && "↗"}
                </span>
              </div>
            ))}
          </div>

          {/* HUGE CENTRAL IMAGE */}
          <div className="mt-12 md:mt-20 w-full aspect-[4/3] md:aspect-[16/9] relative rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200">
            <Image
              ref={centralImageRef}
              src={project.img}
              alt="Main Feature"
              width={700}
              height={700}
              className="object-cover w-full h-full will-change-transform"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>

          {/* PROJECT PURPOSE */}
          <div className="mt-16 md:mt-32 grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16 items-start">
            {/*  */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
                <ParallaxSplitText className="text-black" text="Project" />
                <ParallaxSplitText text=" Purpose" isGrey={true} />
              </h2>
              <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {project.purpose}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {[
                    "Strategic Planning",
                    "Technical Execution",
                    "Visual Identity",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/40"
                    >
                      <span className="w-6 md:w-8 h-[1px] bg-primary"></span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-12">
              {[0, 0, 0].map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-[16/10] relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-black/5"
                >
                  <Image
                    src={project.gallery[0]}
                    alt={`Gallery ${idx + 1}`}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVED GOALS */}
          <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-gray-300">
            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              Achieved <span className="opacity-50"> Goals</span>
            </h2>
            <div className=" space-y-10">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Curabitur a felis neque. Sed ornare eu elit vitae lobortis.
                Donec vulputate hendrerit sodales.
              </p>
              <div className="space-y-4">
                {[
                  "Conversion uplift",
                  "Brand recognition",
                  "System scalability",
                ].map((goal, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center border-b border-gray-200 pb-3"
                  >
                    <span className="text-primary font-bold">{i + 1}.</span>
                    <span className="text-[10px] md:text-xs uppercase font-black tracking-widest">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TESTIMONIAL BLOCK */}
          <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#EAEAEA] rounded-3xl md:rounded-[2.5rem] p-5 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
              <div className="space-y-6">
                <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl md:rounded-2xl overflow-hidden grayscale">
                  <Image
                    src={project.customerimage}
                    alt="Client"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">
                  {project.customer}
                </h4>
              </div>
              <div className="pt-8 md:pt-10 border-t border-black/5">
                <p className="text-xl md:text-3xl font-medium tracking-tight leading-tight italic text-black/80">
                  "{project.customerreview}"
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-75 md:min-h-[500px] shadow-2xl group">
              <Image
                src={project.gallery[0] || project.img}
                alt="Feature Detail"
                width={500}
                height={500}
                className="object-cover w-full max-h-[700px] group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-black/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
              <h2 className="font-monosansnarrow text-[12vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-tight">
                <ParallaxSplitText className="text-black" text="Other" />
                <ParallaxSplitText text=" Projects" isGrey={true} />
              </h2>
              <Link
                href="/projects"
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group"
              >
                View All Works{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Explore Case ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
