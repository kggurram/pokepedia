import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import List from "../routing/pages/List/List";
import { setType } from "../API";
import "./Type.css";

const Type = ({ types }) => {
  const [typeName, setTypeName] = useState(types.name);
  const [typeIMG, setTypeIMG] = useState(types.image);
  const [redirect, setRedirect] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {});

  function handleClick() {
    console.log(typeName);
    setRedirect(true);
  }

  if (redirect) {
    // console.log(typeName);
    setType(types.key, types.name);
    return <Navigate to="/list"></Navigate>;
  }

  return (
    <div
      className="bg-slate-600 hover:bg-white hover:text-slate-600 text-center my-16 px-16 py-4 outline outline-8 rounded-full first-line:outline-white"
      onClick={handleClick}
    >
      <img src={typeIMG} alt="type" />
      <h1 className="text-3xl pt-6">{typeName}</h1>
    </div>
  );
};

export default Type;
