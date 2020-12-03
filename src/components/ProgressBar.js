import React from "react";
import "./ProgressBar.css";
const ProgressBar = (props) => (
  <div className="Progress-Bar__outer">
    <div
      style={{
        backgroundColor: props.color,
        width: props.width,
        borderRadius: props.width !== "100%" ? null : "8px",
      }}></div>
  </div>
);
export default ProgressBar;
