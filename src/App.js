import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Ships from "./components/Ships";
import Ship from "./routes/Ship";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [ships, setShips] = useState([]);
  const [filteredShips, setFilteredShips] = useState(ships);
  useEffect(() => {
    setFilteredShips(ships);
  }, [ships]);
  const filterShips = (filterText) => {
    let tempShips = [...ships];
    setFilteredShips(
      // eslint-disable-next-line array-callback-return
      tempShips.filter((ship) => {
        if (
          ship.model?.toLowerCase().includes(filterText) ||
          ship.name?.toLowerCase().includes(filterText)
        )
          return ship;
      })
    );
  };

  const url = "https://swapi.dev/api/starships/";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setShips(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar onSearch={(res) => filterShips(res)} />
      <Routes>
        <Route path="/" element={<Ships ships={filteredShips} />} />
        <Route path="/ship" element={<Ship />}>
          <Route path=":shipId" element={<Ship />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
