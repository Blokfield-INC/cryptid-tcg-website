import Dark from "../assets/types/Dark.svg";
import Dragon from "../assets/types/Dragon.svg";
import Electric from "../assets/types/Electric.svg";
import Fight from "../assets/types/Fight.svg";
import Flame from "../assets/types/Flame.svg";
import Grass from "../assets/types/Grass.svg";
import Iron from "../assets/types/Iron.svg";
import Normal from "../assets/types/Normal.svg";
import Psychic from "../assets/types/Psychic.svg";
import Water from "../assets/types/Water.svg";

const ASSET_URL = import.meta.env.VITE_PUBLIC_URL;

export const getAssetUrl = (path) => {
  return `${ASSET_URL}${path}`;
};

export const types = [
  {
    name: "Dark",
    icon: Dark,
    description: "Disrupts foes with poison and control.",
    color: "#0B092D",
  },
  {
    name: "Dragon",
    icon: Dragon,
    description: "Immense power at higher energy cost.",
    color: "#8D1F1C",
  },
  {
    name: "Electric",
    icon: Electric,
    description: "Strikes fast with accelerated energy.",
    color: "#CFBF2D",
  },
  {
    name: "Fight",
    icon: Fight,
    description: "Trades up with efficient blows, conditional boosts.",
    color: "#751B23",
  },
  {
    name: "Flame",
    icon: Flame,
    description: "Unleashes explosive one-hit power.",
    color: "#ED7249",
  },
  {
    name: "Grass",
    icon: Grass,
    description: "Sustains through healing and endurance.",
    color: "#B3DF82",
  },
  {
    name: "Iron",
    icon: Iron,
    description: "Endures with defense and resilience.",
    color: "#8C7E77",
  },
  {
    name: "Normal",
    icon: Normal,
    description: "Versatile energy for any strategy.",
    color: "#FFFFFF",
  },
  {
    name: "Psychic",
    icon: Psychic,
    description: "Controls battles with mind and effects.",
    color: "#7A398B",
  },
  {
    name: "Water",
    icon: Water,
    description: "Controls tempo with flexible switching, sustain.",
    color: "#4B7CB1",
  },
];

export const cryptids = [
  { img: "/assets/images/cards/full/G195_3.png" },
  { img: "/assets/images/cards/full/G196_3.png" },
  { img: "/assets/images/cards/full/G197_3.png" },
  { img: "/assets/images/cards/full/G198_3.png" },
  { img: "/assets/images/cards/full/G199_3.png" },
  { img: "/assets/images/cards/full/G200_3.png" },
  { img: "/assets/images/cards/full/G201_3.png" },
  { img: "/assets/images/cards/full/G202_3.png" },
  { img: "/assets/images/cards/full/G203_3.png" },
  { img: "/assets/images/cards/full/G204_3.png" },
  { img: "/assets/images/cards/full/G205_3.png" },
  { img: "/assets/images/cards/full/G206_3.png" },
  { img: "/assets/images/cards/full/G207_3.png" },
  { img: "/assets/images/cards/full/G208_3.png" },
  { img: "/assets/images/cards/full/G209_3.png" },
  { img: "/assets/images/cards/full/G210_3.png" },
  { img: "/assets/images/cards/full/G211_3.png" },
  { img: "/assets/images/cards/full/G212_3.png" },
  { img: "/assets/images/cards/full/G213_3.png" },
  { img: "/assets/images/cards/full/G214_3.png" },
  { img: "/assets/images/cards/full/G215_3.png" },
  { img: "/assets/images/cards/full/G216_3.png" },
  { img: "/assets/images/cards/full/G217_3.png" },
  { img: "/assets/images/cards/full/G218_3.png" },
  { img: "/assets/images/cards/full/G219_3.png" },
  { img: "/assets/images/cards/full/G220_3.png" },
  { img: "/assets/images/cards/full/G221_3.png" },
  { img: "/assets/images/cards/full/G222_3.png" },
];

export const Hunters = [
  { img: "/assets/images/cards/full/SUP014.png" },
  { img: "/assets/images/cards/full/SUP015.png" },
  { img: "/assets/images/cards/full/SUP016.png" },
  { img: "/assets/images/cards/full/SUP017.png" },
  { img: "/assets/images/cards/full/SUP018.png" },
  { img: "/assets/images/cards/full/SUP019.png" },
  { img: "/assets/images/cards/full/SUP020.png" },
  { img: "/assets/images/cards/full/SUP021.png" },
  { img: "/assets/images/cards/full/SUP022.png" },
  { img: "/assets/images/cards/full/SUP023.png" },
  { img: "/assets/images/cards/full/SUP024.png" },
  { img: "/assets/images/cards/full/SUP025.png" },
  { img: "/assets/images/cards/full/SUP026.png" },
  { img: "/assets/images/cards/full/SUP027.png" },
  { img: "/assets/images/cards/full/SUP028.png" },
];

export const Items = [
  { img: "/assets/images/cards/full/ITEM016.png" },
  { img: "/assets/images/cards/full/ITEM017.png" },
  { img: "/assets/images/cards/full/ITEM018.png" },
  { img: "/assets/images/cards/full/ITEM019.png" },
  { img: "/assets/images/cards/full/ITEM020.png" },
  { img: "/assets/images/cards/full/ITEM021.png" },
  { img: "/assets/images/cards/full/ITEM022.png" },
  { img: "/assets/images/cards/full/ITEM023.png" },
  { img: "/assets/images/cards/full/ITEM024.png" },
  { img: "/assets/images/cards/full/ITEM025.png" },
];

export const ItemsTools = [
  { img: "/assets/images/cards/full/ITEM026.png" },
  { img: "/assets/images/cards/full/ITEM027.png" },
  { img: "/assets/images/cards/full/ITEM028.png" },
  { img: "/assets/images/cards/full/ITEM029.png" },
  { img: "/assets/images/cards/full/ITEM030.png" },
  { img: "/assets/images/cards/full/ITEM011.png" },
  { img: "/assets/images/cards/full/ITEM012.png" },
  { img: "/assets/images/cards/full/ITEM013.png" },
  { img: "/assets/images/cards/full/ITEM014.png" },
  { img: "/assets/images/cards/full/ITEM015.png" },
];
