import React, { Component } from "react"
import EditEvent from "../EditEvent"
import AddEvent from "../AddEvent"
import DayDetail from "../DayDetail"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class SidePanel extends Component {
  render() {
    return (
      <div className="side-panel">
        {/* <h2>Side Panel</h2> */}
        <Route path="/event/edit/:id" component={EditEvent} />
        <Route path="/event/new" component={AddEvent} />
        <Route path="/event/:id" component={DayDetail} />
      </div>
    )
  }
}

export default SidePanel
