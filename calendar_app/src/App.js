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
          <h1 className="app-header">CALENDAR</h1>
          <div className="view-window">
          <Route component={NavBar}/>
            <Calendar />
            <Route path="/event" component={SidePanel} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
