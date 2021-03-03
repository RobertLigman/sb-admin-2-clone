import React from "react";
import "./Other.css";

import Card from "../Card";
import ProjectItem from "../ProjectItem";
import ProgressBar from "../ProgressBar";

const Other = () => {
  return (
    <div className="Other hero">
      <div className="Other__description">
        <h1 className="Other__title">Other Utilities</h1>
        <p className="Other__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
          sunt maxime animi debitis pariatur, quo, cum architecto, esse numquam
          doloribus ad quia totam quas.
        </p>
      </div>

      <div className="Card-container">
        <Card title="Overflow Hidden Utility">
          <div className="text-container">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus, eum.
            </p>
          </div>
        </Card>
        <Card title="Progress Small Utility">
          <div className="bars">
            <div>
              <p>Normal Progress Bar</p>
              <ProgressBar color="#4e73df" width="60%" />
            </div>
            <div>
              <p>Small Progress Bar</p>
              <ProgressBar color="#4e73df" width="60%" height="10px" />
            </div>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            eum.
          </p>
        </Card>
        <Card title="Progress Small Utility">
          <div className="bars">
            <div>
              <p>Normal Progress Bar</p>
              <ProgressBar color="#4e73df" width="60%" />
            </div>
            <div>
              <p>Small Progress Bar</p>
              <ProgressBar color="#4e73df" width="60%" height="10px" />
            </div>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            eum.
          </p>
        </Card>
      </div>

      <Card title="Rotation Utilities">
        <div className="rotation-container">
          <div className="rotation-container__element">.rotate-15</div>
          <div className="hr"></div>
          <div className="rotation-container__element n">.rotate-n-15</div>
        </div>
      </Card>
    </div>
  );
};
export default Other;
