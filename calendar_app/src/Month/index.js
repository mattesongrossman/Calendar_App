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
    // this.makeCalendar = this.makeCalendar.bind(this);
  }

  componentDidMount() {
    // this.makeCalendar();
  }

  // makeCalendar() {
  //   // Working with a solution found on stackoverflow: https://stackoverflow.com/questions/39786372/creating-a-custom-calendar-with-moment-using-days-weeks-and-headings
  //   const startWeek = moment().startOf('month').week();
  //   const endWeek = moment().endOf('month').week();
  //   let month = [];
  //   for (var week = startWeek; week < endWeek; week++) {
  //     month.push({
  //       week: week,
  //       days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
  //     })
  //   }
  //   // console.log(month);
  //   this.setState({
  //     month: month
  //   })
  // }

  // makeCalendar() {
  //   const startOfMonth = moment().startOf('month');
  //   const endOfMonth   = moment().endOf('month');
  //   let month = [];
  // }

  render() {
    // console.log(this.state.month);
    // const weeks = this.state.month.map(week => {
    //   return <Week key={week.week} weekInfo={week.days} />
    // })

    // 1 31
    // Create an empty array of weeks.
    // Create a single week array which will contain days.
    // Iterate through each numeric day of the month.
    // If the day of the week is not Sunday, add the day into the week.
    // if it is, put the current week array into the weeks array.

    return (
      <div className="month">
        <div className="week">
          <div className="day"><h2>1</h2></div>
          <div className="day"><h2>2</h2></div>
          <div className="day"><h2>3</h2></div>
          <div className="day"><h2>4</h2></div>
          <div className="day"><h2>5</h2></div>
          <div className="day"><h2>6</h2></div>
          <div className="day"><h2>7</h2></div>
        </div>
        <div className="week">
          <div className="day"><h2>8</h2></div>
          <div className="day"><h2>9</h2></div>
          <div className="day"><h2>10</h2></div>
          <div className="day"><h2>11</h2></div>
          <div className="day"><h2>12</h2></div>
          <div className="day"><h2>13</h2></div>
          <div className="day"><h2>14</h2></div>
        </div>
        <div className="week">
          <div className="day"><h2>15</h2></div>
          <div className="day"><h2>16</h2></div>
          <div className="day"><h2>17</h2></div>
          <div className="day"><h2>18</h2></div>
          <div className="day"><h2>19</h2></div>
          <div className="day"><h2>19</h2></div>
          <div className="day"><h2>20</h2></div>
        </div>
        <div className="week">
          <div className="day"><h2>21</h2></div>
          <div className="day"><h2>22</h2></div>
          <div className="day"><h2>23</h2></div>
          <div className="day"><h2>24</h2></div>
          <div className="day"><h2>25</h2></div>
          <div className="day"><h2>26</h2></div>
          <div className="day"><h2>27</h2></div>
        </div>
        <div className="week">
          <div className="day"><h2>28</h2></div>
          <div className="day"><h2>29</h2></div>
          <div className="day"><h2>30</h2></div>
          <div className="day"><h2>31</h2></div>
        </div>
      </div>
    )
  }
}

export default Month;
