// components/HeroLayout.jsx
import React from "react";
import HeaderTwo from "./../../common/HeaderTwo";
import ProjectHero from "./ProjectHero";

const HeroLayout = () => {
  return (
    <section className="relative rounded-4xl mx-auto my-2 w-[99%] bg-[#080808] overflow-hidden">
      {/* Header floats above */}
      <HeaderTwo />
      {/* Hero sits underneath */}
      <ProjectHero />
    </section>
  );
};

export default HeroLayout;
