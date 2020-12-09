import React from "react";
import Card from "./Card";
import "./Illustrations.css";
const Illustrations = (props) => (
  <Card title={props.title}>
    {props.image && (
      <div className="Card__image">
        <img src={props.image.src} alt={props.image.alt} />
      </div>
    )}
    <div className="Card__text">
      <p>{props.text}</p>
      {props.children}
    </div>
  </Card>
);
export default Illustrations;
