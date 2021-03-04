import React from "react";
import "./Cards.css";
import {} from "module";
import Tile from "../Tile";
import {
  faCalendar,
  faComments,
  faDollarSign,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Summary from "../Summary";
const Cards = () => {
  const title = "Lorem ipsum dolor sit amet.";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni atque quas, repellendus voluptas velit provident.";
  return (
    <div className="Cards hero">
      <h1 className="Cards__title">Cards</h1>
      <Tile
        border={"border-left"}
        icon={faCalendar}
        title={"earnings (monthly)"}
        value={"$40,000"}
      />
      <Tile
        border={"green-border border-left"}
        color={"green"}
        icon={faDollarSign}
        title={"earnings (annual)"}
        value={"$215,000"}
      />

      <Tile
        border={"cyan-border  border-left"}
        color={"cyan"}
        icon={faTasks}
        title={"tasks"}
        value={"50%"}
        progressBar
      />
      <Tile
        border={"gold-border  border-left"}
        color={"gold"}
        icon={faComments}
        title={"pending requests"}
        value={"18"}
      />

      <div className="Cards__side-a">
        <Summary noBold title={title} text={text} />
        <Summary title={title} text={text} />
      </div>
      <div className="Cards__side-b">
        <Summary title={title} text={text} dots />
        <Summary title={title} text={text} />
      </div>
    </div>
  );
};
export default Cards;
