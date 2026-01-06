import React from "react";
import Header from "../components/common/HeaderTwo";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/pages/services/ServicesHero";
import CTA from "../components/pages/home/CTA.jsx";
const page = () => {
  return (
    <>
      <main className="m-2">
        <Header />
        <ServicesHero />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default page;
