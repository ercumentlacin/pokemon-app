import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Card = props => {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div
        className={`card mx-auto mt-3 bg-${constrat} text-${theme}`}
        style={{ maxWidth: 18 + "rem" }}
      >
        <img
          src={`https://i.picsum.photos/id/1000/367/267.jpg?hmac=uO9iQNujyGpqk0Ieytv_xfwbpy3ENW4PhnIZ1gsnldI`}
          className="card-img-top"
          alt="some image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title {props.number + 1} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
