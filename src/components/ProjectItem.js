import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./ProjectItem.css";

const ProjectItem = (props) => (
  <li className="project-item">
    <Link to="" className="project-item__link">
      <div className="single-project">
        <h3 className="project-title">{props.title}</h3>
        <p className="progress-complete">
          {props.width !== "100%" ? props.width : "Complete!"}
        </p>
      </div>
      <ProgressBar color={props.color} width={props.width} />
    </Link>
  </li>
);
export default ProjectItem;
