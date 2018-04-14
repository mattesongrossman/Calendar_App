import React, { Component } from "react"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class DayDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <div class="DayDetail">
        <h2>8:00pm</h2>
        <p>Isle of Dogs</p>
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
