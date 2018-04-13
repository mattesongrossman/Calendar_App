import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DaysOfWeek extends Component {
  render() {
    return (
      <div className="days-of-week">
        <div className="sun">
          <h2>SUN</h2>
        </div>
        <div className="mon">
          <h2>MON</h2>
        </div>
        <div className="tue">
          <h2>TUE</h2>
        </div>
        <div className="wed">
          <h2>WED</h2>
        </div>
        <div className="thu">
          <h2>THU</h2>
        </div>
        <div className="fri">
          <h2>FRI</h2>
        </div>
        <div className="sat">
          <h2>SAT</h2>
        </div>
      </div>
    )
  }
}

export default DaysOfWeek;
