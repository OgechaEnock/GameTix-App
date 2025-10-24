import React from "react";

function Navbar({ onSearch, onReset }) {
  return (
    <nav className="navbar">
      <h1>GAMETIX</h1>
      <div className="search-group">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button onClick={onReset}>Reset</button>
      </div>
    </nav>
  );
}

export default Navbar;
