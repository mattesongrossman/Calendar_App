import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class DayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfo: []
    }
    this.fetchEvent = this.fetchEvent.bind(this);
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

  render() {
    console.log(this.state.eventInfo);
    const eventInfo = this.state.eventInfo;
    return (
      <div className="DayDetail">
        <h3>{eventInfo.event_name}</h3>
        <p>{eventInfo.event_time}</p>
        <p>{eventInfo.event_description}</p>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
        <form className="form-group">
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
    )
  }
}

export default DayDetail
