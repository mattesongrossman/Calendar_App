// -navbar
// <form>
// -static html-Login to your account:
// placeholder: username
// input = newUsername

// submit button
// Already have an account?- hard coded
// Login link
// <form>
import  React, { Component } from "react"
import Register from "../Register"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props) ;
 this.onSubmit = this.onSubmit.bind(this);
this.state = {
      username: '',
      password: ''
    };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
onSubmit(data) {
    this.props.submit(data);
  }
 handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

   render() {

      return(
  <div>
<h1> Login! </h1>




      <form onSubmit = {this.handleSubmtit}>
            <label>Username
          <input type="text"
            name="username"
            placeholder = "username"
            value= {this.state.username}
            onChange={this.handleChange}/>

            </label>

            <label> Passwrd
             <input  type= "text"
            name= "password"
              placeholder = "password"
            value= {this.state.password}
            onChange={this.handleChange}
                                 />
            </label>




        <button type= "submit" value= "Submit"> Submit</button>




 </form>
 </div>
)
}
}



export default Login
