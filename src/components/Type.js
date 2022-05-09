import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Type.css";

const Type = ({ types }) => {
  const [typeName, setTypeName] = useState(types.name);
  const [typeIMG, setTypeIMG] = useState(types.image);
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick() {
    console.log(typeName);
    openModal();
    console.log(isOpen);
  }

  useEffect(() => {});

  return (
    <div className="type-container" onClick={handleClick}>
      <div className="type-row">
        <div className="type">
          <img onClick={handleShow} src={typeIMG} alt="type" />

          <h1>{typeName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Type;
