import React from "react";
import Footer from "../components/common/Footer";
import ContactHero from "../components/pages/contact/ContactHero";

/* Contact Page SEO Metadata */
export const metadata = {
  title: "Contact Sinnex Tech | Healthcare Technology Solutions",

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

  /* ✅ Open Graph */
  openGraph: {
    title: "Contact Sinnex Tech | Healthcare Technology Solutions",
    description:
      "Reach out to Sinnex Tech to discuss healthcare technology, digital solutions, and innovative IT services tailored to your needs.",
    url: "https://sinnextech.com/contact",
    siteName: "Sinnex Tech",
    images: [
      {
         url: "https://sinnextechnew.vercel.app/public/og/contact.png", // ✅ correct path (no /public in URL)
        width: 1200,
        height: 630,
        alt: "Contact Sinnex Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* ✅ Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Contact Sinnex Tech | Healthcare Technology Solutions",
    description:
      "Contact Sinnex Tech for innovative healthcare technology, digital transformation, and IT solutions.",
    images: ["/og/contact.png"],
  },
};

const page = () => {
  return (
    <div className="bg-[#fefefe]">
      <main className="m-2">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
};

export default page;
