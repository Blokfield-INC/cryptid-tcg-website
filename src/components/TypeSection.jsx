import styled from "styled-components";
import { types } from "../constants";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Embla = styled.div`
  top: 0;
  margin: auto;
  --slide-height: 18rem;
  --slide-spacing: 0.1rem;
  --slide-size: 270px;
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

const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  cursor: pointer;
  width: 200px;
  margin-inline: 20px;
`;

const Type = ({ name, icon, description, color }) => {
  const navigate = useNavigate();
  return (
    <EmblaSlide
      onClick={() => {
        navigate("/cryptids", { state: { type: name } });
      }}
      className="p-6 rounded-2xl gaming-card -translate-z-8 rotate-x-50 rotate-z-45"
      // className="gaming-card rounded-2xl p-6 battle-ready group overflow-hidden relative"
    >
      <div className="absolute inset-0 hologram opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div
          onClick={() => console.log("ğşğşğşğ")}
          style={{ backgroundColor: color }}
          className="h-64 bg-gradient-to-br from-[#0b8d9c99]  rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
        >
          <img src={icon} />
          <div
            style={{ backgroundColor: color }}
            className="absolute uppercase bg-gradient-to-br bottom-2 from-[#11111199]  right-2 rounded-full px-2 py-1 text-xs orbitron"
          >
            {name}
          </div>
        </div>
        <h3 className="orbitron text-xl font-bold mb-2 text-red-400">{name}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        {/* <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⚡</span>
            <span className="text-yellow-400 font-bold orbitron">12</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-red-400">❤️</span>
            <span className="text-red-400 font-bold orbitron">15</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-blue-400">🛡️</span>
            <span className="text-blue-400 font-bold orbitron">8</span>
          </div>
        </div> */}
      </div>
    </EmblaSlide>
  );
};

export const TypeSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );
  return (
    <section id="Types" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            Cryptid Types
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cryptid card types form the heart of the strategy, each with their
            own strengths, weaknesses, and styles.
          </p>
        </div>
      </div>
      <Container>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {types.map((item, i) => (
                <Type
                  key={i}
                  name={item.name}
                  color={item.color}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </EmblaContainer>
          </EmblaViewport>
        </Embla>
      </Container>
    </section>
  );
};
