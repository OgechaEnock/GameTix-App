// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>GAMETIX</h1>
      <div className="search-group">
        <input type="text" placeholder="Search..." />
        <Link to="/" className="btn-reset">Reset</Link>
      </div>
    </nav>
  );
}

export default Navbar;
