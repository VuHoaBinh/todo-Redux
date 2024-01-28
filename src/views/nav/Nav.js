import React from "react";
import "./Nav.scss";
// import { NavLink } from "react-router-dom";
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
            <a href="/todo">Component B</a>
            <a href="/user">Component C</a>

            {/* <NavLink to="/" activeClassName="active" exact={true}>
              Component A
            </NavLink>
            <NavLink to="/todo" activeClassName="active">
              Component B
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              Component C
            </NavLink> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default Nav;
