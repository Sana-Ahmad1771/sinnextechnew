import React from "react";
import Footer from "../components/common/Footer";
// import Header from "../components/common/HeaderTwo";
import ContactHero from "../components/pages/contact/ContactHero";

const page = () => {
  return (
    <div className="bg-[#fefefe]">
      {/* <Header /> */}
      <main className="m-2">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
};

export default page;
