const HeaderItem = ({ href, title }) => {
  return (
    <a
      href={`#${href}`}
      class="hover:text-cyan-400 text-white transition duration-300 relative group"
    >
      {title}
      <div class="energy-bar absolute -bottom-1 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </a>
  );
};

const HeaderMobileItem = ({ href, title }) => {
  return (
    <a
      href={`#${href}`}
      class="block hover:text-cyan-400 transition duration-300"
    >
      {title}
    </a>
  );
};

export const Header = () => {
  return (
    <nav class="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-cyan-500">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="orbitron text-2xl font-bold neon-glow flex items-center">
            <i class="fas fa-gem mr-2 text-cyan-400"></i>
            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cryptid TCG
            </span>
          </div>
          <div class="hidden md:flex space-x-8">
            <HeaderItem href="Home" title="Home" />
            <HeaderItem href="Features" title="Features" />
            <HeaderItem href="Cards" title="Cards" />
            <HeaderItem href="Gameplay" title="Gameplay" />
            <HeaderItem href="Battle" title="Battle" />
          </div>
          <button id="mobile-menu-btn" class="md:hidden text-2xl text-cyan-400">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden hidden bg-gray-900 bg-opacity-95">
        <div class="px-6 py-4 space-y-4">
          <HeaderMobileItem href="Home" title="Home" />
          <HeaderMobileItem href="Features" title="Features" />
          <HeaderMobileItem href="Cards" title="Cards" />
          <HeaderMobileItem href="Gameplay" title="Gameplay" />
          <HeaderMobileItem href="Battle" title="Battle" />
        </div>
      </div>
    </nav>
  );
};
