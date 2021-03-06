const axios = require("axios");

// FORMAT
// async function makeGetRequest() {

//   let res = await axios.get('http://webcode.me');

//   let data = res.data;
//   console.log(data);
// }

export async function getTypes() {
  let res = await axios.get("https://pokeapi.co/api/v2/type");
  let typesOfMons = res.data.results;
  typesOfMons.pop();
  typesOfMons.pop();
  for (let i = 0; i < res.data.results.length; i++) {
    typesOfMons[i].image = require(`./typeIcons/${lowerFirst(
      typesOfMons[i].name
    )}.png`);
    typesOfMons[i].name = capFirst(res.data.results[i].name);
    typesOfMons[i].key = i;
  }
  return typesOfMons;
}

export async function getTypeList() {
  let res = await axios.get();
}

export function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowerFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

let typeKey = 0;
let typeName = "";

export function setType(int, string) {
  typeKey = int;
  typeName = string;
}

export function getTypeKey() {
  return typeKey;
}

export function getTypeName() {
  return typeName;
}

export async function monListByType(int){
  let res = await axios.get("https://pokeapi.co/api/v2/type/" + `${int+1}`);
  let list = res.data.pokemon;
  console.log(list[0].pokemon.name);
}