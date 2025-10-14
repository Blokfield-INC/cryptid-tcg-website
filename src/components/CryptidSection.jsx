export const CryptidSection = () => {
  return (
    <section id="cryptids" class="py-20 bg-black relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="orbitron text-4xl md:text-6xl font-bold mb-8 neon-glow">
            Cryptids
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover powerful cards with stunning artwork and devastating
            abilities
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
      </div>
    </section>
  );
};
