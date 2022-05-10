import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";

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
    return <Navigate to="/list"></Navigate>;
  }


  return (
    <div className="type-container" onClick={handleClick}>
      <div className="type-row">
        <div className="type">
          <img src={typeIMG} alt="type" />

          <h1>{typeName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Type;
