import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="topnav">
            <a className="active" href="/" exact={"true"}>
              Component A
            </a>
            <a className="active" href="/ListOfLinks">
              Component B
            </a>
            <a className="active" href="/ShowLinks">
              Component C
            </a>
          </div>
        </Router>
      </div>
    );
  }
}

export default Nav;
