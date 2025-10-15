import { useEffect } from "react";
import { useState } from "react";
import { getAssetUrl } from "../constants";
import { useRef } from "react";
import BackIcon from "../assets/left-arrow.png";
import FilterIcon from "../assets/filter.png";
import { useNavigate } from "react-router-dom";
import { CardAnimation } from "@lasbe/react-card-animation";
import { motion, AnimatePresence } from "framer-motion";

const Filter = () => {
  const [show, setShow] = useState(false);
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
        {!show && (
          <motion.div
            style={{ backdropFilter: "blur(5px)" }}
            className="absolute bg-[#00000090] top-0 bottom-0 left-0 right-0 flex items-center justify-center"
          >
            <div className="w-[700px] h-[80%] bg-[#20202e] rounded-2xl"></div>
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
  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-[50px] h-[50px] p-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgb(45, 45, 68)" }}
        >
          <img src={BackIcon} style={{ width: 20 }} />
        </button>
        <div className="flex gap-5" style={{ zIndex: 100 }}>
          {/* <Filter /> */}
          <input
            style={{
              backgroundColor: "rgb(45, 45, 68)",
            }}
            placeholder="Search..."
            className="border-none min-w-[400px] rounded-xl px-5"
            onChange={onSearch}
          />
        </div>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 grid-cols-2 gap-8">
          {cards?.map((item) => (
            <CardAnimation>
              <img src={getAssetUrl(item?.imageFull)} />
            </CardAnimation>
          ))}
        </div>
      )}
    </div>
  );
};
