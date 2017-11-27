import React from 'react';
import classNames from 'classnames';
import Header from './header.js'
import SettingsNavbar from './navbar.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ConfigurationPage extends React.Component{ 
    render(){
        return (
        <div>
  			<Header />,
  			<SettingsNavbar/>
		</div>
        );
    }
}



export default ConfigurationPage;