import axios from "axios";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import "./Ship.css";

function Ship() {
  const params = useParams();
  const [ship, setShip] = useState({});
  const pilots = ["Chewbacca", "Rey", "Antoc Merrick", "Poe Dameron", "Kylo Ren", "Luke Skywalker", "Wedge Antilles", "Plo Koon", "Han Solo", "Anakin Skywalker"];
  const random = Math.floor(Math.random() * pilots.length);
  const url = `https://swapi.dev/api/starships/${params.shipId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setShip(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="ship-container">
        <div className="content">{ship.name && <img className="ship-pic" src={require(`../assets/ships/${ship.name.replace(/\s/g, "-").toLowerCase()}.webp`)} alt="" />}</div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn-left">Hyperdrive Rating - {ship.hyperdrive_rating}</span>
            <span className="rank-btn-right">Starship Class - {ship.starship_class}</span>
          </div>
          <div className="info">
            <div className="ship-heading">
              <p>{ship.model}</p>
            </div>
            <div class="ship-price">{ship.cost_in_credits && <h1>{Number(ship.cost_in_credits).toLocaleString("en-US", { style: "currency", currency: "USD" })}</h1>}</div>
          </div>
        </div>
        <div className="content">
          <div className="manufacturer">
            <h2>Manufacturer</h2>
            {ship.manufacturer && <p>{ship.manufacturer.replace(",", " /")}</p>}
          </div>
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>Length</h4>
                {ship.length ? <p>{ship.length} m</p> : null}
              </div>
              <div className="row">
                <h4>Max Atmosphering Speed</h4>
                {ship.max_atmosphering_speed && <p>{ship.max_atmosphering_speed} km/h</p>}
              </div>
              <div className="row">
                <h4>Cargo Capacity</h4>
                {ship.cargo_capacity ? <p>{ship.cargo_capacity}</p> : null}
              </div>
              <div className="row">
                <h4>Pilot</h4>
                <p>{pilots[random]}</p>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Crew</h4>
                {ship.crew && <p>{ship.crew}</p>}
              </div>
              <div className="row">
                <h4>Passengers</h4>
                {ship.passengers && <p>{ship.passengers}</p>}
              </div>
              <div className="row">
                <h4>MGLT</h4>
                {ship.consumables && <p>{ship.MGLT}</p>}
              </div>
              <div className="row">
                <h4>Consumables</h4>
                {ship.consumables && <p>{ship.consumables}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ship;