"use client";
import ProjectHero from "../components/pages/Projects/ProjectHero";
import HeaderTwo from "../components/common/HeaderTwo.jsx";
import AllProjectsCards from "../components/pages/Projects/AllProjectsCards.jsx";
import Footer from "../components/common/Footer.jsx";
import CTA from "../components/pages/home/CTA.jsx";
import HeroLayout from "../components/pages/Projects/HeroLayout.jsx";

const Page = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <HeroLayout />
      <AllProjectsCards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
