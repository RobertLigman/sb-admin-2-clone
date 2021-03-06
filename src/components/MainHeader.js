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
import avatarImg from "../assets/iconfinder_7_avatar_2754582.png";
import Backdrop from "./Backdrop";
const MainHeader = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  let isNavBarOpen = false;
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("click");
  };
  const handleLogout = () => {
    // console.log("modal");
  };

  // const toggleAccountMenu = () => {
  //   setIsOpen(!isOpen);
  //   // console.log("trybi");
  // };
  // const toggleNav = () => {
  //   isNavBarOpen = !isNavBarOpen;
  // };
  const switchOfBackdrop = () => {
    setOpenSearchBar(false);
  };
  const toggleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };
  return (
    <header className="header">
      <ul className="header-list" style={{ marginLeft: props.setMarginLeft }}>
        {!props.isSideNavOpen && (
          <li className="header-list-item hamburger-item primary">
            <div
              className="hamburger-icon"
              onClick={props.click}
              open={isNavBarOpen}></div>
          </li>
        )}
        <li className="header-list-item search" onClick={toggleSearchBar}>
          <form onSubmit={submitHandler} className="search__form" tabIndex="1">
            {/* <input type="text" placeholder="Search for" /> */}
            <input type="text" id="form__input" placeholder="Search for ..." />
            <div className="form__submit">
              <FontAwesomeIcon icon={faSearch} className="fontAwesome" />
            </div>
          </form>
          {/* {openSearchBar && <Backdrop onClick={switchOfBackdrop} />} */}
        </li>
        <li className="header-list-item notifications">
          <button className="test">
            {" "}
            <FontAwesomeIcon icon={faBell} className="fontAwesome" />{" "}
            <div className="number">2</div>
          </button>
          <div className="test-dropdown dropdown-big">
            <h3 className="dropdown-header">Alerts Center</h3>
            <ul className="alert-list">
              <li className="alert-list__item unread">
                <Link to="/fistLink" className="link">
                  <div className="alert-list__type-img"></div>
                  <div className="alert-list__text">
                    <p className="text__date"></p>
                    <p className="text__value">
                      A new monthly report is ready to download
                    </p>
                  </div>
                </Link>
              </li>
              <li className="alert-list__item">
                <Link to="/fistLink" className="link">
                  <div className="alert-list__type-img"></div>
                  <div className="alert-list__text">
                    <p className="text__date"></p>
                    <p className="text__value">
                      A new monthly report is ready to download
                    </p>
                  </div>
                </Link>
              </li>
              <li className="alert-list__item">
                <Link to="/fistLink" className="link">
                  <div className="alert-list__type-img"></div>
                  <div className="alert-list__text">
                    <p className="text__date"></p>
                    <p className="text__value">
                      A new monthly report is ready to download
                    </p>
                  </div>
                </Link>
              </li>
              <li className="alert-list__item item__all-posts">
                <Link to="/all-allerts" className="link">
                  Show All Allerts
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="header-list-item notifications">
          <button className="test">
            <FontAwesomeIcon icon={faEnvelope} className="fontAwesome" />
            <div className="number">2</div>
          </button>
          <div className="test-dropdown dropdown-big">
            <h3 className="dropdown-header">Lalala</h3>
            <ul className="alert-list">
              <li className="alert-list__item">
                <Link to="" className="link">
                  Page in progress
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="header-list-item ">
          <button className="test">
            <div className="account">
              <p> Valerie Luna </p>
              <div className="avatar-image">
                <img src={avatarImg} alt="avatar" />
              </div>
              {/* <div>
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div> */}
            </div>
          </button>
          {/* <ul className="test-dropdown">
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
          </ul> */}

          {/* onClick={toggleAccountMenu} */}
        </li>
      </ul>
    </header>
  );
};
export default MainHeader;
