import React, { Component } from "react"
import Login from "../Login"
import AddEvent from "../AddEvent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


//export default Navbar;
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render {
    return(
  <Router>
      //heading is standard html
      <nav>
        <h1> Calendar App </h1>
        //make a link to the add event page
        < Link to ="/AddEvent"> the plus sign thingy </Link>
           //make a link to the login page
      <Link to="/Login"> Login! </Link>
     </nav>
</Router>
);
}
}
//exporting the navbar so that it can be used in other views
export default NavBar
