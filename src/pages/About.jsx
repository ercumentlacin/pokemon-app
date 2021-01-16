import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ThemeContext from "../context/ThemeContext";
import CharacterDetail from "../components/CharacterDetail";
const About = () => {
  // theme changes area
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";

  // get width axios
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      setData(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className={`container bg-${theme} text-${constrat}`}>
      <h1 className="d-flex justify-content-center display-2">PokeDex</h1>
      <div>
        <div className="row">
          {data?.map((item, index) => (
            <CharacterDetail key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
