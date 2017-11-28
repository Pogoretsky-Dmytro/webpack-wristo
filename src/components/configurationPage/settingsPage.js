import React from 'react';
import classNames from 'classnames';
import Header from './header.js';
import SettingsNavbar from './navbar.js';
import WearerConfiguration from './WearerConfiguration.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SettingsPage extends React.Component{ 
    render(){
        return (
        <div>
          <Header/>
          <div className="contentWrap">
            <SettingsNavbar/>
            <WearerConfiguration/>
          </div> 
        </div>
        );
    }
}



export default SettingsPage;