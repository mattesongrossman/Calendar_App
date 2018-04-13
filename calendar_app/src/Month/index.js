import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DaysOfWeek from '../DaysOfWeek';
import Day from '../Day';
import moment from 'moment';

class Month extends Component {
  render() {
    // const startDay = moment().clone().startOf('month').startOf('week');
    // const endDay = moment().clone().endOf('month').endOf('week');
    // var calendar1 = [];
    // var index = startDay.clone();
    // while (index.isBefore(endDay, 'day')) {
    //   calendar.push(
    //     new Array(7).fill(0).map(
    //       function(n, i) {
    //         return {date: index.add(1, 'day').date()};
    //       }
    //     )
    //   )
    // }
    // console.log(calendar1);
    //
    // const startWeek = moment().startOf('month').week();
    // const endWeek = moment().endOf('month').week();
    // let calendar = []
    // for(var week = startWeek; week<endWeek;week++){
    //   calendar.push({
    //     week:week,
    //     days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
    //   })
    // }
    // console.log(calendar);

    return (
      <div className="month">
        <DaysOfWeek />
        <Day />
      </div>
    )
  }
}

export default Month;
