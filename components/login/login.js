import React from 'react';
import ReactDOM from 'react-dom';
import logoImg from '../../src/assets/images/logoW.png';


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
        
        <form>
        <p>Email</p>
        <input className="email" type="text" placeholder="user@mail.com"/>
        
        <p>Password</p>
            <input className="password" type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"/>
            <div className="loginError" hidden="">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Invalid login or password. Please try again. </span>
            </div>
            <p id="forgotPass"><a href="#"> Forgot password?</a></p>
            
            <input className="submit" type="button" value="Sign in"/>
            
        </form>
 
        <div className="sign">
            <p>Don't have an account? 
                <a href="../html/Sign_up_page_Responsive.html"> Create account</a>
            </p>
        </div>
    </div>    
</div>
        );
    }
}

export default Login;