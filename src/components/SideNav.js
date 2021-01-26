import React, { useState } from "react";
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
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faEnvelope, faBell, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState(null);
  const toggleExpanded = (e) => {
    if (expandedItems === null || expandedItems === e.target.textContent) {
      setIsExpanded((prevState) => !prevState);
    } else if (expandedItems !== e.target.textContent) {
      setIsExpanded(true);
    }
    setExpandedItems(e.target.textContent);
    // console.log(e.target.textContent);
  };
  return (
    <nav className="side-nav">
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
          <Link onClick={(e) => toggleExpanded(e)} to="Components">
            <FontAwesomeIcon icon={faCog} className="side-nav__icon" />
            Components
          </Link>
          {isExpanded && expandedItems === "Components" && (
            <ul>
              <h4>custom components:</h4>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/Cards">Cards</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Utilities" onClick={(e) => toggleExpanded(e)}>
            <FontAwesomeIcon icon={faWrench} className="side-nav__icon" />
            Utilities
          </Link>
          {isExpanded && expandedItems === "Utilities" && (
            <ul>
              <h4>custom utilities:</h4>
              <li>
                <Link to="/colors">Colors</Link>
              </li>
              <li>
                <Link to="/borders">Borders</Link>
              </li>
              <li>
                <Link to="/animations">Animations</Link>
              </li>
              <li>
                <Link to="/Other">Other</Link>
              </li>
            </ul>
          )}
        </li>
        <div className="nav-items__header upper-line">Addons</div>
        <li>
          <Link to="/Pages" onClick={(e) => toggleExpanded(e)}>
            <FontAwesomeIcon icon={faFolder} className="side-nav__icon" />
            Pages
          </Link>
          {isExpanded && expandedItems === "Pages" && (
            <ul>
              <h4>Login screens</h4>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/forgot">Forgot Password</Link>
              </li>
              <li>
                <Link to="/404">404 Page</Link>
              </li>
              <li>
                <Link to="/blank">Blank Page</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Charts">
            <FontAwesomeIcon icon={faChartArea} className="side-nav__icon" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/Tables">
            <FontAwesomeIcon icon={faTable} className="side-nav__icon" />
            Tables
          </Link>
        </li>
        <div className=" arrow-control upper-line">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="side-nav__icon middle"
            onClick={props.click}
          />
        </div>
      </ul>
    </nav>
  );
};
export default SideNav;
