import React from 'react';
import logoImg from '../../src/assets/images/logoW.png';

class SignUp extends React.Component{ 
    render(){
        return (
        <div className="sign_Page">
    <header>
        <div className="header__logo">
        <img src={logoImg} alt="" />
        <span> wristo </span>
        </div>
    </header>
    
    <div className="wrapUp">
        <div >
        <p id="heading">Sign up</p>
        </div>
        
        <form className="signUpForm">
            <p>First name <span>*</span>
            </p>
        <input className="firstName" type="text" placeholder="Nancy" min="" maxlength="30"/>
            
            <p>Last name <span>*</span>
            </p>
        <input className="lastName" type="text" placeholder="McQueen" maxlength="30"/>
            
            <p>Email <span>*</span>
            </p>
        <input className="email" type="text" placeholder="nancy.mcqueen@mail.com"/>
            <div className="emailError" hidden="">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> Please provide a valid email address </span>
            </div>
            
        <p>Password <span>*</span></p>
            <input className="password" type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" />
            <div className="passError" hidden="">
                <svg fill="#b52f54" height="13" viewBox="0 0 23 23" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <span> The password must be between 8 and 16 characters </span>
            </div>
            <a className="showPass" href="#" onclick="togglePassword()">Show</a>
            <input className="submit" type="button" value="Create account"/>
        </form>
        <div className="sign">
            <p>    
            <a href="#">Go back to log in</a>
            </p>
        </div>
    </div>    
</div>
        );
    }
}

export default SignUp;