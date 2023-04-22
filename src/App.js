import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Ships from "./components/Ships";
import Ship from "./routes/Ship";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(coins);
  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);
  const filterCoins = (filterText) => {
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

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar onSearch={(res) => filterCoins(res)} />
      <Routes>
        <Route path="/" element={<Ships coins={filteredCoins} />} />
        <Route path="/coin" element={<Ship />}>
          <Route path=":coinId" element={<Ship />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
