import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <CSSTransition
      in={props.dropdownActive}
      classNames="toggle-opacity"
      unmountOnExit>
      <div className="Dropdown__elements">
        <a href="#" className="elements__link">
          Action
        </a>
        <a href="#" className="elements__link">
          Another action
        </a>
        <hr className="elements__split" />
        <a href="#" className="elements__link">
          Something else here
        </a>
      </div>
    </CSSTransition>
  );
};
export default Dropdown;
