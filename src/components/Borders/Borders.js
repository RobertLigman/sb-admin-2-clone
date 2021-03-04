import React from "react";
import "./Borders.css";
import Tile from "../Tile";

const Borders = () => {
  return (
    <div className="Borders hero">
      <div className="Borders__description">
        <h1 className="Borders__title">Border Utilities</h1>
        <p className="Borders__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
          sunt maxime animi debitis pariatur, quo, cum architecto, esse numquam
          doloribus ad quia totam quas.
        </p>
      </div>
      <div>
        <Tile
          border={"border-left Borders__Tile"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"green-border border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />

        <Tile
          border={"cyan-border  border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"gold-border  border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"green-border border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />

        <Tile
          border={"cyan-border  border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"gold-border  border-left"}
          title=".border-left"
          titleClasses="Borders__title-class"
        />
      </div>
      <div>
        <Tile
          border={"border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"green-border border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />

        <Tile
          border={"cyan-border  border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"gold-border  border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"green-border border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />

        <Tile
          border={"cyan-border  border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
        <Tile
          border={"gold-border  border-bottom"}
          title=".border-bottom"
          titleClasses="Borders__title-class"
        />
      </div>
    </div>
  );
};
export default Borders;
