import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import ThemeContext from "../context/ThemeContext";
import { Route } from "react-router-dom";

function PortfolioDetail(props) {
  const { heroesID } = useParams();
  const heroes = portfolioData.filter(item => item._id === Number(heroesID));

  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="container">
      <div className={`bg-${theme} text-${constrat}`}>
        <hr />
        <div className="d-flex justify-content-center">
          <img src={`${heroes[0].imgURL}`} />
        </div>
        <h1 class="mb-3">{heroes[0].title}</h1>
        <p>{heroes[0].detail}</p>
      </div>
    </div>
  );
}

export default PortfolioDetail;
