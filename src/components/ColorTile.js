import React from "react";
import "./ColorTile.css";

const ColorTile = (props) => (
  <div
    className="ColorTile"
    style={{
      backgroundColor: props.color,
      color: props.theme ? "#858796" : "white",
    }}>
    <h3 className="ColorTile__title">{props.title}</h3>
    <p className="ColorTile__text">{props.text}</p>
  </div>
);
export default ColorTile;
