import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DaysOfWeek from '../DaysOfWeek';
import Day from '../Day';

class Month extends Component {
  render() {
    return (
      <div className="month">
        <DaysOfWeek />
        <Day />
      </div>
    )
  }
}

export default Month;
