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
    // Grab ^ year and month from url? Just passing a date in for now

    // Create an empty array of weeks
    let weeks = [];
    // Create a single week array which will contain days
    let week = [];

    const startDate = moment(`${year}-${month}`).clone().startOf('month').startOf('week');
    const endDate = moment(`${year}-${month}`).clone().endOf('month').endOf('week');
    // Need to figure out how to get rid of the extra days from previous and next month...

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
    // console.log(weeks);

    this.setState({
      weeks: weeks,
      weeksLoaded: true
    })
  }

  render() {
    // console.log(this.state.weeks);

    if (this.state.weeksLoaded === false) {
      return <div className="month loading">Loading...</div>
    }

    // Grab the current month from one of the weeks
    const currentMonth = moment(this.state.weeks[1][0], 'YYYY-MM-DD').format('MMMM').toUpperCase();

    const weeks = this.state.weeks.map(week => {
      const weekNumber = moment(week[0]).week();
      // console.log(weekNumber);
      return <Week key={weekNumber} weekInfo={week} />
    })

    return (
      <div className="month">
        <h2 className="month-header">{currentMonth}</h2>
        <DaysOfWeek />
        {weeks}
      </div>
    )
  }
}

export default Month;
