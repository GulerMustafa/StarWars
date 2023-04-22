import React from "react";
import ShipItem from "./ShipItem";
import "./Ships.css";
import { Link } from "react-router-dom";
import Ship from "../routes/Ship";

function Ships({ coins }) {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Ship />} key={coins.id}>
              <ShipItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Ships;
