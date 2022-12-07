export function handlePokemonIndex(index: number) {
  if (index <= 9) {
    return `#00${index}`;
  } else if (index <= 99) {
    return `#0${index}`;
  } else {
    return `#${index}`;
  }
}
