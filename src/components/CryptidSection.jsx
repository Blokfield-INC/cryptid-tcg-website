import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import {
  cryptids,
  getAssetUrl,
  Hunters,
  Items,
  ItemsTools,
} from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Embla = styled.div`
  top: 0;
  margin: auto;
  --slide-height: 18rem;
  --slide-spacing: 0.1rem;
  --slide-size: 300px;
`;

const EmblaViewport = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const EmblaSlide = styled.img`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  cursor: pointer;
  width: 200px;
  margin-inline: 10px;
`;

export const CryptidSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("Cryptids");
  const [selectedTabValues, setSelectedTabValues] = useState(cryptids);

  return (
    <section id="Cards" class="py-20 bg-black relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-7 neon-glow">
            {selectedTab}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            {["Cryptids", "Hunters", "Items", "Item Tools"].map((item) =>
              item == selectedTab ? null : (
                <div
                  className="bg-[#222] px-3 py-1 rounded-lg cursor-pointer"
                  onClick={() => {
                    setSelectedTab(item);
                    setSelectedTabValues(
                      item == "Cryptids"
                        ? cryptids
                        : item == "Hunters"
                        ? Hunters
                        : item == "Items"
                        ? Items
                        : ItemsTools
                    );
                  }}
                  key={item}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover powerful cards with stunning artwork and devastating
            abilities
          </p>
        </div>
      </div>
      <Container>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {selectedTabValues.map((item, index) => (
                <EmblaSlide src={getAssetUrl(item.img)} key={index} />
              ))}
            </EmblaContainer>
          </EmblaViewport>
        </Embla>
      </Container>
      <div class="text-center mt-20">
        <button
          onClick={() => navigate("/all-cryptids")}
          class="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-bold orbitron transition duration-300 shadow-2xl card-glow"
        >
          <i class="fas fa-cards-blank mr-2"></i>VIEW ALL CARDS
        </button>
      </div>
    </section>
  );
};
