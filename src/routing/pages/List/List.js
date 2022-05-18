import React from "react";
import { getTypeName, getTypeKey, monListByType } from "../../../API";
import { useEffect, useState } from "react";


const List = () => {
  // console.log(typeName)
  const typeName = getTypeName();
  const typeKey = getTypeKey();
  const [monList, setMonList] = useState([]);

  useEffect(() => {
    onLoad();
    // console.log(monList);
  });

  async function onLoad() {
    setMonList(await monListByType(typeKey));
  }

  return (
    <div className="text-white italic bg-slate-900 min-h-screen pl-40 py-20">
      <div className="text-5xl font-bold">{typeName} Pokémon:</div>
      {/* {monList.map((mons) =>{
        return <div>{monList[mons].pokemon.name}</div>;
      })} */}
    </div>
  );
};

export default List;
