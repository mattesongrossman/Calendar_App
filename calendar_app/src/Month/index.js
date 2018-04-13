import React, { Component } from 'react';
import moment from 'moment';
import Week from '../Week';

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      month: []
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
    let month = [];
    for (var week = startWeek; week < endWeek; week++) {
      month.push({
        week: week,
        days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
      })
    }
    // console.log(month);
    this.setState({
      month: month
    })
  }

  render() {
    console.log(this.state.month);
    const weeks = this.state.month.map(week => {
      return <Week key={week.week} weekInfo={week.days} />
    })

    return (
      <div className="month">
        <div className="weeks">
          {weeks}
        </div>
      </div>
    )
  }
}

export default Month;
