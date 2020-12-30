import React, { useContext } from "react";
import { portfolioData } from "../data/portfolioData";
import { Link, Switch, Route } from "react-router-dom";
import PortfolioDetail from "./PortfolioDetail";
import ThemeContext from "../context/ThemeContext";

const Portfolio = () => {
  const portfolioMap = portfolioData.map((item, key) => (
    <li className="mx-3 py-5" key={key}>
      <Link to={`/heroes/${item._id}`}>{item.title}</Link>
    </li>
  ));

  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="container">
      <div className={`text-${constrat}`}>
        <h1 className="d-flex flex-wrap justify-content-center mb-5">Heroes</h1>
        <hr />
        <div className="mx- auto d-flex justify-content-center">
          {portfolioMap}
        </div>
        <Switch>
          <Route path="/heroes/:heroesID">
            <PortfolioDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
