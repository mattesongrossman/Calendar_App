import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login';
import Register from './Register';
import NavBar from './NavBar';
import Calendar from './Calendar';
import SidePanel from './SidePanel';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <NavBar />
          <div className="view-window">
            <Calendar />
            <Route exact path="/" component={SidePanel} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
