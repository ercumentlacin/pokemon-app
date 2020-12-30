import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} py-3`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            style={{ maxHeight: 2.2 + "rem" }}
            src="https://pokeapi.co/static/pokeapi_256.888baca4.png"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <li className="nav-link active" aria-current="page">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokodex">
                PokeDex
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/heroes">
                Heroes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
