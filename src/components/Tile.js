import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tile.css";
const Tile = (props) => {
  // console.log(props);
  return (
    <div className={`main__tile ${props.border}`}>
      <h3 className={`tile-title ${props.color}`}>{props.title}</h3>
      <h3 className="tile-statistics">
        {props.value}
        {props.progressBar && (
          <div className="progress-bar">
            <div
              style={{
                width: `${props.value}`,
                backgroundColor: `${props.color}`,
              }}></div>
          </div>
        )}
      </h3>

      <FontAwesomeIcon
        icon={props.icon}
        className="fontAwesome big main-avatar"
      />
    </div>
  );
};
export default Tile;
