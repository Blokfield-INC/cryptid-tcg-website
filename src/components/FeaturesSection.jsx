export const FeaturesSection = () => {
  return (
    <section id="features" class="py-20 bg-gray-900 relative">
      <div class="absolute inset-0 cyber-grid opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="text-cyan-400 orbitron text-lg mb-4">GAME FEATURES</div>
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            UNLEASH THE POWER
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge gameplay mechanics that redefine the TCG
            genre
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-cyan-400">
              <i class="fas fa-dragon"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-cyan-400">
              MYTHICAL CREATURES
            </h3>
            <p class="text-gray-300 mb-6">
              Command legendary dragons, ancient spirits, and cosmic entities
              with unique abilities that evolve as you play.
            </p>
            <div class="flex items-center space-x-2">
              <span class="text-yellow-400">⚡ Power:</span>
              <div class="energy-bar flex-1"></div>
              <span class="text-yellow-400">MAX</span>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-purple-400">
              <i class="fas fa-brain"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-purple-400">
              AI STRATEGY ENGINE
            </h3>
            <p class="text-gray-300 mb-6">
              Advanced AI adapts to your playstyle, creating dynamic challenges
              that keep every match thrilling and unpredictable.
            </p>
            <div class="text-center">
              <span class="text-purple-400 orbitron">
                NEURAL NETWORK ACTIVE
              </span>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-pink-400">
              <i class="fas fa-globe"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-pink-400">
              CROSS-REALITY BATTLES
            </h3>
            <p class="text-gray-300 mb-6">
              Battle players across multiple dimensions with seamless
              cross-platform gameplay and real-time tournaments.
            </p>
            <div class="flex justify-center space-x-2">
              <i class="fab fa-windows text-blue-400"></i>
              <i class="fab fa-apple text-gray-400"></i>
              <i class="fab fa-android text-green-400"></i>
              <i class="fas fa-gamepad text-purple-400"></i>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-green-400">
              <i class="fas fa-dna"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-green-400">
              CARD EVOLUTION
            </h3>
            <p class="text-gray-300 mb-6">
              Watch your cards evolve and gain new abilities through battles.
              Each victory transforms your deck into something unique.
            </p>
            <div class="text-center text-green-400 orbitron">
              LV. 1 → LV. 99 → LEGENDARY
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-yellow-400">
              <i class="fas fa-trophy"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-yellow-400">
              CHAMPIONSHIP MODE
            </h3>
            <p class="text-gray-300 mb-6">
              Compete in seasonal tournaments with massive prize pools. Climb
              the leaderboards and become a Cryptid TCG Champion.
            </p>
            <div class="text-center">
              <span class="text-yellow-400 font-bold">
                🏆 NEXT TOURNAMENT: 3 DAYS
              </span>
            </div>
          </div>

          <div class="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div class="text-5xl mb-6 text-red-400">
              <i class="fas fa-vr-cardboard"></i>
            </div>
            <h3 class="orbitron text-2xl font-bold mb-4 text-red-400">
              VR EXPERIENCE
            </h3>
            <p class="text-gray-300 mb-6">
              Step into the arena with full VR support. Feel the magic, see the
              battles unfold in stunning 3D reality.
            </p>
            <div class="text-center text-red-400 orbitron">
              IMMERSIVE REALITY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
