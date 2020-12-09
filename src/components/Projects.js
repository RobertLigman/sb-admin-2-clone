import React from "react";
import ProjectItem from "./ProjectItem";
import Card from "./Card";
// import { Link } from "react-router-dom";
// import ProgressBar from "./ProgressBar";
import "./Projects.css";
const projectInfo = {
  serverMigration: {
    width: "20%",
    color: "red",
  },
  SalesTracking: {
    width: "40%",
    color: "yellow",
  },
  CustomerDatabase: {
    width: "60%",
    color: "blue",
  },
  PayoutDetails: {
    width: "80%",
    color: "lightblue",
  },
  AccountSetup: {
    width: "100%",
    color: "green",
  },
};
const projects = () => (
  <Card title="Projects" classes="project">
    <ul className="projects_list">
      <ProjectItem
        title={Object.keys(projectInfo)[0]}
        width={projectInfo.serverMigration.width}
        color={projectInfo.serverMigration.color}
      />
      <ProjectItem
        title={Object.keys(projectInfo)[1]}
        width={projectInfo.SalesTracking.width}
        color={projectInfo.SalesTracking.color}
      />
      <ProjectItem
        title={Object.keys(projectInfo)[2]}
        width={projectInfo.CustomerDatabase.width}
        color={projectInfo.CustomerDatabase.color}
      />
      <ProjectItem
        title={Object.keys(projectInfo)[3]}
        width={projectInfo.PayoutDetails.width}
        color={projectInfo.PayoutDetails.color}
      />
      <ProjectItem
        title={Object.keys(projectInfo)[4]}
        width={projectInfo.AccountSetup.width}
        color={projectInfo.AccountSetup.color}
      />
    </ul>
  </Card>
);
export default projects;
