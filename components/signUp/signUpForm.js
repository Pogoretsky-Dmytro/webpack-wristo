import React from 'react';
import axios from 'axios';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.sendData = this.sendData.bind(this);
    // this.checkEmail = this.checkEmail.bind(this);
  }


  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    // console.log(value);

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var emailInput = this.state.email;
    if (!filter.test(emailInput)) {
        console.log('error');
    EmailError.setState({error: true});
    // emailError[0].removeAttribute("hidden"); 
    }
    else {
        // emailError[0].setAttribute("hidden", "");
        console.log('good');
        EmailError.setState({error: false});
    }

  };

  saveInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if(name=='firstName') {
      this.setState({firstName: value});
      console.log("firstname success");
    } else if(name=='lastName') {
      this.setState({lastName: value});
      console.log("lastname success");
    } else if(name=='email') {
      this.setState({email: value});
      console.log("email success");
    }else if(name=='password') {
      this.setState({password: value});
      console.log("password success");
    };
 };

  
  
  sendData(event){
    event.preventDefault();
    axios({
            method: 'post',
            url: 'https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_up',
            data: {
              user: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password
              }
            }

}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


// function checkEmail() {
//     var doc = document;
//     var emailError = doc.getElementsByClassName('emailError');
//     var email = doc.getElementsByClassName('email')[0].value;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
//     if (!filter.test(email)) {
//     emailError[0].removeAttribute("hidden"); 
//     }
//     else {
//         emailError[0].setAttribute("hidden", "");
//     }   
// }

  
//   checkEmail(){
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var emailInput = this.state.email;
//     if (!filter.test(emailInput)) {
//     console.log('error');
//     // emailError[0].removeAttribute("hidden"); 
//     }
//     else {
//         // emailError[0].setAttribute("hidden", "");
//         console.log('good');
//     } 
// }





















  render() {
    return (
        <form className="signUpForm">
            <p>First name <span>*</span>
            </p>
        <input className="firstName" name="firstName" type="text" placeholder="Nancy" maxlength="30" onChange={this.handleInput} onBlur={this.saveInput}/>
            
            <p>Last name <span>*</span>
            </p>
        <input className="lastName" name="lastName" type="text" placeholder="McQueen" maxlength="30" onChange={this.handleInput} onBlur={this.saveInput}/>
            
            <p>Email <span>*</span>
            </p>
        <input className="email" name="email" type="text" placeholder="nancy.mcqueen@mail.com" onChange={this.handleInput} onBlur={this.saveInput}/>
            
            
        <p>Password <span>*</span></p>
            <input className="password" name= "password" type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" onChange={this.handleInput} onBlur={this.saveInput}/>
            <div className="passError" hidden="">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> The password must be between 8 and 16 characters </span>
            </div>
            <a className="showPass" href="#">Show</a>
            <input className="submit" type="button" value="Create account" onClick={this.sendData}/>
        </form>

    );
  }
}


class EmailError extends React.Component{
    constructor(props) {
        super(props);
        this.state = {error: false};
      }

  render() {
    var error = this.state.error;

    if(error){
      return null
    }
    return (
        <div className="emailError">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Please provide a valid email address </span>
            </div>
      );
}
}


export default SignUpForm;