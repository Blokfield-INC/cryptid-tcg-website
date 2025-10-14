import { types } from "../constants";

const Type = ({ name, icon, description, color }) => {
  return (
    <div class="gaming-card rounded-2xl p-6 battle-ready group overflow-hidden relative">
      <div class="absolute inset-0 hologram opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="relative z-10">
        <div
          style={{ backgroundColor: color }}
          class="h-64 bg-gradient-to-br from-[#0b8d9c99]  rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
        >
          <img src={icon} />
          <div
            style={{ backgroundColor: color }}
            class="absolute uppercase bg-gradient-to-br bottom-2 from-[#11111199]  right-2 rounded-full px-2 py-1 text-xs orbitron"
          >
            {name}
          </div>
        </div>
        <h3 class="orbitron text-xl font-bold mb-2 text-red-400">{name}</h3>
        <p class="text-gray-300 text-sm mb-4">{description}</p>
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center space-x-1">
            <span class="text-yellow-400">⚡</span>
            <span class="text-yellow-400 font-bold orbitron">12</span>
          </div>
          <div class="flex items-center space-x-1">
            <span class="text-red-400">❤️</span>
            <span class="text-red-400 font-bold orbitron">15</span>
          </div>
          <div class="flex items-center space-x-1">
            <span class="text-blue-400">🛡️</span>
            <span class="text-blue-400 font-bold orbitron">8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TypeSection = () => {
  return (
    <section id="cards" class="py-20 bg-black relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            Cryptid Types
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover powerful cards with stunning artwork and devastating
            abilities
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {types.map((item, i) => (
            <Type
              key={i}
              name={item.name}
              color={item.color}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
