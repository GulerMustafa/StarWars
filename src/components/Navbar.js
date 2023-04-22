import React, { useState, useEffect } from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ coins, onSearch }) {
  const [filteredCoins, setFilteredCoins] = useState(coins);
  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);
  const filterCoins = (event) => {
    let filterText = event.target.value;
    let tempCoins = [...coins];
    setFilteredCoins(
      // eslint-disable-next-line array-callback-return
      tempCoins.filter((coin) => {
        if (
          coin.symbol?.toLowerCase().includes(filterText) ||
          coin.name?.toLowerCase().includes(filterText)
        )
          return coin;
      })
    );
  };

  console.log(filteredCoins);
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </div>
      <div className="navbar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search.."
          onChange={filterCoins}
        />
      </div>
    </Link>
  );
}

export default Navbar;
