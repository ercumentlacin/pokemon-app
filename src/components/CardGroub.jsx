import React from "react";

import Card from "./Card";

const CardGroub = (props) => {
  return (
    <div className="container">
      <div className="row flex-wrap justify-content-center">
        {[...Array(20)].map((x, i) => (
          <Card number={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardGroub;
