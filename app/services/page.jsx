import React from "react";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/pages/services/ServicesHero";
import CTA from "../components/pages/home/CTA.jsx";
import Script from "next/script";

export const metadata = {
  title: "Services | Healthcare IT Services",

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
        url: "https://sinnextechnew.vercel.app/og/services.png", // /public/og/services.png
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
    site: "@SinnexTech",
    title: "Healthcare IT Services | Sinnex Tech",
    description:
      "Explore healthcare IT services, medical software solutions, and digital healthcare innovation by Sinnex Tech.",
    images: ["https://sinnextechnew.vercel.app/og/services.png"],
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
      name: "Services",
      item: "https://sinnextech.com/services",
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
    {
      "@type": "Service",
      name: "Healthcare IT Services",
      provider: { "@id": "https://sinnextech.com/#organization" },
      description:
        "Sinnex Tech provides healthcare IT services including custom software development, digital transformation, system integration, and secure healthcare solutions.",
      serviceType: "Healthcare IT Solutions",
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare organizations and providers",
      },
    },
  ],
};

const page = () => {
  return (
    <div>
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="m-2">
        <ServicesHero />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
