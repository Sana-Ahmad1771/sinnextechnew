import React from "react";
import Footer from "../components/common/Footer";
import ContactHero from "../components/pages/contact/ContactHero";
import Script from "next/script";

/* Contact Page SEO Metadata */
export const metadata = {
  title: "Contact | Healthcare IT Services",

  description:
    "Get in touch with Sinnex Tech for healthcare technology solutions, digital transformation, and custom IT services. We’re here to help your business grow.",

  keywords: [
    "Contact Sinnex Tech",
    "healthcare technology contact",
    "healthcare IT consultation",
    "health tech company contact",
    "medical software services contact",
    "digital healthcare solutions",
    "Sinnex Tech support",
  ],

  alternates: {
    canonical: "https://sinnextech.com/contact",
  },

  /* Open Graph */
  openGraph: {
    title: "Contact | Sinnex Tech",
    description:
      "Reach out to Sinnex Tech to discuss healthcare technology, digital solutions, and innovative IT services tailored to your needs.",
    url: "https://sinnextech.com/contact",
    siteName: "Sinnex Tech",
    images: [
      {
        url: "https://sinnextechnew.vercel.app/og/contact.png", // ✅ correct path (no /public in URL)
        width: 1200,
        height: 630,
        alt: "Contact Sinnex Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    site: "@SinnexTech",
    title: "Contact | Sinnex Tech",
    description:
      "Contact Sinnex Tech for innovative healthcare technology, digital transformation, and IT solutions.",
    images: ["https://sinnextechnew.vercel.app/og/contact.png"],
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
      name: "Contact",
      item: "https://sinnextech.com/contact",
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-234-567-890",
          contactType: "customer support",
          email: "info@sinnextech.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sinnextech.com/#website",
      url: "https://sinnextech.com",
      name: "Sinnex Tech",
      publisher: { "@id": "https://sinnextech.com/#organization" },
    },
  ],
};

const page = () => {
  return (
    <div className="bg-[#fefefe]">
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="m-2">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
};

export default page;
