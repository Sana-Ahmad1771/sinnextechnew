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
        url: "https://sinnextechnew.vercel.app/public/og/home.png", // /public/og/home.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech Healthcare Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* ✅ Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Sinnex Tech | Where Technology Meets Healthcare",
    description:
      "Innovative healthcare technology, medical software, and digital solutions by Sinnex Tech.",
    images: ["/og/home.png"],
  },
};

export default function Home() {
  return (
    <div className="bg-[#f3f3f3]">
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
