import React, { Component } from 'react';
import moment from 'moment';
import Week from '../Week';

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      month: '',
      weeks: []
    }
    // this.makeCalendar = this.makeCalendar.bind(this);
  }

  componentDidMount() {
    // this.makeCalendar();
  }

  // // Maybe make into a function accept a year and a month and return a weeks array
  // makeCalendar() {
  //   // Create an empty array of weeks
  //   let weeks = [];
  //   // Create a single week array which will contain days
  //   let week = [];
  //
  //   const startDate = moment().clone().startOf('month').startOf('week');
  //   const endDate = moment().clone().endOf('month').endOf('week');
  //   // End of the last week of the month will be in the next month, so there's a couple extra days...
  //
  //   // Iterate through each numeric day of the month
  //   while (startDate.isBefore(endDate)) {
  //     // Push the days into the week array
  //     week.push(startDate.format('YYYY-MM-DD'));
  //     // If the day is Saturday, push the current week array into the weeks array and clear the week array
  //     if (startDate.format('dddd') === 'Saturday') {
  //       weeks.push(week);
  //       week = [];
  //     }
  //     // Add a day to the start day
  //     startDate.add(1, 'days');
  //   }
  //   console.log('weeks:', weeks);
  //   this.setState({
  //     months: weeks
  //   })
  // }

  render() {
    // Create an empty array of weeks
    let weeks = [];
    // Create a single week array which will contain days
    let week = [];

    const startDate = moment().clone().startOf('month').startOf('week');
    const endDate = moment().clone().endOf('month').endOf('week');
    // End of the last week of the month will be in the next month, so there's a couple extra days...

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
    console.log('weeks:', weeks);

    const week1Elements = weeks[0].map(week => {
      const splitDate = week.split('-');
      return <div key={splitDate[2]} className="day"><h2>{splitDate[2]}</h2></div>
    })

    const week2Elements = weeks[1].map(week => {
      const splitDate = week.split('-');
      return <div key={splitDate[2]} className="day"><h2>{splitDate[2]}</h2></div>
    })

    const week3Elements = weeks[2].map(week => {
      const splitDate = week.split('-');
      return <div key={splitDate[2]} className="day"><h2>{splitDate[2]}</h2></div>
    })

    const week4Elements = weeks[3].map(week => {
      const splitDate = week.split('-');
      return <div key={splitDate[2]} className="day"><h2>{splitDate[2]}</h2></div>
    })

    const week5Elements = weeks[4].map(week => {
      const splitDate = week.split('-');
      return <div key={splitDate[2]} className="day"><h2>{splitDate[2]}</h2></div>
    })

    return (
      <div className="month">
        <div className="week">
          {week1Elements}
        </div>
        <div className="week">
          {week2Elements}
        </div>
        <div className="week">
          {week3Elements}
        </div>
        <div className="week">
          {week4Elements}
        </div>
        <div className="week">
          {week5Elements}
        </div>
      </div>
    )
  }
}

export default Month;
