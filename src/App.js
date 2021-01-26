import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./GlobalSet.css";
import DataTable from "./components/DataTable/DataTable";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const toggleNav = () => {
    // console.log(sideNav);
    setSideNav(!sideNav);
  };
  const closeNav = () => {
    // console.log("click");
    setSideNav(false);
  };
  return (
    <Router>
      <MainHeader
        click={toggleNav}
        setMarginLeft={sideNav ? "var(--side-nav-width)" : null}
      />
      {sideNav && <SideNav click={closeNav} />}

      <Switch>
        <Route path="/Tables" exact>
          <DataTable />
        </Route>
        <Route path="/">
          <Main setMarginLeft={sideNav ? "var(--side-nav-width)" : null} />
        </Route>
      </Switch>
      <Footer setMarginLeft={sideNav ? "var(--side-nav-width)" : null} />
    </Router>
  );
}

export default App;
