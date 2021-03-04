import React from "react";
import "./Borders.css";

import Card from "../Card";
import Tile from "../Tile";

const Borders = () => {
  return (
    <div className="Borders hero">
      <div className="Borders__description">
        <h1 className="Borders__title">Other Utilities</h1>
        <p className="Borders__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
          sunt maxime animi debitis pariatur, quo, cum architecto, esse numquam
          doloribus ad quia totam quas.
        </p>
      </div>
      <div>
        <Tile border={"border-left"} />
        <Tile border={"green-border border-left"} />

        <Tile border={"cyan-border  border-left"} />
        <Tile border={"gold-border  border-left"} />
        <Tile border={"border-left"} />
        <Tile border={"green-border border-left"} />

        <Tile border={"cyan-border  border-left"} />
        <Tile border={"gold-border  border-left"} />
      </div>
      <div>
        <Tile border={"border-bottom"} />
        <Tile border={"green-border border-bottom"} />

        <Tile border={"cyan-border  border-bottom"} />
        <Tile border={"gold-border  border-bottom"} />
        <Tile border={"border-bottom"} />
        <Tile border={"green-border border-bottom"} />

        <Tile border={"cyan-border  border-bottom"} />
        <Tile border={"gold-border  border-bottom"} />
      </div>
    </div>
  );
};
export default Borders;
