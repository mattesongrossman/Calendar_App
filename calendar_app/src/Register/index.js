import import React, { Component } from "react"
import Login from "../Login"
import NavBar from "../NaVBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Register extends Component {
 constructor(props) {
    super(props)
 render{
  return(

 <{NavBar}>
<h1> Register as a New User! </h1>






      }
    }
  }
makingNewUser(evt) {
    //selects the name of the input field
    const username = evt.target.username.value
    //selects the value of the input field
    const password = evt.target.password.value
  };



<form>
          <input type="text"
            name="username"
            placeholder = "username"
            value={this.state.username}>
            <input/>
             <input  type="text"
            name="password"
            value={this.state.password}>
             </input>



//inner html is join us, button puts users information in database
        <button type= "submit"> Join Us! </button>
      <h2>Already have an account? </h2>
 <Link to="/Login"><button>  Login! </button> </Link>


  </form>
);
}
}


export default Register

