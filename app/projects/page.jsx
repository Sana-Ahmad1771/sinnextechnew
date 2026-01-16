import AllProjectsCards from "../components/pages/Projects/AllProjectsCards.jsx";
import Footer from "../components/common/Footer.jsx";
import CTA from "../components/pages/home/CTA.jsx";
import HeroLayout from "../components/pages/Projects/HeroLayout.jsx";
import Script from "next/script";

/* Projects Page SEO Metadata */
export const metadata = {
  title: "Projects | Healthcare IT Services",

  description:
    "Explore Sinnex Tech projects showcasing healthcare technology, custom software development, digital transformation, and innovative IT solutions.",

  keywords: [
    "Sinnex Tech projects",
    "healthcare technology projects",
    "medical software projects",
    "healthcare IT case studies",
    "digital healthcare solutions",
    "custom software development projects",
    "health tech portfolio",
  ],

  alternates: {
    canonical: "https://sinnextech.com/projects",
  },

  /*  Open Graph */
  openGraph: {
    title: "Projects | Sinnex Tech Healthcare & Digital Solutions",
    description:
      "View Sinnex Tech’s portfolio of healthcare technology and digital transformation projects delivered for global clients.",
    url: "https://sinnextech.com/projects",
    siteName: "Sinnex Tech",
    images: [
      {
        url: "https://sinnextechnew.vercel.app/og/projects.png", // /public/og/projects.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    site: "@SinnexTech",
    title: "Projects | Sinnex Tech Healthcare & Digital Solutions",
    description:
      "Discover Sinnex Tech’s healthcare and digital technology projects, including custom software and IT solutions.",
    images: ["https://sinnextechnew.vercel.app/og/projects.png"],
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
      name: "Projects",
      item: "https://sinnextech.com/projects",
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
      "@type": "CollectionPage",
      "@id": "https://sinnextech.com/projects/#projects",
      name: "Projects",
      description:
        "A portfolio of Sinnex Tech projects showcasing healthcare technology, custom software, digital transformation, and innovative IT solutions.",
      url: "https://sinnextech.com/projects",
      mainEntityOfPage: { "@id": "https://sinnextech.com/#website" },
    },
  ],
};

const Page = () => {
  return (
    <div className="bg-[#f3f3f3]">
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroLayout />
      <AllProjectsCards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
