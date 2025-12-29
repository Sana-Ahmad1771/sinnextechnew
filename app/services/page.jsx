import React from "react";
import Hero from "../components/pages/services/Hero.jsx";
import Header from "../components/common/Header.jsx";
import ClientScroll from "../components/pages/home/ClientScroll";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <ClientScroll />
    </>
  );
};

export default page;
