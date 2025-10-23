import { useNavigate } from "react-router-dom";
import Deck1 from "../assets/1.gif";
import Deck4 from "../assets/4.gif";
import EnergySelect from "../assets/energy_select.gif";
import Deck from "../assets/deck1.png";
import ENERGY from "../assets/energy.png";
import COPY from "../assets/copy.png";
import Monster from "../assets/monster.png";
import Hunter from "../assets/hunter.png";
import Item from "../assets/item.png";
import { BattleSection } from "../components/BattleSection";

export const Italic = ({ children }: { children: string }) => (
  <span className="italic" style={{ fontFamily: "sans-serif" }}>
    {children}
  </span>
);

export const CardRulesTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border border-[#222] text-sm">
        <thead className="bg-[#111]">
          <tr>
            <th className="border border-[#222] px-4 py-2 text-left font-semibold">
              Card Type
            </th>
            <th className="border border-[#222] px-4 py-2 text-left font-semibold">
              Role
            </th>
            <th className="border border-[#222] px-4 py-2 text-left font-semibold">
              Rule
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#222] px-4 py-2 font-semibold">
              Cryptid Cards
            </td>
            <td className="border border-[#222] px-4 py-2">
              Your main battle units
            </td>
            <td className="border border-[#222] px-4 py-2">
              Stage 1–2 Cryptids need their BASIC form in the same deck
            </td>
          </tr>
          <tr>
            <td className="border border-[#222] px-4 py-2 font-semibold">
              Hunter Cards
            </td>
            <td className="border border-[#222] px-4 py-2">
              Support and tactical cards
            </td>
            <td className="border border-[#222] px-4 py-2">
              Freely added, up to 2 copies each
            </td>
          </tr>
          <tr>
            <td className="border border-[#222] px-4 py-2 font-semibold">
              Item Cards
            </td>
            <td className="border border-[#222] px-4 py-2">
              Utility and bonus effects
            </td>
            <td className="border border-[#222] px-4 py-2">
              Help your Cryptids during battle
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const HowToCreateDeck = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="cyber-grid p-8">
        <button
          onClick={() => navigate("/")}
          className="w-[50px] h-[50px] p-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgb(45, 45, 68)" }}
        >
          <i className="fa fa-home"></i>
        </button>
        <h2 className="text-cyan-400 text-lg orbitron text-center mb-5">
          How to Build Your Deck
        </h2>

        <p className="font-semibold mb-8 orbitron text-center text-5xl neon-glow">
          Build Your First Deck
        </p>
        <div className="text-xl max-w-[900px] mx-auto text-center">
          <p className="text-gray-300">
            Learn how to create your battle deck in <Italic>Cryptid TCG</Italic>
          </p>
          <p className="mb-4 text-gray-300">
            It’s easy to start, yet full of strategy once you dive in.
          </p>
          <img src={Deck1} />

          <p className="mt-4 text-gray-300">
            In <Italic>Cryptid TCG</Italic>, every battle starts with your deck
            — a collection of 20 cards that represent your strategy. Your deck
            can include{" "}
            <span className="font-bold text-cyan-400">Cryptid, Hunter</span> and{" "}
            <span className="font-bold text-purple-400">Item </span>
            cards.
          </p>
          <p className="text-gray-300">
            Choosing the right combination of cards and energy types is the key
            to victory.
          </p>
        </div>
      </div>

      <p className="font-semibold mb-2 mt-10 orbitron text-center text-5xl mb-7 neon-glow">
        Deck Size
      </p>
      <p className="text-center text-xl p-2 text-gray-300 mb-5">
        Each player builds a deck with{" "}
        <span className="font-bold text-cyan-400">exactly 20 cards.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        <div className="gaming-card rounded-2xl p-8 battle-ready">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={Deck} style={{ height: 40 }} />
            </div>
            <h3 className="orbitron text-xl font-bold text-purple-400">
              BASIC Cryptid card
            </h3>
          </div>
          <p className="text-gray-300 text-center mb-4">
            You must include{" "}
            <span className="font-bold text-purple-400">
              at least one BASIC Cryptid card.
            </span>
          </p>
        </div>

        <div className="gaming-card rounded-2xl p-8 battle-ready">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={ENERGY} style={{ height: 40 }} />
            </div>
            <h3 className="orbitron text-xl font-bold text-yellow-400">
              Energy Types
            </h3>
          </div>
          <p className="text-gray-300 text-center mb-4">
            You can select{" "}
            <span className="font-bold">1 to 3 Energy Types</span> for your
            deck.
          </p>
        </div>

        <div className="gaming-card rounded-2xl p-8 battle-ready">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={COPY} style={{ height: 40 }} />
            </div>
            <h3 className="orbitron text-xl font-bold text-green-400">
              Copies of same card
            </h3>
          </div>
          <p className="text-gray-300 text-center mb-4">
            You can use <span className="font-bold">up to 2 copies</span> of any
            card with the same name.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 gaming-card p-4 rounded-2xl">
        <p>
          💡 <Italic>Tip</Italic>: Fewer energy types = more stable strategy.
          More types = more flexible plays.
        </p>
      </div>

      <p className="font-semibold mb-2 mt-20 orbitron text-center text-5xl mb-7 neon-glow">
        Card Types
      </p>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div className="text-5xl mb-3 text-pink-400">
              <img src={Monster} style={{ height: 100 }} />
            </div>
            <h3 className="orbitron text-2xl font-bold mb-2 text-cyan-400">
              Cryptid Cards
            </h3>
            <p className="text-gray-300 mb-3">Your main battle units</p>
            <p>Stage 1–2 Cryptids need their BASIC form in the same deck</p>
          </div>

          <div className="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div className="text-5xl mb-3 text-pink-400">
              <img src={Hunter} style={{ height: 100 }} />
            </div>
            <h3 className="orbitron text-2xl font-bold mb-2 text-cyan-400">
              Hunter Cards
            </h3>
            <p className="text-gray-300 mb-3">Support and tactical cards</p>
            <p>Freely added, up to 2 copies each</p>
          </div>

          <div className="gaming-card rounded-2xl p-8 battle-ready hologram">
            <div className="text-5xl mb-3 text-pink-400">
              <img src={Item} style={{ height: 100 }} />
            </div>
            <h3 className="orbitron text-2xl font-bold mb-2 text-cyan-400">
              Item Cards
            </h3>
            <p className="text-gray-300 mb-3">Utility and bonus effects</p>
            <p>Help your Cryptids during battle</p>
          </div>
        </div>
      </div>

      <p className="font-semibold mb-2 mt-20 orbitron text-center text-5xl mb-7 neon-glow">
        Energy Selection
      </p>
      <div className="container text-gray-300 mx-auto">
        <img src={EnergySelect} />
        <p className="mt-5 p-2">
          When you build your deck, choose{" "}
          <span className="font-bold text-cyan-400">1–3 Energy Types</span>{" "}
          (e.g., Flame, Water, Psychic).
        </p>
        <p className="p-2">
          Each turn, you’ll automatically gain 1 random energy from your
          selected types — used to activate skills and abilities.
        </p>
        <div className="mx-auto mt-8 gaming-card p-4 rounded-2xl">
          <p>
            💡 <Italic>Example</Italic>: If your deck uses{" "}
            <span className="font-bold">Flame + Water</span>, you can draw
            energy from both types every turn, making your deck more dynamic.
          </p>
        </div>
      </div>

      <p className="font-semibold mb-2 mt-20 orbitron text-center text-5xl mb-7 neon-glow">
        Deck Slots
      </p>
      <p className="text-xl p-2 text-center md:text-2xl mb-2 text-gray-300 max-w-4xl mx-auto leading-relaxed">
        You start with{" "}
        <span className="font-bold text-purple-400">3 free deck slots</span>,
        letting you save different strategies (e.g., Fire Deck, Water Deck,
        Mixed Deck).
      </p>
      <p className="text-xl p-2 text-center md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
        You can unlock more slots later using in-game currency.
      </p>

      <p className="font-semibold mb-2 mt-20 orbitron text-center text-5xl mb-7 neon-glow">
        Strategy Tips for Beginners
      </p>
      <div className="container mt-14 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="gaming-card rounded-xl p-6 flex lg:items-start items-center items-center space-x-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-4 flex-shrink-0">
            <span className="orbitron text-2xl font-bold">1</span>
          </div>
          <div>
            <h3 className="orbitron text-xl font-bold text-red-400">
              Focus on one or two energy types at first.
            </h3>
          </div>
        </div>

        <div className="gaming-card rounded-xl p-6 flex lg:items-start items-center space-x-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-4 flex-shrink-0">
            <span className="orbitron text-2xl font-bold">2</span>
          </div>
          <div>
            <h3 className="orbitron text-xl font-bold text-red-400">
              Always include a few Hunter cards to support your Cryptids.
            </h3>
          </div>
        </div>

        <div className="gaming-card rounded-xl p-6 flex lg:items-start items-center space-x-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-4 flex-shrink-0">
            <span className="orbitron text-2xl font-bold">3</span>
          </div>
          <div>
            <h3 className="orbitron text-xl font-bold text-red-400">
              Avoid adding too many high-cost cards — balance is key.
            </h3>
          </div>
        </div>

        <div className="gaming-card rounded-xl p-6 flex lg:items-start items-center space-x-4">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-4 flex-shrink-0">
            <span className="orbitron text-2xl font-bold">4</span>
          </div>
          <div>
            <h3 className="orbitron text-xl font-bold text-red-400">
              Experiment with combinations to find your playstyle.
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-14">
        <img src={Deck4} />
      </div>
      <p className="font-semibold mb-2 mt-20 orbitron text-center text-5xl mb-7 neon-glow">
        Ready to Battle?
      </p>
      <div className="container p-2 mx-auto text-xl text-center md:text-2xl pb-24 text-gray-300 max-w-4xl mx-auto leading-relaxed">
        <p>
          Once your deck is saved, you’re ready to enter PvP or training
          battles!
        </p>
        <p>Try your new deck, earn rewards, and refine your strategy.</p>
        <Italic>
          🎴 Every card you choose matters — build, battle, and own your
          victory.
        </Italic>
      </div>
    </div>
  );
};
