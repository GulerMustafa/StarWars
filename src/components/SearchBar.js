import React from "react";
import "./Navbar.css";

function SearchBar({ onSearch }) {
  const handleOnChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="navbar">
      <input type="text" id="search" name="search" placeholder="Name / Model" onChange={handleOnChange} />
    </div>
  );
}
export default SearchBar;
