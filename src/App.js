import React, { useEffect, useState } from "react";
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
import Buttons from "./components/Buttons/Buttons";
import Cards from "./components/Cards/Cards";
import Other from "./components/Other/Other";
import Charts from "./components/Charts/Charts";
import Colors from "./components/Colors/Colors";
import Borders from "./components/Borders/Borders";
function App() {
  const [sideNav, setSideNav] = useState(false);

  const toggleNav = () => {
    // console.log(sideNav);
    setSideNav(!sideNav);
  };
  useEffect(() => {
    if (!sideNav) {
      document.querySelector("#root").style.gridTemplateColumns = "0px 100%";
    } else {
      document.querySelector("#root").style.gridTemplateColumns =
        "var(--side-nav-width) 1fr";
    }
  }, [sideNav]);
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
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/Cards">
          <Cards />
        </Route>
        <Route path="/Other">
          <Other />
        </Route>
        <Route path="/Charts">
          <Charts />
        </Route>
        <Route path="/Colors">
          <Colors />
        </Route>
        <Route path="/Borders">
          <Borders />
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
