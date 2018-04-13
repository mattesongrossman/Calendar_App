// -navbar
// <form>
// -static html-Login to your account:
// placeholder: username
// input = newUsername

// submit button
// Already have an account?- hard coded
// Login link
// <form>
import import React, { Component } from "react"
import Register from "../Register"
import NavBar from "../NavBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Login extends Component {
 constructor(props) {
    super(props)
    render{
      return(
 <{NavBar}>
<h1> Login! </h1>

userLoggingIn(evt) {
    //selects the name of the input field
    const username = evt.target.username.value
    //selects the value of the input field
    const password = evt.target.password.value
  };


      <form>
          <input type="text"
            name="username"
            placeholder = "username"
            value= {this.state.username}
            />
             <input  type="text"
            name="password"
            value={this.state.password}
             />




        <button type= "submit"> Welcome Back! </button>
      <h2> Don't have an account? </h2>
      <Link to="/Register"> <button> Register! </button> </Link>
      </h2>



</form>
);
}
}


export default Login



