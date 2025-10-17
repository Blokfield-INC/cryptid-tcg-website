import DECK from "../assets/deck.png";
import PVP from "../assets/pvp.png";
import MYTHICAL from "../assets/mythical_cryptids.png";
import EVOLVE from "../assets/evolve.png";
import REWARDS from "../assets/rewards.png";
import BATTLE from "../assets/battle.png";

export const FeaturesSection = () => {
  return (
    <section id="Features" class="py-20 bg-gray-900 relative">
      <div class="absolute inset-0 cyber-grid opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="text-cyan-400 orbitron text-lg mb-4">GAME FEATURES</div>
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            UNLEASH YOUR STRATEGY
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience next-generation gameplay mechanics that redefine the TCG
            genre.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-pink-400">
              <img src={BATTLE} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-cyan-400">
              Skill-Based Battles
            </h3>
            <p class="text-gray-300 mb-6">
              Win with strategy, not luck - every move counts.
            </p>
            {/* <div class="flex items-center space-x-2">
              <span class="text-yellow-400">⚡ Power:</span>
              <div class="energy-bar flex-1"></div>
              <span class="text-yellow-400">MAX</span>
            </div> */}
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-pink-400">
              <img src={EVOLVE} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-purple-400">
              Evolving Cards
            </h3>
            <p class="text-gray-300 mb-6">
              Upgrade and combine cards to unlock new powers and synergies.
            </p>
            {/* <div class="text-center">
              <span class="text-purple-400 orbitron">
                NEURAL NETWORK ACTIVE
              </span>
            </div> */}
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-pink-400">
              <img src={MYTHICAL} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-pink-400">
              Mythical Cryptids
            </h3>
            <p class="text-gray-300 mb-6">
              Summon legendary creatures with unique abilities and elemental
              powers.
            </p>
            {/* <div class="flex justify-center space-x-2">
              <i class="fab fa-windows text-blue-400"></i>
              <i class="fab fa-apple text-gray-400"></i>
              <i class="fab fa-android text-green-400"></i>
              <i class="fas fa-gamepad text-purple-400"></i>
            </div> */}
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-green-400">
              <img src={PVP} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-green-400">
              Competitive PvP Mode
            </h3>
            <p class="text-gray-300 mb-6">
              Challenge players worldwide and climb seasonal leaderboards.
            </p>
            {/* <div class="text-center text-green-400 orbitron">
              LV. 1 → LV. 99 → LEGENDARY
            </div> */}
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-yellow-400">
              <img src={DECK} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-yellow-400">
              Deck Customization
            </h3>
            <p class="text-gray-300 mb-6">
              Craft your perfect deck with endless combinations and strategies.
            </p>
            {/* <div class="text-center">
              <span class="text-yellow-400 font-bold">
                🏆 NEXT TOURNAMENT: 3 DAYS
              </span>
            </div> */}
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-3 text-pink-400">
              <img src={REWARDS} style={{ height: 80 }} />
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-red-400">
              Tournaments & Rewards
            </h3>
            <p class="text-gray-300 mb-6">
              Join events, earn rewards, and prove yourself as the ultimate
              champion.
            </p>
            {/* <div class="text-center text-red-400 orbitron">
              IMMERSIVE REALITY
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
