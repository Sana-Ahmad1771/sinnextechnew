// components/HeroLayout.jsx
import React from "react";
// import HeaderTwo from "./../../common/HeaderTwo";
import HeroSix from "./HeroSix";

const HeroLayout = () => {
  return (
    <section className="relative rounded-4xl mx-auto my-2 w-[99%] md:h-screen h-[70vh] bg-[#080808] overflow-hidden">
      {/* Header floats above */}
      {/* <HeaderTwo /> */}
      {/* Hero sits underneath */}
      <HeroSix />
    </section>
  );
};

export default HeroLayout;
