import React from "react";
import "./Buttons.css";
import ColorTile from "../ColorTile";
import Card from "../Card";
const Buttons = () => {
  return (
    <div className="Buttons hero">
      <div className="Card-container">
        <Card />
        <Card />
      </div>
      <Card />
      {/* <ColorTile /> */}
    </div>
  );
};
export default Buttons;
