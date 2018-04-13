import React, { Component } from "react"
import Login from "../Login"
// import NavBar from "../NaVBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Register extends Component {
 constructor(props)  {
    super(props); }
  makingNewUser(evt) {
    //selects the name of the input field
    const username = evt.target.value;
    //selects the value of the input field
    const password = evt.target.value;
  };
 render(){
  return(
  <div>

<h1> Register as a New User! </h1>

<form>
          <input type="text"
            name = "username"
            placeholder = "username"
            value={this.state.username}>
             </input>
             <input  type="text"
            name="password"
            value={this.state.password}>
             placeholder = "password"
             /> </input>



//inner html is join us, button puts users information in database
        <button type= "submit"> Join Us! </button>


</form>
</div>
);
}
}


export default Register

