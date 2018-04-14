import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: this.props.dayInfo,
      events: []
    }
    this.fetchDaysEvents = this.fetchDaysEvents.bind(this);
  }

  componentDidMount() {
    this.fetchDaysEvents();
  }

  fetchDaysEvents() {
    const splitDate = this.props.dayInfo.split('-');
    // console.log(splitDate);
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

    console.log('this.state.events:', this.state.events);

    const events = this.state.events.map(event => {
      return <p key={event.id} id={event.id}>{event.event_name}</p>
    })

    return (
      <div id={this.props.dayInfo} className="day">
        <h2>{splitDate[2]}</h2>
        {events}
      </div>
    )
  }
}

export default Day;
