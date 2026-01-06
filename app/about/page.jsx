import React from "react";
import Header from "../components/common/HeaderTwo";
import Footer from "../components/common/Footer";
import AboutHero from "../components/pages/about/AboutHero";
import StorySection from "../components/pages/about/StorySection";
import Timeline from "../components/pages/about/TimeLine";

const page = () => {
  return (
    <>
      <main className="m-2 ">
        <Header />
        <AboutHero />
      </main>
      <StorySection />
      <Timeline />
      <Footer />
    </>
  );
};

export default page;
