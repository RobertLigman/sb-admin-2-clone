import React from "react";
import Card from "./Card";
import "./Summary.css";

const Summary = (props) => (
  <Card title={props.title}>
    <div className="Card__text">
      <p>{props.text}</p>
    </div>
  </Card>
);
export default Summary;
