import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
function App() {
  const [sideNav, setSideNav] = useState(false);
  const toggleNav = () => {
    console.log(sideNav);
    setSideNav(!sideNav);
  };
  const closeNav = () => {
    console.log("click");
    setSideNav(false);
  };
  return (
    <Router>
      <MainHeader click={toggleNav} />
      {sideNav && <SideNav click={closeNav} />}
      <Main />
      <Route path="/" exact></Route>
    </Router>
  );
}

export default App;
