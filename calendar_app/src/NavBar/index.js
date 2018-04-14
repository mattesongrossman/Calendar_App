import React, { Component } from "react"
import Login from "../Login"
import AddEvent from "../AddEvent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      // heading is standard html
      <nav className="navbar">
        <h1 className="app-header">CALENDAR APP</h1>
        <div className="nav-links">
          {/* make a link to the add event page */}
          <Link to="/create">
            <p>Add an event</p>
          </Link>
          {/* make a link to the login page */}
          <Link to="/login">
            <p>Login!</p>
          </Link>
        </div>
      </nav>
    )
  }
}

// exporting the navbar so that it can be used in other views
export default NavBar;
