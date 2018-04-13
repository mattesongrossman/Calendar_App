import React, { Component } from 'react';
import Week from '../Week';
import moment from 'moment';

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: []
    }
    this.makeCalendar = this.makeCalendar.bind(this);
  }

  componentDidMount() {
    this.makeCalendar();
  }

  makeCalendar() {
    // Working with a solution found on stackoverflow: https://stackoverflow.com/questions/39786372/creating-a-custom-calendar-with-moment-using-days-weeks-and-headings
    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();
    let calendar = [];
    for (var week = startWeek; week < endWeek; week++) {
      calendar.push({
        week: week,
        days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
      })
    }
    // console.log(calendar);
    this.setState({
      calendar: calendar
    })
  }

  render() {
    console.log(this.state.calendar);
    const month = this.state.calendar.map(weeks => {
      return weeks.days.map(week => {
        return week._d
      })
    })
    // month is an array of arrays
    console.log(month);

    return (
      <div className="month">
        <Week />
      </div>
    )
  }
}

export default Month;
