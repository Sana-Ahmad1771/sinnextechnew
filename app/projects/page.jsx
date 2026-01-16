import AllProjectsCards from "../components/pages/Projects/AllProjectsCards.jsx";
import Footer from "../components/common/Footer.jsx";
import CTA from "../components/pages/home/CTA.jsx";
import HeroLayout from "../components/pages/Projects/HeroLayout.jsx";

/* Projects Page SEO Metadata */
export const metadata = {
  title: "Projects | Sinnex Tech Healthcare & Digital Solutions",

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
        url: "https://sinnextechnew.vercel.app/public/og/projects.png", // /public/og/projects.png
        width: 1200,
        height: 630,
        alt: "Sinnex Tech Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /*  Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sinnex Tech Healthcare & Digital Solutions",
    description:
      "Discover Sinnex Tech’s healthcare and digital technology projects, including custom software and IT solutions.",
    images: ["/og/projects.png"],
  },
};

const Page = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <HeroLayout />
      <AllProjectsCards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
