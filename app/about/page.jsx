import React from "react";
import Footer from "../components/common/Footer";
import AboutHero from "../components/pages/about/AboutHero";
import StorySection from "../components/pages/about/StorySection";
import Timeline from "../components/pages/about/TimeLine";
import Script from "next/script";

/*About Page SEO Metadata*/
export const metadata = {
  title: "About | Healthcare IT Services",

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
    title: "About | Sinnex Tech",
    description:
      "Discover Sinnex Tech’s mission, vision, and journey in delivering innovative healthcare technology and digital solutions.",
    url: "https://sinnextech.com/about",
    siteName: "Sinnex Tech",
    images: [
      {
        url: "https://sinnextechnew.vercel.app/og/about.png", // place in /public/og/about.png
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
    site: "@SinnexTech",
    title: "About | Sinnex Tech",
    description:
      "Explore Sinnex Tech’s journey, values, and expertise in healthcare technology and digital solutions.",
    images: ["https://sinnextechnew.vercel.app/og/about.png"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sinnextech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://sinnextech.com/about",
    },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sinnextech.com/#organization",
      name: "Sinnex Tech",
      url: "https://sinnextech.com",
      logo: "https://sinnextech.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/sinnextech",
        "https://twitter.com/SinnexTech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sinnextech.com/#website",
      url: "https://sinnextech.com",
      name: "Sinnex Tech",
      publisher: { "@id": "https://sinnextech.com/#organization" },
    },
    // Optional FAQ section if you have Q&A on the page
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Sinnex Tech do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sinnex Tech is a healthcare technology company offering innovative IT solutions, custom software, and digital services for healthcare organizations.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Sinnex Tech located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sinnex Tech serves clients worldwide, focusing on healthcare organizations.",
          },
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
