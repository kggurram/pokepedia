import React from "react";
import Type from "../../../components/Type.js";
import { useEffect, useState } from "react";
import "./Home.css";
import { getTypes } from "../../../API.js";

function Home() {
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    onLoad();
    console.log(types);
  }, []);

  async function onLoad() {
    setTypes(await getTypes());
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  const filteredTypes = types.filter((types) =>
    types.name.toLowerCase().includes(search.toLowerCase())
  );

 

  return (
    <div className="Home">
      <div className="type-search">
        <h1 className="type-text">Search a Pokémon</h1>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control form-control-lg rounded"
            placeholder="Search through type..."
            onChange={handleChange}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div className="grid-container">
        {filteredTypes.map((types) => {
          return <Type key={types.key} types={types} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
}

export default Home;
