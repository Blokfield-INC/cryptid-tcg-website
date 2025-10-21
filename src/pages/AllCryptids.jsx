import { useEffect } from "react";
import { useState } from "react";
import { getAssetUrl } from "../constants";
import { useRef } from "react";
import BackIcon from "../assets/left-arrow.png";
import XIcon from "../assets/close.png";
import FilterIcon from "../assets/filter.png";
import { useNavigate } from "react-router-dom";
import { CardAnimation } from "@lasbe/react-card-animation";
import { motion, AnimatePresence } from "framer-motion";

const cardType = [
  { value: "Cryptid", type: "cardType" },
  { value: "Hunter", type: "cardType" },
  { value: "Item", type: "cardType" },
  { value: "Item Tool", type: "cardType" },
];

const type = [
  { value: "Grass", type: "type" },
  { value: "Water", type: "type" },
  { value: "Electric", type: "type" },
  { value: "Psychic", type: "type" },
  { value: "Fight", type: "type" },
  { value: "Dark", type: "type" },
  { value: "Dragon", type: "type" },
  { value: "Normal", type: "type" },
  { value: "Iron", type: "type" },
  { value: "Flame", type: "type" },
];

const rarities = [
  { value: "Normal", type: "rarity" },
  { value: "Rare", type: "rarity" },
  { value: "Unique", type: "rarity" },
  { value: "Legend", type: "rarity" },
  { value: "Mythic", type: "rarity" },
  { value: "AR", type: "rarity" },
];

const levels = [
  { value: "Level 1", type: "level" },
  { value: "Level 2", type: "level" },
  { value: "Level 3", type: "level" },
  { value: "Level 4", type: "level" },
  { value: "Level 5", type: "level" },
];

const Filter = ({ onFilter = () => {} }) => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState([]);

  const filterHandler = (v) => {
    if (filter.some((item) => item?.type == v.type && item.value == v.value)) {
      setFilter((prev) =>
        prev.filter((p) => p?.type != v.type || p.value != v.value)
      );
    } else {
      setFilter((prev) => [...prev, v]);
    }
  };
  return (
    <div>
      <button
        className="w-[50px] h-[50px] p-0 flex items-center justify-center rounded-full"
        style={{ backgroundColor: "rgb(45, 45, 68)" }}
        onClick={() => setShow(true)}
      >
        <img src={FilterIcon} className="w-[25px]" />
      </button>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: "blur(5px)" }}
            className="absolute bg-[#00000090] top-0 bottom-0 left-0 right-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-[700px] pb-8 bg-[#20202e] rounded-xl p-6"
            >
              <div
                className="flex justify-between pb-2"
                style={{ borderBottom: "2px solid rgb(35, 45, 68)" }}
              >
                <p className="text-[#fff] font-bold text-2xl">Filter</p>
                <button
                  onClick={() => setShow(false)}
                  className="size-[40px] p-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgb(45, 45, 68)" }}
                >
                  <img src={XIcon} width={15} />
                </button>
              </div>
              <p className="text-lg font-semibold my-3">Card Type</p>
              <div className="flex gap-3">
                {cardType.map((item) => (
                  <button
                    onClick={() => filterHandler(item)}
                    className="px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: filter.some(
                        (f) => f?.type == item.type && item.value == f.value
                      )
                        ? "rgba(72, 72, 186, 1)"
                        : "rgb(45, 45, 68)",
                    }}
                  >
                    <p className="text-md">{item?.value}</p>
                  </button>
                ))}
              </div>
              <p className="text-lg font-semibold mb-3 mt-8">Type</p>
              <div className="flex gap-3 flex-wrap">
                {type.map((item) => (
                  <button
                    onClick={() => filterHandler(item)}
                    className="px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: filter.some(
                        (f) => f?.type == item.type && item.value == f.value
                      )
                        ? "rgba(72, 72, 186, 1)"
                        : "rgb(45, 45, 68)",
                    }}
                  >
                    <p className="text-md">{item?.value}</p>
                  </button>
                ))}
              </div>

              <p className="text-lg font-semibold mb-3 mt-8">Rarities</p>
              <div className="flex gap-3 flex-wrap">
                {rarities.map((item) => (
                  <button
                    onClick={() => filterHandler(item)}
                    className="px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: filter.some(
                        (f) => f?.type == item.type && item.value == f.value
                      )
                        ? "rgba(72, 72, 186, 1)"
                        : "rgb(45, 45, 68)",
                    }}
                  >
                    <p className="text-md">{item?.value}</p>
                  </button>
                ))}
              </div>

              <p className="text-lg font-semibold mb-3 mt-8">Levels</p>
              <div className="flex gap-3 flex-wrap">
                {levels.map((item) => (
                  <button
                    onClick={() => filterHandler(item)}
                    className="px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: filter.some(
                        (f) => f?.type == item.type && item.value == f.value
                      )
                        ? "rgba(72, 72, 186, 1)"
                        : "rgb(45, 45, 68)",
                    }}
                  >
                    <p className="text-md">{item?.value}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end mt-16 gap-6">
                <button
                  onClick={() => setShow(false)}
                  className="px-5 py-2 text-md bg-[#2d2d44] rounded-xl"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShow(false);
                    onFilter(filter);
                  }}
                  className="px-5 py-2 text-md bg-[#4848ba] rounded-xl"
                >
                  Filter
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AllCryptids = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const allCards = useRef([]);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_PUBLIC_URL;
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${url}/cards`);
        const data = await res.json();
        allCards.current = data.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.name === item.name)
        );
        setCards(allCards.current);
      } catch (e) {
        console.error("Error fetching cards:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  const onSearch = (v) => {
    setCards(
      allCards.current.filter((item) =>
        item.name?.toLowerCase().includes(v.target.value.toLowerCase())
      )
    );
  };

  const filter = (v) => {
    const cardTypes = v
      .filter((item) => item.type == "cardType")
      .map((item) => item.value);
    const types = v
      .filter((item) => item.type == "type")
      .map((item) => item.value);
    const rarities = v
      .filter((item) => item.type == "rarity")
      .map((item) => item.value);
    const levels = v
      .filter((item) => item.type == "level")
      .map((item) => item.value);

    setCards(
      allCards.current.filter((c) => {
        const matchCardType =
          cardTypes.length === 0 || cardTypes.includes(c.cardType);
        const matchType = types.length === 0 || types.includes(c.cryptidType);
        const matchRarity =
          rarities.length === 0 || rarities.includes(c.rarity);
        const matchLevel =
          levels.length === 0 || levels.includes(`Level ${c.level}`);
        return matchCardType && matchType && matchRarity && matchLevel;
      })
    );
  };
  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between flex-wrap gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-[50px] h-[50px] p-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgb(45, 45, 68)" }}
        >
          <img src={BackIcon} style={{ width: 20 }} />
        </button>
        <div
          className="flex gap-5 w-full md:w-[450px] h-[50px]"
          style={{ zIndex: 100 }}
        >
          <Filter onFilter={filter} />
          <input
            style={{
              backgroundColor: "rgb(45, 45, 68)",
            }}
            placeholder="Search..."
            className="border-none w-full md:w-[400px] rounded-xl px-5"
            onChange={onSearch}
          />
        </div>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 grid-cols-2 gap-8">
          {cards?.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <CardAnimation>
                <img src={getAssetUrl(item?.imageFull)} />
              </CardAnimation>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
