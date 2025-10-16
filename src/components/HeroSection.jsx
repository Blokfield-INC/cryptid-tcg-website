import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    (function () {
      const phrases = [
        "THE ULTIMATE TCG EXPERIENCE",
        "CHALLENGE YOUR OPPONENT WITH YOUR CRYPTIDS",
        "MAKE MOVES WITH STRATEGIES AND BEAT YOUR OPPONENT",
      ];

      const typeSpeed = 60;
      const deleteSpeed = 60;
      const pauseAfterTyping = 1500;
      const pauseBetweenPhrases = 400;

      const el = document.getElementById("typing-effect");

      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function tick() {
        const current = phrases[phraseIndex % phrases.length];
        if (!isDeleting) {
          charIndex++;
          el.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(tick, pauseAfterTyping);
            return;
          }
          setTimeout(tick, typeSpeed + randomJitter(8));
        } else {
          charIndex--;
          el.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            setTimeout(tick, pauseBetweenPhrases);
            return;
          }
          setTimeout(tick, deleteSpeed + randomJitter(6));
        }
      }

      function randomJitter(max) {
        return Math.round(Math.random() * max);
      }

      setTimeout(tick, 300);
    })();
  }, []);
  return (
    <section
      id="Home"
      class="gaming-bg w-full cyber-grid min-h-screen flex items-center relative overflow-hidden"
    >
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center">
          <div class="mb-6">
            <span class="text-cyan-400 text-lg orbitron">
              Trading Card Game
            </span>
          </div>

          <h1 class="orbitron text-6xl md:text-9xl font-black mb-6 relative">
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm">
              Cryptid TCG
            </span>
            <span class="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow">
              Cryptid TCG
            </span>
          </h1>

          <div class="cinzel text-3xl md:text-4xl mt-12 mb-8 text-gray-300">
            <span id="typing-effect"> </span>
            <span class="caret" aria-hidden="true"></span>
          </div>

          <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enter a realm where
            <span class="text-cyan-400 font-bold"> strategy</span> meets
            <span class="text-purple-400 font-bold"> magic</span>. Forge
            legendary decks, command mythical creatures, and prove your worth in
            the ultimate card battle arena!
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              target="_blank"
              href="https://cryptidtcg.com/"
              class="battle-ready hover:text-white cursor-pointer text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-10 py-5 rounded-full text-xl font-bold orbitron transition duration-300 shadow-2xl card-glow border border-cyan-400"
            >
              <i class="fas fa-sword mr-3"></i>Play Now
            </a>
            <a
              target="_blank"
              href="https://t.me/cryptohunterm2p"
              class="battle-ready hover:text-white cursor-pointer text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-10 py-5 rounded-full text-xl font-bold orbitron transition duration-300 shadow-2xl card-glow border border-purple-400"
            >
              <i class="fas fa-plus mr-3"></i>Join Community
            </a>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div class="gaming-card rounded-lg p-4 text-center">
              <div class="text-cyan-400 text-2xl font-bold orbitron">100%</div>
              <div class="text-gray-400 text-sm">STRATEGY</div>
            </div>
            <div class="gaming-card rounded-lg p-4 text-center">
              <div class="text-purple-400 text-2xl font-bold orbitron">
                280+
              </div>
              <div class="text-gray-400 text-sm">CARDS</div>
            </div>
            <div class="gaming-card rounded-lg p-4 text-center">
              <div class="text-pink-400 text-2xl font-bold orbitron">10</div>
              <div class="text-gray-400 text-sm">ELEMENT</div>
            </div>
            <div class="gaming-card rounded-lg p-4 text-center">
              <div class="text-yellow-400 text-2xl font-bold orbitron">∞</div>
              <div class="text-gray-400 text-sm">STRATEGIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
