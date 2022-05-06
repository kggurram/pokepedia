import React from "react";

const Mon = ({ image, name, symbol, mon1, mon2 }) => {
  return (
    <div className="mon-container">
      <div className="mon-row">
        <div className="mon">
          {/* <img src={image} alt="mon"/> */}
          <h1>{name}</h1>
          {/* <p className="mon-symbol">{symbol}</p> */}
        </div>
        <div className="mon-data">
          {/* <p className="mon-1">${mon1}</p>
                <p className="mon-2">${mon2}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Mon;
