import React, { Component } from "react"

import Calendar from "../Calendar"
import SidePanel from "../SidePanel"
// import NavBar from "../NavBar"
// import EditEvent from "../EditEvent"
// import AddEvent from "../AddEvent"
// import DayDetail from "../DayDetail"
import Login from "../Login"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class ViewWindow extends Component {
  render() {
    return (
      <div className="view-window">
        <Calendar />
        <SidePanel />
        <Route exact path="/login" exact component={Login} />
        {/* <Route exact path="/event/edit/:id" component={EditEvent} />
        <Route path="/event/new" component={AddEvent} />
        <Route exact path="/event/detail" component={DayDetail} /> */}
      </div>
    )
  }
}

export default ViewWindow
