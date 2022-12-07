import grassPng from "../assets/all/types/grass.png";
import bugPng from "../assets/all/types/bug.png";
import darkPng from "../assets/all/types/dark.png";
import dragonPng from "../assets/all/types/dragon.png";
import electricPng from "../assets/all/types/eletric.png";
import fairyPng from "../assets/all/types/fairy.png";
import fightingPng from "../assets/all/types/fighting.png";
import firePng from "../assets/all/types/fire.png";
import flyingPng from "../assets/all/types/flying.png";
import ghostPng from "../assets/all/types/ghost.png";
import waterPng from "../assets/all/types/water.png";
import normalPng from "../assets/all/types/normal.png";
import poisonPng from "../assets/all/types/poison.png";
import psychicPng from "../assets/all/types/psychic.png";
import rockPng from "../assets/all/types/rock.png";
import steelPng from "../assets/all/types/steel.png";

export const TypesArray = [
  { name: "grass", id: 0 },
  { name: "bug", id: 1 },
  { name: "dark", id: 2 },
  { name: "dragon", id: 3 },
  { name: "electric", id: 4 },
  { name: "fairy", id: 5 },
  { name: "fighting", id: 6 },
  { name: "fire", id: 7 },
  { name: "flying", id: 8 },
  { name: "ghost", id: 9 },
  { name: "water", id: 10 },
  { name: "normal", id: 11 },
  { name: "poison", id: 12 },
  { name: "psychic", id: 13 },
  { name: "rock", id: 14 },
  { name: "steel", id: 15 },
];


export function handleIconType(type: string) {
  switch (type) {
  case "grass":
    return grassPng;
  case "bug":
    return bugPng;
  case "dark":
    return darkPng;
  case "dragon":
    return dragonPng;
  case "electric":
    return electricPng;
  case "fairy":
    return fairyPng;
  case "fighting":
    return fightingPng;
  case "fire":
    return firePng;
  case "flying":
    return flyingPng;
  case "ghost":
    return ghostPng;
  case "water":
    return waterPng;
  case "normal":
    return normalPng;
  case "poison":
    return poisonPng;
  case "psychic":
    return psychicPng;
  case "rock":
    return rockPng;
  case "steel":
    return steelPng;
  default:
    return normalPng;
  }
}
