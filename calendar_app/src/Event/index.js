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
    // console.log(this.state.eventInfo);
    const eventInfo = this.state.eventInfo;

    // Convert the UTC time from the database into a more readable time
    var dateTime = moment.utc(eventInfo.event_time).toDate();
    const formattedDateTime = moment(dateTime).local().format('MMMM Do YYYY, h:mm a');

    if (this.state.deleted) {
      return <Redirect to="/" />
    }

    return (
      <div className="event">
        <h3>{eventInfo.event_name}</h3>
        <p>{formattedDateTime}</p>
        <p>{eventInfo.event_description}</p>
        <div className="form-group">
          <Link to={`/event/edit/${eventInfo.id}`}>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </Link>
        </div>
        <form className="form-group">
          <button type="submit" className="btn btn-danger" onClick={this.deleteEvent}>
            Delete
          </button>
        </form>
      </div>
    )
  }
}

export default DayDetail
