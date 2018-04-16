import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: this.props.dayInfo,
      events: []
    }
    this.fetchDaysEvents = this.fetchDaysEvents.bind(this);
  }

  componentDidUpdate() {
    const splitDate = this.props.dayInfo.split('-');
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];
    fetch(`http://localhost:4567/api/events/${year}/${month}/${day}`)
      .then(apiResponse => apiResponse.json())
      .then(updatedInfo => {
        if (updatedInfo.length !== this.state.events.length) {
          this.setState({
            events: updatedInfo
          })
        }
      })
  }

  componentDidMount() {
    this.fetchDaysEvents();
  }

  fetchDaysEvents() {
    const splitDate = this.props.dayInfo.split('-');
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];
    fetch(`http://localhost:4567/api/events/${year}/${month}/${day}`)
      .then(apiResponse => apiResponse.json())
      .then(eventInfo => {
        this.setState({
          events: eventInfo
        })
      })
  }

  render() {
    const splitDate = this.props.dayInfo.split('-');
    // console.log(splitDate); // index 2 to get just the date

    // console.log('events:', this.state.events);
    const events = this.state.events.map(event => {
      return (
        <Link to={`/event/${event.id}`} key={event.id}>
          <p id={event.id}>{event.event_name}</p>
        </Link>
      )
    })

    // If this day is today, return a div with a className of today
    // Find today's date
    const today = moment().format('YYYY-MM-DD');
    if (this.props.dayInfo === today) {
      return (
        <div id={this.props.dayInfo} className="day today">
          <Link to={`/events/${splitDate[2]}`}>
            <h3>{splitDate[2]}</h3>
          </Link>
          {events}
        </div>
      )
    }

    // If the month is not the current month, return a div with a className of next-month
    const currentMonth = this.props.currentMonth.split('-')[1];
    const dayMonth = this.props.dayInfo.split('-')[1];
    // console.log(currentMonth, dayMonth);
    if (dayMonth !== currentMonth) {
      return (
        <div id={this.props.dayInfo} className="day next-month">
          <Link to={`/events/${splitDate[2]}`}>
            <h3>{splitDate[2]}</h3>
          </Link>
          {events}
        </div>
      )
    }

    return (
      <div id={this.props.dayInfo} className="day">
        <Link to={`/events/${splitDate[2]}`}>
          <h3>{splitDate[2]}</h3>
        </Link>
        {events}
      </div>
    )
  }
}

export default Day;
