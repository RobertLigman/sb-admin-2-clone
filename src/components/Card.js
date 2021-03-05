import React from "react";

import "./Card.css";
const Card = (props) => (
  <div className={`Card ${props.classes ? props.classes : ""}`}>
    <div className="Card-header">
      <h2
        className={`Card-header__title  ${
          props.noBold ? "Card-header__title--no-bold" : ""
        }`}>
        {props.title ? props.title : "Title"}
      </h2>
      {props.dots && (
        <div className="dots-container">
          <div className="dots"></div>
        </div>
      )}
    </div>
    <div className="Card__body">{props.children}</div>
  </div>
);
export default Card;
