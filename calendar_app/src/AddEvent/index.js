import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newEvent: {
        user_id: 1,
        event_name: "",
        event_time: "",
        event_description: "",
        event_type: ""
      },
      created: false
    }
    this.createEvent = this.createEvent.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {}

  handleInputChange(evt) {
    //selects the name of the input field
    const property = evt.target.name
    //selects the value of the input field
    const value = evt.target.value
    this.setState((prevState, props) => {
      const newEvent = Object.assign({}, prevState.newEvent)
      newEvent[property] = value
      return {
        newEvent: newEvent
      }
    })
  }

  createEvent(evt) {
    evt.preventDefault()
    const {
      user_id,
      event_name,
      event_time,
      event_description,
      event_type
    } = this.state.newEvent
    const body = {
      user_id: user_id,
      event_name: event_name,
      event_time: event_time,
      event_description: event_description,
      event_type: event_type
    }
    fetch(`http://localhost:4567/api/create`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.setState({
        created: true
      })
    })
  }

  render() {
    const {
      user_id,
      event_name,
      event_time,
      event_description,
      event_type
    } = this.state.newEvent

    const { created } = this.state

    if (created) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h3>Add</h3>
        <form
          id="add"
          onChange={this.handleInputChange}
          onSubmit={this.createEvent}>
          <div className="form-group">
            <label>
              Event Name:
              <input
                type="text"
                value={event_name}
                className="form-control"
                name="event_name"
              />
            </label>
          </div>
          <div className="form-group" />
          <div className="form-group">
            <label>
              Date:
              <input
                type="datetime-local"
                value={event_time}
                className="form-control"
                name="event_time"
              />
            </label>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <br />
            <textarea
              name="event_description"
              form="add"
              value={event_description}
            />
          </div>
          <div className="form-group">
            <label>
              Type:
              <input
                type="text"
                value={event_type}
                className="form-control"
                name="event_type"
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddEvent
