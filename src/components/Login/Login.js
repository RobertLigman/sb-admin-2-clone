import React from "react";
import ReactDom from "react-dom";
import "./Login.css";
const Login = () => {
  return ReactDom.createPortal(
    <div className="modal-layout">
      <h1>Login</h1>
    </div>,
    document.getElementById("portal")
  );
};
export default Login;
