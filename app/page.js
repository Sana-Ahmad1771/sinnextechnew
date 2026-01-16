import Script from "next/script";
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import HeroLayout from "./components/pages/home/HeroLayout.jsx";
import HighTec from "./components/pages/home/HighTec.jsx";
import AboutSection from "./components/pages/home/AboutSection.jsx";
import CaseStudies from "./components/pages/home/CaseStudies.jsx";
import Services from "./components/pages/home/Services.jsx";
import ResultsSection from "./components/pages/home/ResultsSection.jsx";
import FAQSection from "./components/pages/home/FAQSection.jsx";
import CTA from "./components/pages/home/CTA.jsx";
import Footer from "./components/common/Footer.jsx";

export const metadata = {
  title: "Sinnex Tech | Where Technology Meets Healthcare",

  description:
    "Sinnex Tech delivers innovative healthcare technology, custom software, and digital solutions that help healthcare businesses grow and modernize.",

  keywords: [
    "Sinnex Tech",
    "healthcare technology",
    "healthcare IT solutions",
    "medical software development",
    "digital healthcare services",
    "health tech company",
    "healthcare web development",
    "custom healthcare software",
    "technology meets healthcare",
  ],

  alternates: {
    canonical: "https://sinnextech.com",
  },

  /* Open Graph */
  openGraph: {
    title: "Sinnex Tech | Where Technology Meets Healthcare",
    description:
      "Empowering healthcare organizations with innovative technology, secure software, and digital transformation solutions.",
    url: "https://sinnextech.com",
    siteName: "Sinnex Tech",
    images: [
      {
        url: "https://sinnextechnew.vercel.app/og/home.png", // /public/og/home.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech Healthcare Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    site: "@SinnexTech",
    title: "Sinnex Tech | Where Technology Meets Healthcare",
    description:
      "Innovative healthcare technology, medical software, and digital solutions by Sinnex Tech.",
    images: ["https://sinnextechnew.vercel.app/og/home.png"],
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Sinnex Tech provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sinnex Tech provides healthcare IT solutions, medical software, digital transformation, and technology services for healthcare businesses.",
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
        {
          "@type": "Question",
          name: "How can I contact Sinnex Tech?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Sinnex Tech via the Contact page or email info@sinnextech.com.",
          },
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <div className="bg-[#f3f3f3]">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroLayout />
      <ClientScroll />
      <AboutSection />
      <Services />
      <HighTec />
      <ResultsSection />
      <CaseStudies />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}
