import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class EditEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editEvent: {
        id: null,
        name: "",
        time: "",
        description: "",
        type: ""
      },
      created: false,
      edited: false
    }
    this.updateEvent = this.updateEvent.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id)
    console.log(id)
    fetch(`http://localhost:4567/api/event/1`)
      .then(response => response.json())
      .then(event => {
        const {
          id,
          event_name,
          event_time,
          event_description,
          event_type
        } = event
        this.setState({
          editEvent: {
            name: event_name,
            time: event_time,
            description: event_description,
            type: event_type
          }
        })
      })
  }

  handleInputChange(evt) {
    //selects the name of the input field
    const property = evt.target.name
    //selects the value of the input field
    const value = evt.target.value
    this.setState((prevState, props) => {
      const editEvent = Object.assign({}, prevState.editEvent)
      editEvent[property] = value
      return {
        editEvent: editEvent
      }
    })
  }

  updateEvent(evt) {
    evt.preventDefault()

    const { name, time, description, type } = this.state.editEvent
    const id = this.props.match.params
    const body = {
      name: name,
      time: time,
      description: description,
      type: type
    }
    fetch(`http://localhost:4567/api/record/1`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.setState({
        edited: true
      })
    })
  }

  deleteEvent(evt) {
    evt.preventDefault()
    const id = this.props.match.params
    fetch(`http://localhost:4567/api/event/1`, { method: "DELETE" })
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          edited: true
        })
      })
  }

  render() {
    const { name, time, description, type } = this.state.editEvent

    return (
      <div>
        <h3>Edit</h3>
        <form
          id="edit"
          onChange={this.handleInputChange}
          onSubmit={this.updateEvent}>
          <div className="form-group">
            <label>
              Event Name:
              <input
                type="text"
                value={name}
                className="form-control"
                placeholder="Enter event name"
                name="name"
              />
            </label>
          </div>
          <div className="form-group" />
          <div className="form-group">
            <label>
              Date:
              <input
                type="datetime-local"
                value={time}
                className="form-control"
                placeholder="Enter time"
                name="time"
              />
            </label>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <br />
            <textarea name="edit" form="edit" value={description} />
          </div>
          <div className="form-group">
            <label>
              Type:
              <input
                type="text"
                value={type}
                className="form-control"
                placeholder="Enter type"
                name="type"
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <form className="form-group">
          <button
            type="submit"
            className="btn btn-danger"
            onSubmit={this.deleteEvent}>
            Delete
          </button>
        </form>
      </div>
    )
  }
}

export default EditEvent
