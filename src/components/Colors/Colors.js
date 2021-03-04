import React from "react";
import "./Colors.css";

import Card from "../Card";

const Colors = () => {
  return (
    <div className="Colors hero">
      <div className="Colors__description">
        <h1 className="Colors__title">Colors</h1>
        <p className="Colors__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
          sunt maxime animi debitis pariatur, quo, cum architecto, esse numquam
          doloribus ad quia totam quas.
        </p>
      </div>
      <div>
        <Card title="Custom Text Color Utilities"></Card>
        <Card title="Custom Font Size Utilities"></Card>
      </div>

      <Card title="Custom Background Gradient Utilities"></Card>
      <Card title="Custom Grayscale Background Utilities"></Card>
    </div>
  );
};
export default Colors;
