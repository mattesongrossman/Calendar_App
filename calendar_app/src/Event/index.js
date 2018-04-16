import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import moment from 'moment';

class DayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfo: [],
      deleted: false
    }
    this.fetchEvent = this.fetchEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    this.fetchEvent();
  }

  componentDidUpdate() {
    const eventId = this.props.match.params.id;
    if (eventId !== this.state.eventInfo.id) {
      this.fetchEvent();
    }
  }

  fetchEvent() {
    const eventId = this.props.match.params.id;
    fetch(`http://localhost:4567/api/event/${eventId}`)
      .then(apiResponse => apiResponse.json())
      .then(eventInfo => {
        this.setState({
          eventInfo: eventInfo
        })
      })
  }

  deleteEvent(evt) {
    evt.preventDefault()
    const eventId = this.props.match.params.id;
    fetch(`http://localhost:4567/api/event/${eventId}`, {
      method: "DELETE"
    }).then(() => {
      this.setState({
        deleted: true
      })
    })
  }

  render() {
    const eventInfo = this.state.eventInfo;

    // Convert the UTC time from the database into a more readable time
    var dateTime = moment.utc(eventInfo.event_time).toDate();
    const formattedDateTime = moment(dateTime).local().format('MMMM Do YYYY, h:mm a');

    // If you give moment an undefined time, it will output the current time
    // So it'll display the current date/time even when we're not passing it anything, so to prevent return an empty div
    if (!eventInfo.event_time) {
      return <div></div>
    }

    // If an event has been deleted redirect to the index
    if (this.state.deleted) {
      return <Redirect to="/" />
    }

    return (
      <div className="event-info">
        <h3>{eventInfo.event_name}</h3>
        <p>{formattedDateTime}</p>
        <p>{eventInfo.event_description}</p>
        {/* <p>Type: {eventInfo.event_type}</p> */}
        <div className="buttons">
          <Link to={`/event/edit/${eventInfo.id}`}>
            <button type="submit">
              Edit
            </button>
          </Link>
          <button type="submit" onClick={this.deleteEvent}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default DayDetail
