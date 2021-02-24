import React from "react";
import "./Button.css";
import {
  fabFacebookF,
  faCheck,
  faInfo,
  faExclamationTriangle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Buttons = (props) => {
  return (
    <button className={`btn btn-circle btn-${props.color}`}>
      <FontAwesomeIcon icon={props.icon} className="btn__icon" />
    </button>
  );
};
export default Buttons;
