import React from 'react';
import logoImg from '../../src/assets/images/logoW.png';
import SignUpForm from './signUpForm.js';
import classNames from 'classnames';

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
        <div>
        <p id="heading">Sign up</p>
        </div>
        
       <SignUpForm/>
        
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