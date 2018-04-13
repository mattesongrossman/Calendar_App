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
import NavBar from "../NaVBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Login extends Component {
 constructor(props) {
    super(props)
    this.state = {
 <{NavBar}>
<h1> Login! </h1>









//       },
      created: false
    }
    this.User = this.User.bind(this)
    this.verifyPassword = this.verifyPassword.bind(this)


  componentDidMount() {}

  User(evt) {
    //selects the name of the input field
    const username = evt.target.name
    //selects the value of the input field
    const password = evt.target.value

      return {
        User: User
      }
    }
  }

render{


  <form onSubmit={this.User}>
        <label>Name
          <input class = "username">
            type="text"
            name="username" }
            value={this.state.username} />
        </ input>
        </label>
        <label>Password
          <input>
            type="password"
            name="password"
            value={this.state.password} />
        </label>
        < button type="submit" value="Submit">. Submit </button>
      <h2>Already have an account? </h2>
 < Register Route path="/event/register" component={Register} />

      </form>

};


export default Login

// https://git.generalassemb.ly/wdi-nyc-ewok/auth_react/blob/master/client/src/components/UserForm.js
