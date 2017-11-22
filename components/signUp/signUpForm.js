import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.handlefirstNameInput = this.handlefirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.sendData = this.sendData.bind(this);
    // this.handleShowPass = this.handleShowPass.bind(this);
    // this.handleHidePass = this.handleHidePass.bind(this);
    this.handleTooglePass = this.handleTooglePass.bind(this);
    // this.handleInputStyle = this.handleInputStyle.bind(this);
    
    this.state = {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      passError: false,
      isShowed: false,
      textValue:'Show',
      passwordType: 'password',
      isSendData: false
      //divStyle: null

      //{outline: 5px solid #b52f54;}
    };
  }

// var classnames = classNames(
//   'foo', 
//   'bar'
//   );
   

handleTooglePass(event){
  event.preventDefault();
  let isShowed = this.state.isShowed;
  let target = event.target;
  const name = target.name;
  let textValue = target.textValue;
  
    if (isShowed) {
      console.log('false');
      console.log(textValue);
      this.setState ({isShowed: false});
      event.target.textValue =  "Show";
      this.setState ({passwordType: 'password'});
    } 

    else {
      console.log('true');
      console.log(event.target.textValue);
      this.setState({isShowed: true});
      event.target.textValue = "Hide";
      this.setState ({passwordType: 'text'});
    }

    this.setState({textValue : event.target.textValue});
    return this.state.textValue;

  };


  handleEmailInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let emailInput = this.state.email;
    if (!emailFilter.test(emailInput)) {
        this.setState({emailError: true});
    }
    else {
        this.setState({emailError: false});
    }
  };

  handlePassInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    let passFilter = /^([A-Za-z\d$@$!%*?&\S]){8,16}$/;
    let passInput = this.state.password;
    if (!passFilter.test(passInput)) {
        this.setState({passError: true});
    }
    else {
        this.setState({passError: false});
    }
  };

  handlefirstNameInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    let firstNameFilter = /^([A-Za-z]){2,30}$/;
    let firstNameInput = this.state.firstName;
    if (!firstNameFilter.test(firstNameInput)) {
        this.setState({firstNameError: true});
        // this.setState(divStyle: {
        //         outlineWidth: 5,
        //         outlineStyle: 'solid',
        //         outlineColor: '#b52f54' 
        // });
    //     inputStyle= {
    //             outlineWidth: 5,
    //             outlineStyle: 'solid',
    //             outlineColor: '#b52f54' 
    //     };
    //console.log(this.state.divStyle);
    }
    else {
        this.setState({firstNameError: false});
    }
  };

// style={{marginRight: spacing + 'em'}}

//   handleInputStyle(event){
//       this.setState(divStyle: {
//       outlineWidth: 5,
//       outlineStyle: 'solid',
//       outlineColor: '#b52f54'


//       // 'outline-width': '5px',
//       // 'outline-style': 'solid',
//       // 'outline-color': '#b52f54'
// }); 
//       return this.state.divStyle;

//   }

  handleLastNameInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    let lastNameFilter = /^([A-Za-z]){2,30}$/;
    let lastNameInput = this.state.lastName;
    if (!lastNameFilter.test(lastNameInput)) {
        this.setState({lastNameError: true});
        // this.setState(divStyle: {
        //         outlineWidth: 5,
        //         outlineStyle: 'solid',
        //         outlineColor: '#b52f54' 
        // });
        
    }
    else {
        this.setState({lastNameError: false});
        //target.styles={outline: 5px solid #b52f54};
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
    this.setState({isSendData: true});
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
    //this.setState({isSendData: true});
  })
  .catch(function (error) {
    console.log(error);
    //this.setState({isSendData: true});
  });
};


  render() {

    let firstNameStyle = classNames({
      'inputField': (this.state.firstNameError === true && this.handlefirstNameInput) || (this.state.firstNameError === true && this.sendData) || (this.state.firstName == null && this.state.isSendData) 
    }); 

    let lastNameStyle = classNames({
      'inputField': (this.state.lastNameError === true && this.handleLastNameInput) || (this.state.lastNameError === true && this.sendData) || (this.state.lastName == null && this.state.isSendData)
    }); 
    let emailStyle = classNames({
      'inputField': (this.state.emailError === true && this.handleEmailInput) || (this.state.emailError === true && this.sendData) || (this.state.email == null && this.state.isSendData)
    }); 
    let passwordStyle = classNames({
      'inputField': (this.state.passError === true && this.handlePassInput) || (this.state.passError === true && this.sendData) || (this.state.password == null && this.state.isSendData)
    }); 

    return (
        <form className="signUpForm">
            <p>First name <span>*</span>
            </p>
        <input className={firstNameStyle} classnames="firstName" name="firstName" type="text" placeholder="Nancy" maxLength="30" onChange={this.handlefirstNameInput} onBlur={this.saveInput}/>
            
            {((this.state.firstNameError && this.state.isSendData) || this.state.isSendData) && <div className="error">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Only letters from 2 to 30 </span>
            </div>}

            <p>Last name <span>*</span>
            </p>
        <input className={lastNameStyle} classnames="lastName" name="lastName" type="text" placeholder="McQueen" maxLength="30" onChange={this.handleLastNameInput} onBlur={this.saveInput}/>
            
          {this.state.lastNameError && <div className="error">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Only letters from 2 to 30 </span>
            </div>}

            <p>Email <span>*</span>
            </p>
        <input className={emailStyle} classnames="email" name="email" type="text" placeholder="nancy.mcqueen@mail.com" onChange={this.handleEmailInput} onBlur={this.saveInput}/>
            

            {this.state.emailError && <div className="error">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Please provide a valid email address </span>
            </div>}
            
        
        <p>Password <span>*</span></p>
            <input className={passwordStyle} classnames="password" name="password" type={ this.state.passwordType } placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" onChange={this.handlePassInput} onBlur={this.saveInput}/>
            
            {this.state.passError && <div className="error">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> The password must be between 8 and 16 characters </span>
            </div>}

            <button className="showPass" name="showPass" onClick={this.handleTooglePass}>{this.state.textValue}</button>

            <input className="submit" type="button" value="Create account" onClick={this.sendData}/>
        </form>

    );
  }
}


export default SignUpForm;