import Header from "./components/common/Header.jsx";
import Hero from "./components/pages/services/Hero.jsx";
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import Herotwo from "./components/pages/home/Herotwo.jsx";
import HeroThree from "./components/pages/about/HeroThree.jsx";
import TechHealthcare from "./components/pages/home/TechHealthcare.jsx";
import HeroFour from "./components/pages/home/HeroFour.jsx";
import HeroFive from "./components/pages/home/HeroFive.jsx";
import HeroLayout from "./components/pages/home/HeroLayout.jsx";
import HighTec from "./components/pages/home/HighTec.jsx";
import AboutSection from "./components/pages/home/AboutSection.jsx";
import Realizations from "./components/pages/home/Realizations.jsx";
import Services from "./components/pages/home/Services.jsx";

export default function Home() {
  return (
    <div className="bg-[#f3f3f3]">
      {/* <Header /> */}
      <HeroLayout />
      {/* <HeroFour /> */}
      {/* <Herotwo /> */}
      <ClientScroll />
      <AboutSection />
      <Services />
      {/* <Realizations /> */}
      <HighTec />
      {/* <TechHealthcare /> */}
      {/* <HeroFive />
      <ClientScroll /> */}
      {/* <TechHealthcare /> */}
      {/* <HeroThree />
      <Hero /> */}
    </div>
  );
}
