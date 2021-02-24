import React from "react";
import "./Buttons.css";
import ColorTile from "../ColorTile";
import Card from "../Card";
import {
  fabFacebookF,
  faCheck,
  faInfo,
  faExclamationTriangle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button/Button";
const Buttons = () => {
  const icons = [
    { name: faCheck, color: "primary" },
    { name: faCheck, color: "success" },
    { name: faInfo, color: "info" },
    { name: faExclamationTriangle, color: "warning" },
    { name: faTrash, color: "danger" },
  ];
  return (
    <div className="Buttons hero">
      <div className="Card-container">
        <Card title="Circle Buttons">
          <p>
            {" "}
            Use Font Awesome Icons (included with this theme package) along with
            the circle buttons as shown in the examples below!
          </p>
          <p className="danger">.btn-circle</p>
          <div>
            {icons.map((item) => (
              <Button icon={item.name} color={item.color} />
            ))}
          </div>
          <p className="danger">.btn-circle-sm</p>
          <div>
            {icons.map((item) => (
              <Button icon={item.name} color={item.color} />
            ))}
          </div>
          <p className="danger">.btn-circle-lg</p>
          <div>
            {icons.map((item) => (
              <Button icon={item.name} color={item.color} />
            ))}
          </div>
        </Card>
        <Card />
      </div>
      <Card />
      {/* <ColorTile /> */}
    </div>
  );
};
export default Buttons;
