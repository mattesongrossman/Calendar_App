import React, { Component } from 'react';
import Month from '../Month';
import DaysOfWeek from '../DaysOfWeek';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <Month />
        <DaysOfWeek />
      </div>
    )
  }
}

export default Calendar;
