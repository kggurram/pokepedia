import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Type from "./Type";

function App() {
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => {
        const typesOfMons = res.data.results;
        typesOfMons.pop();
        typesOfMons.pop();
        for (let i = 0; i < res.data.results.length; i++) {
          typesOfMons[i].image = require(`./types/${typesOfMons[i].name}.png`);
          typesOfMons[i].name = capFirst(res.data.results[i].name);
          typesOfMons[i].key = i;
        }

        setTypes(typesOfMons);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(types);

  const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const filteredTypes = types.filter((types) =>
    types.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="poke-app">
      <div className="type-search">
        <h1 className="type-text">Search a Pokémon</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="type-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filteredTypes.map((types) => {
        return <Type types={types} />;
      })}
    </div>
  );
}

export default App;
