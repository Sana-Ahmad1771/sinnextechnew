"use client";

import React, { use } from "react";
import { projects } from "../../data/projects.js";
import HeaderTwo from "../../components/common/HeaderTwo.jsx";
import Image from "next/image";
import Link from "next/link"; // Added for navigation
import { FiArrowRight } from "react-icons/fi"; // Optional icon for the button
import Footer from "../../components/common/Footer.jsx";

export default function ProjectPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const project = projects.find((p) => p.slug === slug);

  // Filter out the current project to show "Other Projects"
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  if (!project)
    return <p className="text-center py-20 text-red-500">Project not found.</p>;

  return (
    <main className="bg-[#F2F2F2] min-h-screen font-monosans text-black">
      <HeaderTwo variant="light" />
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1600px] mx-auto">
        {/* TOP SECTION: Title and Main Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[15vw] md:text-[10rem] font-black leading-[0.8] uppercase tracking-tighter mb-12">
              {project.title}
            </h1>
            <div className="h-[1px] w-full bg-gray-300 mb-12" />
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md italic text-gray-600">
              "{project.description}"
            </p>
          </div>

          <div className="w-full lg:w-[45%] aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* METADATA BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { label: "Service", val: project.service },
            { label: "Industry", val: project.industry },
            { label: "Year", val: project.year },
            { label: "View Link", val: project.title, isLink: true },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase font-bold tracking-widest"
            >
              <span className="text-gray-400">{item.label}</span>
              <span className="text-black">
                {item.val} {item.isLink && "↗"}
              </span>
            </div>
          ))}
        </div>

        {/* HUGE CENTRAL IMAGE */}
        <div className="mt-12 w-full aspect-[16/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <Image
            src={project.img}
            alt="Main Feature"
            fill
            className="object-cover"
          />
        </div>

        {/* PROJECT PURPOSE SECTION */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Project Purpose
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {project.purpose}
            </p>
            <ul className="space-y-2 text-sm font-bold uppercase tracking-widest text-black">
              <li>• Sed quis tortor at leo por</li>
              <li>• Mauris placerat feugiat</li>
              <li>• Nam pharetra sodales</li>
            </ul>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="aspect-[16/10] relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={project.gallery[1]}
                alt="Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/10] relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={project.gallery[2]}
                alt="Gallery 2"
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
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-gray-500 text-sm leading-relaxed">
              Curabitur a felis neque. Sed ornare eu elit vitae lobortis. Donec
              vulputate hendrerit sodales. Quisque eget volutpat mauris.
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

        {/* --- ADDED: OTHER PROJECTS NAVIGATION --- */}
        <div className="mt-32 pt-24 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Other <br /> <span className="text-gray-400">Projects</span>
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
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
        {/* --- END OF ADDED SECTION --- */}
      
      </section>
        <Footer />
    </main>
  );
}
