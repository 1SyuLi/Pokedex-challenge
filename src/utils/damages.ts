export function setDamages(halfDamage: any, pokemon: any, type: any) {
  let damages = "";

  halfDamage.map(item => {
    if (item === (type.name)) {
      damages = "½";
      return damages;
    }
  });

  pokemon.weaknesses.map(item => {
    if (item === (type.name)) {
      damages = "2";
      return damages;
    }
  });

  return damages;
}
