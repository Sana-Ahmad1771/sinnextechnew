import Header from "./components/common/Header.jsx";
import Hero from "./components/pages/services/Hero.jsx";
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import Herotwo from "./components/pages/home/Herotwo.jsx";
import HeroThree from "./components/pages/about/HeroThree.jsx";
import TechHealthcare from "./components/pages/home/TechHealthcare.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Herotwo />
      <ClientScroll />
      <TechHealthcare />
      <HeroThree />
      <Hero />
    </>
  );
}
