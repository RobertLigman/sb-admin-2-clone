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
import NotFound from "./components/404/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Blank from "./components/blank/Blank";
function App() {
  const [sideNav, setSideNav] = useState(false);

  const toggleNav = () => {
    // console.log(sideNav);
    setSideNav(!sideNav);
    if (sideNav) {
      document.querySelector("#root").style.gridTemplateColumns = "1fr";
    } else {
      document.querySelector("#root").style.gridTemplateColumns =
        " var(--side-nav-width) 1fr";
    }
  };

  return (
    <Router>
      <MainHeader
        click={toggleNav}
        isSideNavOpen={sideNav}
        // setMarginLeft={sideNav ? "var(--side-nav-width)" : null}
      />

      {sideNav && <SideNav click={toggleNav} />}

      <Switch>
        <Route path="/Tables" exact>
          <DataTable />
        </Route>
        <Route path="/404" exact>
          <NotFound />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Blank">
          <Blank />
        </Route>
        <Route path="/">
          <Main
          // setMarginLeft={sideNav ? "var(--side-nav-width)" : null}
          />
        </Route>
      </Switch>
      <Footer
      // setMarginLeft={sideNav ? "var(--side-nav-width)" : null}
      />
    </Router>
  );
}

export default App;
