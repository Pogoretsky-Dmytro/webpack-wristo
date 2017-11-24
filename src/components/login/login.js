import React from 'react';
import ReactDOM from 'react-dom';
import logoImg from '../../assets/images/logoW.png';
import LogInForm from './loginForm.js';
//import { Link } from 'react-router';
// import {
//   BrowserRouter as Router,
//    Redirect,
//   withRouter,  Link, browserHistory
// } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return (
    <div className="sign_Page">
    <header>
        <div className="header__logo">
        <img src={logoImg} alt=""/>
        <span> wristo </span>
        </div>
    </header>
    
    <div className="wrap">
        <div>
        <p id="heading">Log in</p>
        </div>
        
        <LogInForm/>

        <div className="sign">
            <p>Don't have an account? 
                <Link to='/signup'>Create account</Link>
            </p>
        </div>
    </div>    
</div>
        );
    }
}

export default Login;

// <a href="../html/Sign_up_page_Responsive.html"> Create account</a>