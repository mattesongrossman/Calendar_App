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
        name: "",
        time: "",
        description: "",
        type: ""
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
    const { name, time, description, type } = this.state.newEvent
    const body = {
      name: name,
      time: time,
      description: description,
      type: type
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
    const { name, time, description, type } = this.state.newEvent

    const { created } = this.state

    if (created) {
      return <Redirect to="/" />
    }

    return (
      <div className="add-event">
        <h3>Add an event</h3>
        <form
          id="add"
          onChange={this.handleInputChange}
          onSubmit={this.createEvent}>
          <div className="">
            <label>
              Event name:
              <input type="text" value={name} className="name" name="name" />
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
                name="time"
              />
            </label>
          </div>
          <div className="">
            <label>Description: </label>
            <br />
            <textarea name="description" form="add" value={description} className="desc" />
          </div>
          <div className="">
            <label>
              Type:
              <input type="text" value={type} className="type" name="type" />
            </label>
          </div>
          <div className="">
            <button type="submit" className="">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddEvent
