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
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#0B092D",
  },
  {
    name: "Dragon",
    icon: Dragon,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#8D1F1C",
  },
  {
    name: "Electric",
    icon: Electric,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#CFBF2D",
  },
  {
    name: "Fight",
    icon: Fight,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#751B23",
  },
  {
    name: "Flame",
    icon: Flame,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#ED7249",
  },
  {
    name: "Grass",
    icon: Grass,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#B3DF82",
  },
  {
    name: "Iron",
    icon: Iron,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#8C7E77",
  },
  {
    name: "Normal",
    icon: Normal,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#FFFFFF",
  },
  {
    name: "Psychic",
    icon: Psychic,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#7A398B",
  },
  {
    name: "Water",
    icon: Water,
    description: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
    color: "#4B7CB1",
  },
];

export const cryptids = [
  {
    img: "/assets/images/cards/full/G001_1.png",
  },
  {
    img: "/assets/images/cards/full/G033_1.png",
  },
  {
    img: "/assets/images/cards/full/G052_1.png",
  },
  {
    img: "/assets/images/cards/full/G088_1.png",
  },
  {
    img: "/assets/images/cards/full/G107_1.png",
  },
  {
    img: "/assets/images/cards/full/G130_1.png",
  },
  {
    img: "/assets/images/cards/full/G155_1.png",
  },
  {
    img: "/assets/images/cards/full/G163_1.png",
  },
  {
    img: "/assets/images/cards/full/G168_1.png",
  },
  {
    img: "/assets/images/cards/full/G171_5.png",
  },
];
