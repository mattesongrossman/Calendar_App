import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DaysOfWeek extends Component {
  render() {
    return (
      <div className="days-of-week">
        <h2>SUN</h2>
        <h2>MON</h2>
        <h2>TUE</h2>
        <h2>WED</h2>
        <h2>THU</h2>
        <h2>FRI</h2>
        <h2>SAT</h2>
      </div>
    )
  }
}

export default DaysOfWeek;
