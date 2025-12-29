import React from "react";
import HeroThree from "../components/pages/about/HeroThree.jsx";
import ClientScroll from "../components/pages/home/ClientScroll.jsx";
import Header from "../components/common/Header.jsx";
const page = () => {
  return (
    <>
      <Header />
      <HeroThree />
      <ClientScroll />
    </>
  );
};

export default page;
