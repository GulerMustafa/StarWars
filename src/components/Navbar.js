import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onSearch }) {
  const handleOnChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <Link to="/">
      <div className="navbar">
        <h1>
          <span className="starwars">STAR <br/>WARS</span>
        </h1>
      </div>
      <div className="navbar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Name / Model"
          onChange={handleOnChange}
        />
      </div>
    </Link>
  );
}
export default Navbar;
