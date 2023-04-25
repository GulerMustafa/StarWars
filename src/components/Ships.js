import React, { useState, useEffect } from "react";
import ShipItem from "./ShipItem";
import "./Ships.css";
import { Link } from "react-router-dom";
import Ship from "../routes/Ship";
import SearchBar from "./SearchBar";
import axios from "axios";

function Ships() {
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
        if (ship.model?.toLowerCase().includes(filterText) || ship.name?.toLowerCase().includes(filterText)) return ship;
      })
    );
  };

  return (
    <div className="container">
      <SearchBar onSearch={(res) => filterShips(res)} />
      <div>
        <div className="heading">
          <p></p>
          <p className="coin-name">Ship Name</p>
          <p>Model</p>
          <p>Hyperdrive Rating</p>
        </div>
        {filteredShips.map((ship, index) => {
          return (
            <Link to={`/ship/${ship.url.split("/")[5]}`} element={<Ship link={ship.url} />} key={index}>
              <ShipItem ships={ship} key={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Ships;
