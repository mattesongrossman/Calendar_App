import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import moment from 'moment';

class DayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 0,
      events: [],
      deleted: false
    }
    this.fetchDaysEvents = this.fetchDaysEvents.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidUpdate() {
    // This works, but keeps updating forever...
    // const day = this.props.match.params.day;
    // if (day !== this.state.currentDay) {
    //   this.fetchDaysEvents();
    // }
  }

  componentDidMount() {
    this.fetchDaysEvents();
  }

  fetchDaysEvents() {
    // Eventually want to implement a way to have the year, month, day, in the url but for now hard coding
    const year = '2018';
    const month = '04';
    const day = this.props.match.params.day;
    fetch(`http://localhost:4567/api/events/${year}/${month}/${day}`)
      .then(apiResponse => apiResponse.json())
      .then(eventInfo => {
        this.setState({
          currentInfo: day,
          events: eventInfo
        })
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
    console.log('events:', this.state.events);
    const events = this.state.events.map(event => {
      // Convert the UTC time from the database into a more readable time
      var dateTime = moment.utc(event.event_time).toDate();
      const formattedDateTime = moment(dateTime).local().format('h:mm a');

      return (
        <div key={event.id} className="event">
          <Link to={`/event/${event.id}`}>
            <p>{formattedDateTime} ― {event.event_name}</p>
          </Link>
          <Link to={`/event/edit/${event.id}`}>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </Link>
          <button type="submit" className="btn btn-danger" id={event.id} onClick={this.deleteEvent}>
            Delete
          </button>
        </div>
      )
    })

    if (this.state.deleted) {
      return <Redirect to={`/events/${this.props.match.params.day}`} />
    }

    // moment(dateTime).local().format('MMMM Do YYYY')
    return (
      <div id={this.props.dayInfo} className="day-detail">
        <h3>{this.props.match.params.day}</h3>
        {events}
      </div>
    )
  }
}

export default DayDetail
