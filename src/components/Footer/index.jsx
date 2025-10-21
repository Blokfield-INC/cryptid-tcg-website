import LOGO from "../../assets/logo.png";
import bnbChainDapp from "../../assets/bnb-chain-dapp.png";

export const Footer = () => {
  return (
    <footer class="bg-black py-12 border-t border-cyan-500">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="orbitron text-4xl font-bold mb-6 neon-glow flex justify-center">
            <img src={LOGO} width={300} />
          </div>
          <p class="text-gray-400 mb-8 text-lg">
            © 2025 Cryptid TCG. All rights reserved. Enter the arena and become
            a legend.
          </p>
          <div class="flex justify-center space-x-5 mb-8">
            <a
              target="_blank"
              href="https://t.me/cryptohunterm2p"
              class="text-gray-400 hover:text-cyan-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-telegram"></i>
            </a>
            <a
              target="_blank"
              href="https://x.com/CryptoHunter_W"
              class="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              target="_blank"
              href="https://cryptohunters-organization.gitbook.io/cryptid-tcg"
              class="text-gray-400 hover:text-blue-400  flex items-center transition duration-300 text-2xl"
            >
              <img
                className="grayscale hover:grayscale-[0px]"
                src={bnbChainDapp}
                width={25}
              />
            </a>

            <a
              target="_blank"
              href="https://dappbay.bnbchain.org/detail/cryptid-tcg"
              class="text-gray-400 hover:text-green-400 transition duration-300 text-2xl"
            >
              <i class="fa-solid fa-file"></i>
            </a>

            {/*<a
              href="#"
              class="text-gray-400 hover:text-purple-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-twitch"></i>
            </a>
            
            <a
              href="#"
              class="text-gray-400 hover:text-red-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-youtube"></i>
            </a>*/}
          </div>
          <div class="text-cyan-400 orbitron">
            GAME ON • BATTLE READY • LEGEND AWAITS
          </div>
        </div>
      </div>
    </footer>
  );
};
