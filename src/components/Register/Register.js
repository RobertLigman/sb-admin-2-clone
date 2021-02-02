import React from "react";
import ReactDom from "react-dom";
import "./Register.css";
const Register = () => {
  return ReactDom.createPortal(
    <div className="modal-layout">
      <h1>Register</h1>
    </div>,
    document.getElementById("portal")
  );
};
export default Register;
