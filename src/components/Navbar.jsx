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
            src="https://raw.githubusercontent.com/ercumentlacin/pokemon-app/master/src/images/pokeapi_256.png"
            alt="Pokemon App Logo"
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
              <Link className="nav-link" to="/">
                Home
              </Link>
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
