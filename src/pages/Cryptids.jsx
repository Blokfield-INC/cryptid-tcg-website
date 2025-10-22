import { useEffect } from "react";
import { useState } from "react";
import { getAssetUrl } from "../constants";
import { useRef } from "react";
import BackIcon from "../assets/left-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { CardAnimation } from "@lasbe/react-card-animation";
import { motion } from "framer-motion";

export const Cryptids = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const allCards = useRef([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const url = import.meta.env.VITE_PUBLIC_URL;
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${url}/cards`);
        const data = await res.json();
        allCards.current = data;
        setCards(allCards.current.filter((c) => state?.type == c?.cryptidType));
      } catch (e) {
        console.error("Error fetching cards:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center">
        <button
          onClick={() => navigate("/")}
          className="w-[50px] h-[50px] p-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgb(45, 45, 68)" }}
        >
          {/* <img src={BackIcon} style={{ width: 20 }} /> */}
          <i className="fa fa-home"></i>
        </button>
        <p className="ml-8 text-2xl font-bold">{state?.type}</p>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 grid-cols-2 gap-8">
          {cards?.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.01 }}
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
