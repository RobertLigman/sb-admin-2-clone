import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import {
  faLaughWink,
  faTachometerAlt,
  faCog,
  faWrench,
  faChartArea,
  faTable,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faEnvelope, faBell, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = (props) => {
  return (
    <nav className="side-nav" onClick={props.click}>
      <ul className="side-nav__list">
        <li>
          <Link to="/index.html" className="active">
            <FontAwesomeIcon
              icon={faLaughWink}
              className="side-nav__icon logo"
            />
            <strong className="logo-text">
              sb admin <sup>2</sup>
            </strong>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="active">
            <FontAwesomeIcon
              icon={faTachometerAlt}
              className="side-nav__icon"
            />
            DashBoard
          </Link>
        </li>
        <div className="nav-items__header upper-line">interface</div>
        <li>
          <Link to="/Components">
            <FontAwesomeIcon icon={faCog} className="side-nav__icon" />
            Components
          </Link>
        </li>
        <li>
          <Link to="/Utilities">
            <FontAwesomeIcon icon={faWrench} className="side-nav__icon" />
            Utilities
          </Link>
        </li>
        <div className="nav-items__header upper-line">Addons</div>
        <li>
          <Link to="/Pages">
            {" "}
            <FontAwesomeIcon icon={faFolder} className="side-nav__icon" />
            Pages
          </Link>
        </li>
        <li>
          <Link to="/Charts">
            {" "}
            <FontAwesomeIcon icon={faChartArea} className="side-nav__icon" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/Tables">
            {" "}
            <FontAwesomeIcon icon={faTable} className="side-nav__icon" />
            Tables
          </Link>
        </li>
        <div className="arrow-control upper-line">arrow</div>
      </ul>
    </nav>
  );
};
export default SideNav;
