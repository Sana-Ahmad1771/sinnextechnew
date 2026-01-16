import React from "react";
import Footer from "../components/common/Footer";
import AboutHero from "../components/pages/about/AboutHero";
import StorySection from "../components/pages/about/StorySection";
import Timeline from "../components/pages/about/TimeLine";

/*About Page SEO Metadata*/
export const metadata = {
  title: "About Sinnex Tech | Healthcare Technology & Innovation",

  description:
    "Learn about Sinnex Tech — a healthcare technology company focused on innovation, digital transformation, and reliable IT solutions for the healthcare industry.",

  keywords: [
    "About Sinnex Tech",
    "healthcare technology company",
    "health tech innovation",
    "healthcare IT experts",
    "medical software company",
    "digital healthcare solutions",
    "healthcare technology services",
  ],

  alternates: {
    canonical: "https://sinnextech.com/about",
  },

  /* Open Graph */
  openGraph: {
    title: "About Sinnex Tech | Healthcare Technology & Innovation",
    description:
      "Discover Sinnex Tech’s mission, vision, and journey in delivering innovative healthcare technology and digital solutions.",
    url: "https://sinnextech.com/about",
    siteName: "Sinnex Tech",
    images: [
      {
       url: "https://sinnextechnew.vercel.app/public/og/about.png",// place in /public/og/about.png
        width: 1200,
        height: 630,
        alt: "About Sinnex Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "About Sinnex Tech | Healthcare Technology & Innovation",
    description:
      "Explore Sinnex Tech’s journey, values, and expertise in healthcare technology and digital solutions.",
    images: ["/og/about.png"],
  },
};

const page = () => {
  return (
    <>
      <main className="m-2 ">
        <AboutHero />
      </main>
      <StorySection />
      <Timeline />
      <Footer />
    </>
  );
};

export default page;
