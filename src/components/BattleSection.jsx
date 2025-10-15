export const BattleSection = () => {
  return (
    <section id="Battle" class="py-20 gaming-bg cyber-grid relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="text-red-400 orbitron text-lg mb-4">BATTLE ARENA</div>
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            ENGAGE IN COMBAT
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into the arena where legends are born and strategies are tested
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="gaming-card rounded-xl p-6 flex items-start space-x-4">
              <div class="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-4 flex-shrink-0">
                <span class="orbitron text-2xl font-bold">1</span>
              </div>
              <div>
                <h3 class="orbitron text-2xl font-bold mb-3 text-red-400">
                  CHOOSE YOUR BATTLEGROUND
                </h3>
                <p class="text-gray-300">
                  Select from 12 unique arenas, each with special environmental
                  effects that can turn the tide of battle.
                </p>
              </div>
            </div>

            <div class="gaming-card rounded-xl p-6 flex items-start space-x-4">
              <div class="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-4 flex-shrink-0">
                <span class="orbitron text-2xl font-bold">2</span>
              </div>
              <div>
                <h3 class="orbitron text-2xl font-bold mb-3 text-blue-400">
                  DEPLOY YOUR STRATEGY
                </h3>
                <p class="text-gray-300">
                  Summon creatures, cast spells, and execute combos in real-time
                  strategic combat that rewards quick thinking.
                </p>
              </div>
            </div>

            <div class="gaming-card rounded-xl p-6 flex items-start space-x-4">
              <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 flex-shrink-0">
                <span class="orbitron text-2xl font-bold">3</span>
              </div>
              <div>
                <h3 class="orbitron text-2xl font-bold mb-3 text-purple-400">
                  CLAIM VICTORY
                </h3>
                <p class="text-gray-300">
                  Achieve victory through multiple win conditions: defeat all
                  enemies, control key points, or cast the ultimate spell.
                </p>
              </div>
            </div>
          </div>

          <div class="gaming-card rounded-3xl p-8 hologram">
            <h3 class="orbitron text-3xl font-bold mb-8 text-center text-cyan-400">
              LIVE BATTLE STATS
            </h3>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div
                  class="text-5xl font-bold text-red-400 mb-2 orbitron battle-counter"
                  data-target="15847"
                >
                  0
                </div>
                <div class="text-gray-300">BATTLES TODAY</div>
                <div class="energy-bar mt-2"></div>
              </div>
              <div class="text-center">
                <div
                  class="text-5xl font-bold text-blue-400 mb-2 orbitron battle-counter"
                  data-target="3"
                >
                  0
                </div>
                <div class="text-gray-300">AVG BATTLE TIME (MIN)</div>
                <div class="energy-bar mt-2"></div>
              </div>
              <div class="text-center">
                <div
                  class="text-5xl font-bold text-green-400 mb-2 orbitron battle-counter"
                  data-target="2891"
                >
                  0
                </div>
                <div class="text-gray-300">ONLINE PLAYERS</div>
                <div class="energy-bar mt-2"></div>
              </div>
              <div class="text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-2 orbitron">
                  ∞
                </div>
                <div class="text-gray-300">POSSIBILITIES</div>
                <div class="energy-bar mt-2"></div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <button class="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-8 py-4 rounded-full text-lg font-bold orbitron transition duration-300 shadow-2xl card-glow border border-red-400 w-full">
                <i class="fas fa-swords mr-2"></i>ENTER BATTLE ARENA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
