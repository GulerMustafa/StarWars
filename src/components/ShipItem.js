import React from "react";
import "./Ships.css";

function ShipItem({ ships }) {
  // console.log(ships.name.replace(/\s/g,'-').toLowerCase())
  return (
    <div className="ship-row">
      <div className="ship-img">
        <img src={require(`../assets/ships/${ships.name.replace(/\s/g,'-').toLowerCase()}.webp`)} alt="" />
      </div>
      <p className="ship-name">{ships.name}</p>
      <p className="ship-model">{ships.model}</p>
      <p>{ships.hyperdrive_rating}</p>
    </div>
  );
}

export default ShipItem;
