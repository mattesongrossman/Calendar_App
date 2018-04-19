import React, { Component } from 'react';
import moment from 'moment';
import DaysOfWeek from '../DaysOfWeek';
import Week from '../Week';

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      month: '',
      weeks: [],
      weeksLoaded: false
    }
    this.makeWeeks = this.makeWeeks.bind(this);
  }

  componentDidMount() {
    this.makeWeeks('2018', '04');
  }

  makeWeeks(year, month) {
    // Grab ^ year and month from url and store it in state?
    // Just passing a date when calling makeWeeks() in the componentDidMount for now

    // Create an empty array of weeks
    let weeks = [];
    // Create a single week array which will contain days
    let week = [];

    const startDate = moment(`${year}-${month}`).clone().startOf('month').startOf('week');
    const endDate = moment(`${year}-${month}`).clone().endOf('month').endOf('week');

    // Iterate through each numeric day of the month
    while (startDate.isBefore(endDate)) {
      // Push the days into the week array
      week.push(startDate.format('YYYY-MM-DD'));
      // If the day is Saturday, push the current week array into the weeks array and clear the week array
      if (startDate.format('dddd') === 'Saturday') {
        weeks.push(week);
        week = [];
      }
      // Add a day to the start date
      startDate.add(1, 'days');
    }

    this.setState({
      weeks: weeks,
      weeksLoaded: true
    })
  }

  render() {
    // If the weeks have not loaded, render a loading message
    if (this.state.weeksLoaded === false) {
      return <div className="month loading">Loading...</div>
    }

    // Grab the current month from one of the weeks
    const currentMonth = this.state.weeks[1][0];
    const formattedMonth = moment(currentMonth, 'YYYY-MM-DD').format('MMMM').toUpperCase();

    // Map over each week in the weeks array, and return a week component for each with the necessary info
    const weeks = this.state.weeks.map(week => {
      const weekNumber = moment(week[0]).week();
      return <Week key={weekNumber} weekInfo={week} currentMonth={currentMonth} />
    })

    return (
      <div className="month">
        <h2 className="month-header">
          <span className="previous-btn">&#8882;</span>
          {formattedMonth}
          <span className="next-btn">&#8883;</span>
        </h2>
        <DaysOfWeek />
        {weeks}
      </div>
    )
  }
}

export default Month;
