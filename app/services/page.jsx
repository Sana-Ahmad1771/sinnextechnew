import React from "react";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/pages/services/ServicesHero";
import CTA from "../components/pages/home/CTA.jsx";
const page = () => {
  return (
    <div>
      <main className="m-2">
        <ServicesHero />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
