import React from "react";
import ShipItem from "./ShipItem";
import "./Ships.css";
import { Link } from "react-router-dom";
import Ship from "../routes/Ship";

function Ships({ ships }) {
  
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Ship Name</p>
          <p>Model</p>
          <p>Hyperdrive Rating</p>
        </div>
        {ships.map((ship, index) => {
          return (
            <Link to={`/ship/${ship.url.split('/')[5]}`} element={<Ship link={ship.url} />} key={index}>
              <ShipItem ships={ship} key={index}  />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Ships;
