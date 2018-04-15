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
      deleted: false,
      edited: false
    }
    this.editEvent = this.editEvent.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id)
    fetch(`http://localhost:4567/api/event/${id}`)
      .then(response => response.json())
      .then(event => {
        console.log('this is event by id:', event);
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

  editEvent(evt) {
    evt.preventDefault()

    const { name, time, description, type } = this.state.editEvent
    const id = Number(this.props.match.params.id)
    const body = {
      name: name,
      time: time,
      description: description,
      type: type,
      id: id
    }
    fetch(`http://localhost:4567/api/event/${id}`, {
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
    const id = this.props.match.params.id;
    fetch(`http://localhost:4567/api/event/${id}`, {
      method: "DELETE"
    }).then(() => {
      this.setState({
        deleted: true
      })
    })
  }

  render() {
    const { name, time, description, type } = this.state.editEvent

    const { edited } = this.state
    const { deleted } = this.state

    if (edited) {
      return <Redirect to="/" />
    }
    // if (deleted) {
    //   return <Redirect to="/" />
    // }

    return (
      <div>
        <h3>Edit event</h3>
        <form
          id="edit"
          onChange={this.handleInputChange}
          onSubmit={this.editEvent}>
          <div className="">
            <label>
              Event name:
              <input
                type="text"
                value={name}
                className="name"
                placeholder="Enter event name"
                name="name"
              />
            </label>
          </div>
          <div className="" />
          <div className="">
            <label>
              Date:
              <input
                type="datetime-local"
                value={time}
                className="time"
                placeholder="Enter time"
                name="time"
              />
            </label>
          </div>
          <div className="">
            <label>Description: </label>
            <br />
            <textarea name="description" form="edit" value={description} />
          </div>
          <div className="">
            <label>
              Type:
              <input
                type="text"
                value={type}
                className="type"
                placeholder="Enter type"
                name="type"
              />
            </label>
          </div>
          <div className="">
            <button type="submit" className="">
              Submit
            </button>
          </div>
        </form>
        <form className="">
          <button type="submit" className="" onClick={this.deleteEvent}>
            Delete
          </button>
        </form>
      </div>
    )
  }
}

export default EditEvent
