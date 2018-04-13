import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Month from '../Month';
import DaysOfWeek from '../DaysOfWeek';
import Day from '../Day';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
          <Month />
      </div>
    )
  }
}

export default Calendar;
