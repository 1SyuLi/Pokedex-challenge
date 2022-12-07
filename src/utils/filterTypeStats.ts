export function FilterApiIdByType(type: string) {
  switch (type) {
  case "normal":
    return 1;
  case "fighting":
    return 2;
  case "flying":
    return 3;
  case "poison":
    return 4;
  case "ground":
    return 5;
  case "rock":
    return 6;
  case "bug":
    return 7;
  case "ghost":
    return 8;
  case "steel":
    return 9;
  case "fire":
    return 10;
  case "water":
    return 11;
  case "grass":
    return 12;
  case "electric":
    return 13;
  case "psychic":
    return 14;
  case "ice":
    return 15;
  case "dragon":
    return 16;
  case "dark":
    return 17;
  case "fairy":
    return 18;
  }
}
