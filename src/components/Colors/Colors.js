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
        <Card title="Custom Text Color Utilities">
          <p className="text-gray-100 bg-dark">.text-gray-100</p>
          <p className="text-gray-200 bg-dark">text-gray-200</p>
          <p className="text-gray-300 bg-dark">text-gray-300</p>
          <p className="text-gray-400 bg-dark">text-gray-400</p>
          <p className="text-gray-500 ">text-gray-500</p>
          <p className="text-gray-600">text-gray-600</p>
          <p className="text-gray-700 ">text-gray-700</p>
          <p className="text-gray-800 ">text-gray-800</p>
          <p className="text-gray-900 k">text-gray-900</p>
        </Card>
        <Card title="Custom Font Size Utilities">
          <p className="text-xs">.text-xs</p>
          <p className="text-lg">.text-lg</p>
        </Card>
      </div>

      <Card title="Custom Background Gradient Utilities">
        <div className="bg-gradient-primary">
          <p className="text-gray-100">.bg-gradient-primary</p>
        </div>
        <div className="bg-gradient-secondary">
          <p className="text-gray-100">.bg-gradient-secondary</p>
        </div>
        <div className="bg-gradient-info">
          <p className="text-gray-100">.bg-gradient-info</p>
        </div>
        <div className="bg-gradient-success">
          <p className="text-gray-100">.bg-gradient-success</p>
        </div>
        <div className="bg-gradient-warning">
          <p className="text-gray-100">.bg-gradient-warning</p>
        </div>
        <div className="bg-gradient-danger">
          <p className="text-gray-100">.bg-gradient-danger</p>
        </div>
      </Card>
      <Card title="Custom Grayscale Background Utilities">
        <p className="bg-gray-100">.bg-gray-100</p>
        <p className="bg-gray-200">.bg-gray-200</p>
        <p className="bg-gray-300">.bg-gray-300</p>
        <p className="bg-gray-400">.bg-gray-400</p>
        <p className="bg-gray-500 text-gray-100">.bg-gray-500</p>
        <p className="bg-gray-600 text-gray-100">.bg-gray-600</p>
        <p className="bg-gray-700 text-gray-100">.bg-gray-700</p>
        <p className="bg-gray-800 text-gray-100">.bg-gray-800</p>
        <p className="bg-gray-900 text-gray-100">.bg-gray-900</p>
      </Card>
    </div>
  );
};
export default Colors;
