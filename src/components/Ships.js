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
        setHasNext(response.data.next != null);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [ships, setShips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
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
  const onLoadMore = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${url}?page=${currentPage + 1}`);
      setFilteredShips(filteredShips.concat(res.data.results));
      setCurrentPage(currentPage + 1);
      setHasNext(res.data.next != null);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <SearchBar onSearch={(res) => filterShips(res)} />
      <div>
        <div className="heading">
          <p></p>
          <p className="ship-name">Ship Name</p>
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
      {hasNext && (
        <button onClick={onLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Ships;
