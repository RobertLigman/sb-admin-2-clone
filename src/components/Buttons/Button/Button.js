import React from "react";
import "./Button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Buttons = (props) => {
  // console.log(props.classes);
  return (
    <button className={`btn ${props.classes}`}>
      <FontAwesomeIcon icon={props.icon} className="btn__icon" />
      {props.children}
    </button>
  );
};
export default Buttons;
