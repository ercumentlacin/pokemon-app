import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";

import ThemeContext from "../context/ThemeContext";

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  const body = document.body;
  theme == "light"
    ? body.classList.remove("bg-dark") & body.classList.add("bg-light")
    : body.classList.remove("bg-light") & body.classList.add("bg-dark");

  return (
    <main className={`bg-${theme}`}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokodex">
            <About />
          </Route>
          <Route path="/heroes">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default AppContainer;
