export const Footer = () => {
  return (
    <footer class="bg-black py-12 border-t border-cyan-500">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="orbitron text-4xl font-bold mb-6 neon-glow">
            <i class="fas fa-gem mr-2 text-cyan-400"></i>
            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cryptid TCG
            </span>
          </div>
          <p class="text-gray-400 mb-8 text-lg">
            © 2024 Cryptid TCG. All rights reserved. Enter the arena and become
            a legend.
          </p>
          {/* <div class="flex justify-center space-x-8 mb-8">
            <a
              href="#"
              class="text-gray-400 hover:text-cyan-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-discord"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-purple-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-twitch"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-red-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div> */}
          <div class="text-cyan-400 orbitron">
            GAME ON • BATTLE READY • LEGEND AWAITS
          </div>
        </div>
      </div>
    </footer>
  );
};
