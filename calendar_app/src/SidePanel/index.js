import React, { Component } from "react"
import EditEvent from "../EditEvent"
import AddEvent from "../AddEvent"
import Event from "../Event"
import DayDetail from "../DayDetail"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class SidePanel extends Component {
  render() {
    return (
      <div className="side-panel">
        {/* <h2>Side Panel</h2> */}
        <Route exact path="/event/edit/:id" component={EditEvent} />
        <Route exact path="/event/new" component={AddEvent} />
        <Route exact path="/event/:id" component={Event} />
        {/* Eventually need to be /events/:year/:month/:day but for now just day */}
        <Route exact path="/events/:day" component={DayDetail} />
      </div>
    )
  }
}

export default SidePanel
