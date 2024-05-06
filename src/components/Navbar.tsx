import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>PT Maps Australia</h1>
      <nav>
        <ul>
          <li>
            <a href="/home" className="nav-button">
              Home
            </a>
          </li>
          <li>
            <a href="/home" className="nav-button">
              Trains
            </a>
          </li>
          <li>
            <a href="/home" className="nav-button">
              Buses
            </a>
          </li>
          <li>
            <a href="/home" className="nav-button">
              Trams
            </a>
          </li>
        </ul>
      </nav>
      <span className="search-bar">
        <p>
          Search <input></input>
          <button>Q</button>
        </p>
      </span>
    </div>
  );
}

export default Navbar;
