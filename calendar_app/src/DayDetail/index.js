import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import moment from 'moment';

class DayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loaded: false,
      deleted: false
    }
    this.fetchDaysEvents = this.fetchDaysEvents.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidUpdate() {
    const day = this.props.match.params.day;
    // A little bit janky... grabbing the event_time of the first event on the selected day and taking the date and comparing it to the date in the url parameter
    // Only works for days that have events in them, otherwise it throws an error
    const dayInState = moment(this.state.events[0].event_time).format('YYYY-MM-DD').split('-')[2];
    // console.log(dayInState);
    if (day !== dayInState) {
      this.fetchDaysEvents();
    }
  }

  componentDidMount() {
    this.fetchDaysEvents();
  }

  fetchDaysEvents() {
    // Eventually want to implement a way to have the year, month, day, in the url hard coding for now
    const year = '2018';
    const month = '04';
    const day = this.props.match.params.day;
    fetch(`http://localhost:4567/api/events/${year}/${month}/${day}`)
      .then(apiResponse => apiResponse.json())
      .then(eventInfo => {
        this.setState({
          events: eventInfo,
          loaded: true
        })
        console.log(eventInfo);
      })
  }

  deleteEvent(evt) {
    evt.preventDefault()
    const eventId = evt.target.id;
    console.log(eventId);
    fetch(`http://localhost:4567/api/event/${eventId}`, {
      method: "DELETE"
    }).then(() => {
      this.setState({
        deleted: true
      })
    })
  }

  render() {
    // console.log('events:', this.state.events);
    const events = this.state.events.map(event => {
      // Convert the UTC time from the database into a more readable time
      var dateTime = moment.utc(event.event_time).toDate();
      const formattedDateTime = moment(dateTime).local().format('h:mm a');
      return (
        <div key={event.id} className="event">
          <Link to={`/event/${event.id}`} className="event-label">
            <p>{formattedDateTime} ― {event.event_name}</p>
          </Link>
          <div className="buttons">
            <Link to={`/event/edit/${event.id}`}>
              <button type="submit">
                Edit
              </button>
            </Link>
            <button type="submit" id={event.id} onClick={this.deleteEvent}>
              Delete
            </button>
          </div>
        </div>
      )
    })

    if (this.state.deleted) {
      return <Redirect to={`/events/${this.props.match.params.day}`} />
    }

    if (this.state.loaded === false) {
      return <div className="month loading">Loading...</div>
    }

    return (
      <div id={this.props.dayInfo} className="day-detail">
        <h3>{moment(this.state.events[0].event_time).local().format('MMMM Do YYYY')}</h3>
        {events}
      </div>
    )
  }
}

export default DayDetail
