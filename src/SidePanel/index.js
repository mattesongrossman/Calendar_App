import React, { Component } from "react"
import EditEvent from "../EditEvent"
import AddEvent from "../AddEvent"
import Event from "../Event"
import DayDetail from "../DayDetail"
import { BrowserRouter as Router, Route } from "react-router-dom"

class SidePanel extends Component {
  render() {
    return (
      <div className="side-panel">
        <Route exact path="/event/edit/:id" component={EditEvent} />
        <Route exact path="/event/new" component={AddEvent} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/events/:day" component={DayDetail} />
      </div>
    )
  }
}

export default SidePanel
