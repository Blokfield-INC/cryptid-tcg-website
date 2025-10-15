import { BattleSection } from "../components/BattleSection";
import { CryptidSection } from "../components/CryptidSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import { GameSection } from "../components/GameSection";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { TypeSection } from "../components/TypeSection";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TypeSection />
      <CryptidSection />
      <GameSection />
      {/* <BattleSection /> */}
      <Footer />
    </>
  );
};
