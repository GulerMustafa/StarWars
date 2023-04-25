import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <div className="navbar">
        <h1>
          <span className="starwars">
            STAR <br />
            WARS
          </span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
