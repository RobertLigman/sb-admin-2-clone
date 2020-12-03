import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
// import { faEnvelope, faBell, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = (props) => {
  return (
    <nav className="side-nav" onClick={props.click}>
      <ul className="side-nav__list">
        <li>
          <Link to="/index.html" className="active">
            <strong>
              sb admin <sup>2</sup>
            </strong>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="active">
            DashBoard
          </Link>
        </li>
        <div className="nav-items__header upper-line">interface</div>
        <li>
          <Link to="/Components">Components</Link>
        </li>
        <li>
          <Link to="/Utilities">Utilities</Link>
        </li>
        <div className="nav-items__header upper-line">Addons</div>
        <li>
          <Link to="/Pages">Pages</Link>
        </li>
        <li>
          <Link to="/Charts">Charts</Link>
        </li>
        <li>
          <Link to="/Tables">Tables</Link>
        </li>
        <div className="arrow-control upper-line">arrow</div>
      </ul>
    </nav>
  );
};
export default SideNav;
