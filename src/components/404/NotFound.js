import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__page-title">404</h1>
      <h3 className="not-found__page-subtitle">Page Not Found</h3>
      <div className="second-section">
        <div className="not-found__text">
          It looks like you found a glitch in the matrix ...
        </div>
        <Link to="/dashboard" className="not-found__link">
          &#8592; Back to Dashboard
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
