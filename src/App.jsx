import { CryptidSection } from "./components/CryptidSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TypeSection } from "./components/TypeSection";

function App() {
  return (
    <>
      <div class="particles fixed inset-0 z-0" id="particles"></div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TypeSection />
      <CryptidSection />
    </>
  );
}

export default App;
