import React from "react";

import "./Card.css";
const Card = (props) => (
  <div>
    <div className="Card-header">
      <h2 className="Card-header__title">
        {props.title ? props.title : "Title"}
      </h2>
    </div>
    <div className="Card__body">
      {props.image && (
        <div className="Card__image">
          <img src={props.image.src} alt={props.image.alt} />
        </div>
      )}
      <div className="Card__text">
        <p>{props.text}</p>
        {props.children}
      </div>
    </div>
  </div>
);
export default Card;
