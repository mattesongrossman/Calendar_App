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
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Add</h3>
        <form id="add">
          <div className="form-group">
            <label>
              Event Name
              <input
                type="text"
                value=""
                className="form-control"
                placeholder="Enter event name"
                name="name"
              />
            </label>
          </div>
          <div className="form-group" />
          <div className="form-group">
            <label>
              Date
              <input
                type="datetime-local"
                value=""
                className="form-control"
                placeholder="Enter time"
                name="time"
              />
            </label>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea name="add" form="add">
              Enter text here...
            </textarea>
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
