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

  // console.log(types);

  const handleClick = (e) => {
    console.log(e);
  };

  const filteredTypes = types.filter((types) =>
    types.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-white italic bg-slate-900 min-h-screen">
      <h1 className="text-center text-5xl pt-16 font-bold">Search a Pokémon</h1>
      <div className="max-w-md my-5 mx-auto">
        <input
          type="search"
          className="form-control form-control-lg rounded"
          placeholder="Search through type..."
          onChange={handleChange}
        />
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 place-items-center">
        {filteredTypes.map((types) => {
          return <Type key={types.key} types={types} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
}

export default Home;
