import React, { useState } from "react";
// import App from "../App";
import { Link } from "react-router-dom";
import "./MainHeader.css";
import {
  faEnvelope,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let isNavBarOpen = false;
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("click");
  };
  const handleLogout = () => {
    // console.log("modal");
  };

  const toggleAccountMenu = () => {
    setIsOpen(!isOpen);
    // console.log("trybi");
  };
  // const toggleNav = () => {
  //   isNavBarOpen = !isNavBarOpen;
  // };

  return (
    <header>
      <ul className="header-list" style={{ marginLeft: props.setMarginLeft }}>
        <li className="header-list-item hamburger-item primary">
          <div
            className="hamburger-icon"
            onClick={props.click}
            open={isNavBarOpen}></div>
        </li>
        <li className="header-list-item search">
          <form onSubmit={submitHandler} className="search__form">
            {/* <input type="text" placeholder="Search for" /> */}
            <FontAwesomeIcon icon={faSearch} className="fontAwesome" />
          </form>
        </li>
        <li className="header-list-item notifications">
          <Link to="/notifications">
            {" "}
            <FontAwesomeIcon icon={faBell} className="fontAwesome" />{" "}
            <div className="number">2</div>
          </Link>
        </li>
        <li className="header-list-item notifications">
          <Link to="/messages">
            <FontAwesomeIcon icon={faEnvelope} className="fontAwesome" />
            <div className="number">2</div>
          </Link>
        </li>
        <li className="header-list-item ">
          <div className="account" onClick={toggleAccountMenu}>
            <p> Valerie Luna </p> <div className="avatar-image"></div>
            <ul className={`${isOpen && "active"} dropdown-menu`}>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
              <li className="last">
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
};
export default MainHeader;
