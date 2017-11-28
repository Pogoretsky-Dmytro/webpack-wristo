import React from 'react';
import classNames from 'classnames';
import Header from './header.js'
import SettingsNavbar from './navbar.js'
import WearerProfile from './wearerProfile.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WearerConfiguration extends React.Component{ 
    render(){
        return (
        <div className="wearerConfigWrap">
  			  <p className="wearerConfigWrap__name">Configuration Page</p>
          <p className="wearerConfigWrap__description">Manage information about wristo</p>
          <WearerProfile/>
		    </div>
        );
    }
}



export default WearerConfiguration;