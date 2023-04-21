import React from "react";
import CoinItem from "./CoinItem";

function Coins({ coins }) {
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
        {coins.map((coins, index) => {
          return <CoinItem coins={coins} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Coins;
