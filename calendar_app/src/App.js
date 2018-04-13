import React, { Component } from "react"
import SidePanel from "./SidePanel"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/event" component={SidePanel} />
        </div>
      </Router>
    )
  }
}

export default App
