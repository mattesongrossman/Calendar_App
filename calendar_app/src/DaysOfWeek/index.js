import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DaysOfWeek extends Component {
  render() {
    return (
      <div className="days-of-week">
        <div className="sun">
          <h3>SUN</h3>
        </div>
        <div className="mon">
          <h3>MON</h3>
        </div>
        <div className="tue">
          <h3>TUE</h3>
        </div>
        <div className="wed">
          <h3>WED</h3>
        </div>
        <div className="thu">
          <h3>THU</h3>
        </div>
        <div className="fri">
          <h3>FRI</h3>
        </div>
        <div className="sat">
          <h3>SAT</h3>
        </div>
      </div>
    )
  }
}

export default DaysOfWeek;
