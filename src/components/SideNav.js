import React, { useEffect, useState } from "react";
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
  faChevronRight,
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
  useEffect(() => {
    // console.log(
    //   document.querySelector(".allow_rotation").parentNode.textContent ===
    //     expandedItems
    // );
    if (isExpanded) {
      [...document.querySelectorAll(".allow_rotation")].find(
        (item) => item.parentNode.textContent === expandedItems
      ).style.transform = "rotate(90deg)";
    } else if (expandedItems) {
      [...document.querySelectorAll(".allow_rotation")].find(
        (item) => item.parentNode.textContent === expandedItems
      ).style.transform = "rotate(0deg)";
    }
  }, [isExpanded, expandedItems]);
  return (
    <nav className="side-nav">
      <ul className="side-nav__list list">
        <li className="list__item">
          <Link to="/index.html" className="active side-nav__link">
            <FontAwesomeIcon
              icon={faLaughWink}
              className="side-nav__icon logo"
            />
            <strong className="logo-text">
              sb admin <sup>2</sup>
            </strong>
          </Link>
        </li>
        <li className="list__item">
          <Link to="/dashboard" className="active side-nav__link">
            <FontAwesomeIcon
              icon={faTachometerAlt}
              className="side-nav__icon"
            />
            DashBoard
          </Link>
        </li>
        <div className="nav-items__header upper-line">interface</div>
        <li className="list__item expandable">
          <button onClick={(e) => toggleExpanded(e)} className="side-nav__link">
            <FontAwesomeIcon icon={faCog} className="side-nav__icon" />
            Components
            <FontAwesomeIcon
              icon={faChevronRight}
              className="side-nav__icon allow_rotation"
            />
          </button>
          {isExpanded && expandedItems === "Components" && (
            <ul className="sublist">
              <h4 className="sublist__title">custom components:</h4>
              <li className="sublist__item">
                <Link to="/buttons" className="side-nav__sublink">
                  Buttons
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/Cards" className="side-nav__sublink">
                  Cards
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="list__item expandable">
          <button onClick={(e) => toggleExpanded(e)} className="side-nav__link">
            <FontAwesomeIcon icon={faWrench} className="side-nav__icon" />
            Utilities
            <FontAwesomeIcon
              icon={faChevronRight}
              className="side-nav__icon allow_rotation"
            />
          </button>
          {isExpanded && expandedItems === "Utilities" && (
            <ul className="sublist">
              <h4 className="sublist__title">custom utilities:</h4>
              <li className="sublist__item">
                <Link to="/colors" className="side-nav__sublink">
                  Colors
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/borders" className="side-nav__sublink">
                  Borders
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/animations" className="side-nav__sublink">
                  Animations
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/Other" className="side-nav__sublink">
                  Other
                </Link>
              </li>
            </ul>
          )}
        </li>
        <div className="nav-items__header upper-line">Addons</div>
        <li className="list__item">
          <button onClick={(e) => toggleExpanded(e)} className="side-nav__link">
            <FontAwesomeIcon icon={faFolder} className="side-nav__icon" />
            Pages
            <FontAwesomeIcon
              icon={faChevronRight}
              className="side-nav__icon allow_rotation"
            />
          </button>
          {isExpanded && expandedItems === "Pages" && (
            <ul className="sublist">
              <h4 className="sublist__title">Login screens</h4>
              <li className="sublist__item">
                <Link to="/login" className="side-nav__sublink">
                  Login
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/register" className="side-nav__sublink">
                  Register
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/forgot" className="side-nav__sublink">
                  Forgot Password
                </Link>
              </li>
              <h4 className="sublist__title">other pages</h4>
              <li className="sublist__item">
                <Link to="/404" className="side-nav__sublink">
                  404 Page
                </Link>
              </li>
              <li className="sublist__item">
                <Link to="/blank" className="side-nav__sublink">
                  Blank Page
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="list__item">
          <Link to="/Charts" className="side-nav__link">
            <FontAwesomeIcon icon={faChartArea} className="side-nav__icon" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/Tables" className="side-nav__link">
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
