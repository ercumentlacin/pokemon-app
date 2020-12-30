import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ThemeContext from "../context/ThemeContext";

const About = () => {
  // theme changes area
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";

  // get width axios
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=151");

      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className={`container bg-${theme} text-${constrat}`}>
      <h1 className="d-flex justify-content-center display-2">PokeDex</h1>
      <div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 my-3 ">
              <div
                className={`card p-3 text-capitalize mx-auto bg-${theme}`}
                style={{ maxWidth: 18 + "rem" }}
              >
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${index +
                    1}.png`}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>{item.name}</h4>
                  <p className="card-text">{item.name}</p>
                  <a href={item.url}>link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
