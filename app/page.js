import Header from "./components/common/Header.jsx";
import Hero from "./components/pages/services/Hero.jsx";
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import Herotwo from "./components/pages/home/Herotwo.jsx";
import HeroThree from "./components/pages/about/HeroThree.jsx";
import TechHealthcare from "./components/pages/home/TechHealthcare.jsx";
import HeroFour from "./components/pages/home/HeroFour.jsx";
import HeroFive from "./components/pages/home/HeroFive.jsx";
import HeroLayout from "./components/pages/home/HeroLayout.jsx";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroLayout />
      {/* <HeroFour /> */}
      {/* <Herotwo /> */}
      <ClientScroll />
      {/* <TechHealthcare /> */}
      {/* <HeroFive />
      <ClientScroll /> */}
      {/* <TechHealthcare /> */}
      {/* <HeroThree />
      <Hero /> */}
    </>
  );
}
