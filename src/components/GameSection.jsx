import DECK1 from "../assets/deck1.png";
import BATTLE1 from "../assets/battle1.png";
import WALLET from "../assets/wallet.png";

export const GameSection = () => {
  return (
    <section id="Gameplay" class="py-20 bg-gray-900 relative">
      <div class="absolute inset-0 cyber-grid opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="text-green-400 orbitron text-lg mb-4">GAME MECHANICS</div>
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            MASTER THE GAME
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the three core systems that define the Cryptid TCG
            experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="gaming-card rounded-2xl p-8 battle-ready">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={DECK1} style={{ height: 40 }} />
              </div>
              <h3 class="orbitron text-xl font-bold text-yellow-400">
                DECK CREATION
              </h3>
            </div>
            <p class="text-gray-300 text-center mb-4">
              Build your strategy from hundreds of cards across 10 Attributes.
              Mix Cryptids, Hunters, and Items to craft your perfect deck.
            </p>
            <div class="flex justify-center space-x-1">
              <div class="mana-crystal bg-yellow-400"></div>
              <div class="mana-crystal bg-yellow-400"></div>
              <div class="mana-crystal bg-yellow-400"></div>
              <div class="mana-crystal bg-gray-600"></div>
              <div class="mana-crystal bg-gray-600"></div>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={BATTLE1} style={{ height: 40 }} />
              </div>
              <h3 class="orbitron text-xl font-bold text-purple-400">
                BATTLE SYSTEM
              </h3>
            </div>
            <p class="text-gray-300 text-center mb-4">
              Engage in real-time tactical battles where every card choice
              matters. Use skill combos, counterplays, and timing to claim
              victory.
            </p>
            <div class="text-center">
              <span class="text-purple-400 orbitron text-sm">
                Learn Battle System
              </span>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={WALLET} style={{ height: 40 }} />
              </div>
              <h3 class="orbitron text-xl font-bold text-green-400">
                WALLET SYSTEM
              </h3>
            </div>
            <p class="text-gray-300 text-center mb-4">
              Own, trade, and secure your assets on BNB Smart Chain. Manage your
              in-game tokens and collectibles with full transparency and
              on-chain protection. Shield Status: 100% Secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
