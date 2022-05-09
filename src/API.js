import types from "./types.json";

export function getTypes() {
  let typesOfMons = types.results;

  for (let i = 0; i < types.results.length; i++) {
    typesOfMons[i].image = require(`./typeIcons/${lowerFirst(
      typesOfMons[i].name
    )}.png`);
    typesOfMons[i].name = capFirst(types.results[i].name);
    typesOfMons[i].key = i;
  }
  return typesOfMons;
}

export function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowerFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}