import React from "react";
import "./ProgressBar.css";
const ProgressBar = (props) => (
  <div className="Progress-Bar__outer" style={{ height: props.height }}>
    <div
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        borderRadius: props.width !== "100%" ? null : "8px",
      }}></div>
  </div>
);
export default ProgressBar;
