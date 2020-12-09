import React from "react";
import "./Backdrop.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Backdrop = () => (
  <div className="Backdrop">
    <div className="mobile-search-bar">
      <input />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} className="fontAwesome" />
      </button>
    </div>
  </div>
);
export default Backdrop;
