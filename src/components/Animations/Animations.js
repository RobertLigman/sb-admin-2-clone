import React, { useState } from "react";
import "./Animations.css";

import Card from "../Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Dropdown from "../Dropdown/Dropdown";
const Animations = () => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const toggleDropdown = () => {
    setDropDownActive((prevState) => !prevState);
  };
  return (
    <div className="Animation hero">
      <div className="Animation__description">
        <h1 className="Animation__title">Animation Utilities</h1>
        <p className="Animation__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
          sunt maxime animi debitis pariatur, quo, cum architecto, esse numquam
          doloribus ad quia totam quas.
        </p>
      </div>

      <div className="Card-container">
        <Card title="Grow In Animation Utilty">
          <div className="text-container">
            <p className="text">CSS transition group</p>
            Navbar Dropdown Example:
            <nav className="nav">
              <div className="Dropdown" onClick={toggleDropdown}>
                <p>
                  Dropdown&nbsp;
                  <FontAwesomeIcon icon={faSortDown} />
                </p>
                <Dropdown dropdownActive={dropdownActive} />
              </div>
            </nav>
          </div>
        </Card>
      </div>

      <Card title="Fade In Animation Utilty">
        <div className="rotation-container">
          <div className="rotation-container__element">.rotate-15</div>
          <div className="hr"></div>
          <div className="rotation-container__element n">.rotate-n-15</div>
        </div>
      </Card>
    </div>
  );
};
export default Animations;
