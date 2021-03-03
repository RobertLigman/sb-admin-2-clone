import React from "react";
import Card from "./Card";
import "./Summary.css";

const Summary = (props) => {
  return (
    <Card
      title={props.title}
      classes={props.class}
      noBold={props.noBold}
      dots={props.dots}>
      <div className="Card__text">
        <p>{props.text}</p>
      </div>
    </Card>
  );
};
export default Summary;
