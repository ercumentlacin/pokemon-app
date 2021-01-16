import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ThemeContext from "../context/ThemeContext";

export const CharacterDetail = ({ index, item }) => {
  const { theme } = useContext(ThemeContext);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(item.url);
      setDetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-3 ">
      <div
        className={`card p-3 text-capitalize mx-auto bg-${theme}`}
        style={{ maxWidth: 18 + "rem" }}
      >
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}
          alt={item.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h4>{item.name}</h4>
          <p className="card-text">{item.name}</p>
          <a href={item.url}>link</a>
        </div>
      {/* Detaylar */}
        {details && <h6> {details.base_experience} </h6>}
      </div>

    </div>
  );
};

export default CharacterDetail;
