import React from "react";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/pages/services/ServicesHero";
import CTA from "../components/pages/home/CTA.jsx";

export const metadata = {
  title: "Services | Healthcare IT Services | Sinnex Tech",

  description:
    "Sinnex Tech provides healthcare IT services including custom software development, digital transformation, system integration, and secure healthcare solutions.",

  keywords: [
    "Sinnex Tech services",
    "healthcare IT services",
    "medical software development",
    "digital healthcare solutions",
    "healthcare web development",
    "custom healthcare software",
    "health tech consulting",
  ],

  alternates: {
    canonical: "https://sinnextech.com/services",
  },

  /* Open Graph */
  openGraph: {
    title: "Healthcare IT Services | Sinnex Tech",
    description:
      "Discover Sinnex Tech’s healthcare IT services designed to modernize healthcare operations and improve patient outcomes.",
    url: "https://sinnextech.com/services",
    siteName: "Sinnex Tech",
    images: [
      {
        url: "https://sinnextechnew.vercel.app/public/og/services.png",// /public/og/services.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech Healthcare IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Healthcare IT Services | Sinnex Tech",
    description:
      "Explore healthcare IT services, medical software solutions, and digital healthcare innovation by Sinnex Tech.",
    images: ["/og/services.png"],
  },
};


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
