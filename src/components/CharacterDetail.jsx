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
          <hr />
          <div className="d-flex justify-content-between">
            <strong>Experince:</strong>{" "}
            {details && <sapan> {details.base_experience} </sapan>}
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Height:</strong>{" "}
            {details && <sapan> {details.height} </sapan>}
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Weight:</strong>{" "}
            {details && <sapan> {details.weight} </sapan>}
          </div>
        </div>
        {/* Detaylar */}
      </div>
    </div>
  );
};

export default CharacterDetail;
