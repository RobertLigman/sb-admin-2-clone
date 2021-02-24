import React from "react";
import "./Buttons.css";

import Card from "../Card";
import {
  faCheck,
  faInfo,
  faExclamationTriangle,
  faTrash,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button/Button";
const Buttons = () => {
  const icons = [
    { name: faCheck, classes: "btn-primary btn-circle" },
    { name: faCheck, classes: "btn-success btn-circle" },
    { name: faInfo, classes: "btn-info btn-circle" },
    { name: faExclamationTriangle, classes: "btn-warning btn-circle" },
    { name: faTrash, classes: "btn-danger btn-circle" },
  ];
  return (
    <div className="Buttons hero">
      <h1 className="Buttons__title">Buttons</h1>
      <div className="Card-container">
        <Card title="Circle Buttons">
          <div className="text-container">
            <p className="text">
              Use Font Awesome Icons (included with this theme package) along
              with the circle buttons as shown in the examples below!
            </p>
          </div>
          <p className="danger">.btn-circle</p>
          <div>
            {icons.map((item) => (
              <Button icon={item.name} classes={item.classes} />
            ))}
          </div>
          <p className="danger">.btn-circle-sm</p>
          <div>
            {icons.map((item) => (
              <Button
                icon={item.name}
                classes={`${item.classes} btn-circle-sm`}
              />
            ))}
          </div>
          <p className="danger">.btn-circle-lg</p>
          <div>
            {icons.map((item) => (
              <Button
                icon={item.name}
                classes={`${item.classes} btn-circle-lg`}
              />
            ))}
          </div>
        </Card>
        <Card title="Brand Buttons">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptates ipsum distinctio architecto nostrum, velit ea minima in,
            necessitatibus placeat a officiis culpa delectus? Voluptatum a natus
            aliquam excepturi voluptas.
          </p>
          <div className="brand-buttons">
            <Button classes="btn-danger btn-block">.btn-google</Button>
            <Button classes="btn-primary btn-block">.btn-facebook</Button>
          </div>
        </Card>
      </div>
      <Card title="Split Buttons with Icon">
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi deleniti repellat, ab nam laudantium molestias hic, labore
          consectetur dolorem libero nulla ex impedit explicabo.
        </p>
        <div className="split-button-container">
          <Button classes="btn-primary btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button Primary
          </Button>
          <Button classes="btn-success btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button Success
          </Button>
          <Button classes="btn-info btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button Info
          </Button>
          <Button classes="btn-warning btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button Warning
          </Button>
          <Button classes="btn-danger btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button Danger
          </Button>
          <Button classes="btn-secondary btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button secondary
          </Button>
          <Button classes="btn-light btn-split">
            <div>
              <FontAwesomeIcon icon={faFlag} className="btn__icon" />
            </div>
            Split Button light
          </Button>
        </div>
      </Card>
      {/* <ColorTile /> */}
    </div>
  );
};
export default Buttons;
