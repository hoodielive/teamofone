import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Antoinette Robertson</div>
      </div>

      <TimeUntil />
    </div>
  );
};

export default Featured;
