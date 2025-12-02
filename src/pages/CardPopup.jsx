// CardPopup.jsx
import { motion, AnimatePresence } from "framer-motion";
import XIcon from "../assets/close.png";
import { getAssetUrl } from "../constants";
import Grass from "../assets/types/Grass.svg";
import Dark from "../assets/types/Dark.svg";
import Electric from "../assets/types/Electric.svg";
import Esper from "../assets/types/Esper.svg";
import Fairy from "../assets/types/Fairy.svg";
import Fight from "../assets/types/Fight.svg";
import Fly from "../assets/types/Fly.svg";
import Ghost from "../assets/types/Ghost.svg";
import Ground from "../assets/types/Ground.svg";
import Ice from "../assets/types/Ice.svg";
import Insect from "../assets/types/Insect.svg";
import Normal from "../assets/types/Normal.svg";
import Poison from "../assets/types/Poison.svg";
import Psychic from "../assets/types/Psychic.svg";
import Rock from "../assets/types/Rock.svg";
import Water from "../assets/types/Water.svg";
import { useState } from "react";

const TypesImgMap = {
  Grass: Grass,
  Dark: Dark,
  Electric: Electric,
  Esper: Esper,
  Fairy: Fairy,
  Fight: Fight,
  Fly: Fly,
  Ghost: Ghost,
  Ground: Ground,
  Ice: Ice,
  Insect: Insect,
  Normal: Normal,
  Poison: Poison,
  Psychic: Psychic,
  Rock: Rock,
  Water: Water,
};

const CardPopup = ({ card, onClose }) => {
  if (!card) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `
${card.name} (${card.cryptidType})
HP: ${card.hp}

${card.cardType} | ${card.stage} ${
      card.evolvesFrom ? "| Evolves from " + card.evolvesFrom : ""
    }

Description:
${card.description ?? "-"}

Skills:
${
  card.skills && card.skills.length > 0
    ? card.skills
        .map(
          (atk) =>
            `• ${atk.name} (${atk.displayDamage})
Cost: ${atk.energyCosts.map((c) => `${c.type} x${c.amount}`).join(", ")}
${atk.description}`
        )
        .join("\n\n")
    : "-"
}

Weakness: ${card.weakness || "-"}
Retreat: ${card.retreat || "-"}
`;

    navigator.clipboard.writeText(text);

    // 🔥 Animasyonlu kopyalandı bildirimi
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // 1.5 saniye sonra kaybolur
  };

  console.log("Rendering CardPopup for card:", card);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#00000090] backdrop-blur-sm flex items-center justify-center z-[999]"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-[#fdfdfd] p-6 rounded-xl w-[900px] relative flex gap-8 text-black shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 size-[35px] flex items-center justify-center rounded-full bg-[#e5e5e5]"
            style={{
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${XIcon})`,
            }}
          />

          <button
            onClick={handleCopy}
            className="absolute top-2 right-16 flex items-center gap-2 
             bg-[#f3f3f3] hover:bg-[#e5e5e5] 
             text-black px-2 py-1 rounded-full shadow 
             border border-gray-300 transition"
          >
            <span className="text-sm">Copy</span>
            <span className="text-lg">📋</span>
          </button>

          {/* Copy Notification */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-3 left-1/2 -translate-x-1/2 
                 bg-green-500 text-white px-4 py-1 rounded-md shadow-lg text-sm"
              >
                Copied!
              </motion.div>
            )}
          </AnimatePresence>

          {/* LEFT — Card Image */}
          <div className="w-[45%] flex justify-center items-start">
            <img
              src={getAssetUrl(card.imageFull)}
              className="w-full rounded-lg shadow-xl border"
            />
          </div>

          {/* RIGHT — Info like Venusaur layout */}
          <div className="w-[55%] flex flex-col">
            {/* Name + HP */}
            <div className="flex justify-between items-start border-b pb-3">
              <div>
                <h2 className="text-4xl font-bold mb-1">
                  {card.name}{" "}
                  <img
                    src={TypesImgMap[card.cryptidType]}
                    alt={card.cryptidType}
                    className="inline w-6 h-6"
                  />
                </h2>
                <p className="text-sm text-gray-600">
                  {card.cardType} | {card.stage}
                  {card.evolvesFrom && <> | Evolves from {card.evolvesFrom}</>}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-semibold">HP</span>
                <p className="text-3xl font-bold">{card.hp}</p>
              </div>
            </div>

            {/* Stats like Pokémon (Type, Rarity, Level) */}
            <div className="mt-4 space-y-2">
              <p>
                <strong>{card.description ?? "-"}</strong>
              </p>
            </div>

            {/* Attack Block (Pokémon-like) */}
            {card.skills && card.skills.length > 0 && (
              <div className="mt-6 border-t pt-4 space-y-4">
                {card.skills.map((atk, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold">{atk.name}</p>

                      <p className="text-sm text-gray-600">{atk.description}</p>
                      <p className="text-sm text-gray-600">
                        {atk.energyCosts.map((cost, idx) => (
                          <span key={idx} className="mr-2">
                            {Array.from({ length: cost.amount }).map((_, n) => (
                              <img
                                key={n}
                                src={
                                  TypesImgMap[
                                    cost.type === "Neutral"
                                      ? "Normal"
                                      : cost.type
                                  ]
                                }
                                alt={cost.type}
                                className="inline w-5 h-5"
                              />
                            ))}
                          </span>
                        ))}
                        <span className="ml-2">{atk.description ?? "-"}</span>
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      {atk.displayDamage}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Weakness + Retreat (Pokémon style row) */}
            <div className="mt-6 flex justify-between border-t pt-4 text-sm">
              <p>
                <strong>Weakness:</strong> {card.weakness || "-"}
              </p>
              <p>
                <strong>Retreat:</strong> {card.retreat || "-"}
              </p>
            </div>

            {/* Description (Flavor Text) */}
            {card.description && (
              <p className="mt-6 italic text-gray-700 text-sm">
                {card.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardPopup;
