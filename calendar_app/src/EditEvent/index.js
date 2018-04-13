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
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Edit</h3>
        <form id="edit">
          <div className="form-group">
            <label>
              Event Name:
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
              Date:
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
            <label>Description: </label>
            <br />
            <textarea name="edit" form="edit">
              Enter text here...
            </textarea>
          </div>
          <div className="form-group">
            <label>
              Type:
              <input
                type="text"
                value=""
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
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
    )
  }
}

export default EditEvent
