import React from "react";
import "./Animations.css";

import Card from "../Card";

import ProgressBar from "../ProgressBar";

const Animations = () => {
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
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus, eum.
            </p>
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
