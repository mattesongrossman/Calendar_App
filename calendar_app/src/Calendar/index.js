import React, { Component } from 'react';
import DaysOfWeek from '../DaysOfWeek';
import Month from '../Month';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <DaysOfWeek />
        <Month />
      </div>
    )
  }
}

export default Calendar;
