import React, { Component } from 'react';
import moment from 'moment';
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
    this.makeWeeks('2018', '08');
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
      // Add a day to the start day
      startDate.add(1, 'days');
    }
    console.log('weeks in method:', weeks);
    this.setState({
      weeks: weeks,
      weeksLoaded: true
    })
  }

  render() {
    const weeks = this.state.weeks;
    console.log(weeks);

    if (this.state.weeksLoaded === false) {
      return <div className="month">Loading...</div>
    }

    const weekElements = weeks.map(week => {
      return week.map(day => {
        const splitDate = day.split('-');
        return <div key={day} className="day"><h2>{splitDate[2]}</h2></div>
      })
    })
    console.log(weekElements);

    return (
      <div className="month">
        <div className="week">
          {weekElements[0]}
        </div>
        <div className="week">
          {weekElements[1]}
        </div>
        <div className="week">
          {weekElements[2]}
        </div>
        <div className="week">
          {weekElements[3]}
        </div>
        <div className="week">
          {weekElements[4]}
        </div>
      </div>
    )
  }
}

export default Month;
