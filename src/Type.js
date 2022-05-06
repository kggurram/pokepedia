import React, { useState, useEffect } from "react";

const Type = ({ types }) => {
  const [typeURL, setTypeURL] = useState(types.url);
  const [typeName, setTypeName] = useState(types.name);
  const [typeIMG, setTypeIMG] = useState(types.image);

  // console.log(types);

  useEffect(() => {});

  return (
    <div className="type-container">
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
