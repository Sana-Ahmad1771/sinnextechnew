
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import HeroLayout from "./components/pages/home/HeroLayout.jsx";
import HighTec from "./components/pages/home/HighTec.jsx";
import AboutSection from "./components/pages/home/AboutSection.jsx";
import CaseStudies from "./components/pages/home/CaseStudies.jsx";
import Services from "./components/pages/home/Services.jsx";
import ResultsSection from "./components/pages/home/ResultsSection.jsx";
import FAQSection from "./components/pages/home/FAQSection.jsx";
import TechHealthcare from "./components/pages/home/TechHealthcare.jsx";
import CTA from "./components/pages/home/CTA.jsx";
import Footer from "./components/common/Footer.jsx";

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
      {/* <TechHealthcare /> */}
      <Footer />
    </div>
  );
}
