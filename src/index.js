import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import routes from './routes.js';
import Axios from 'axios';
import classNames from 'classnames';
import App from './app.js';
import Home from './components/home/home.js';
import NotFound from './components/notfound/notFound.js';
import Login from './components/login/login.js';
import SignUp from './components/signup/signUp.js';
import WearerConfiguration from './components/wearers-configuration-page/wearer-configuration-page/wearerConfiguration.js';
import WearerConfiguration_css from './components/wearers-configuration-page/wearer-configuration-page/wearerConfiguration.css';
import WearerProfile from './components/wearers-configuration-page/wearer-profile/wearerProfile.js';
import WearerProfile_css from './components/wearers-configuration-page/wearer-profile/wearerProfile.css';
import header_css from './components/header/header.css';
import navbar_css from './components/wearers-configuration-page/wearer-navbar/navbar.css';
import SettingsNavbar from './components/wearers-configuration-page/wearer-navbar/navbar.js';
import SettingsPage from './components/wearers-configuration-page/wearerSettingsPage.js';
import settingsPage_css from './components/wearers-configuration-page/wearerSettingsPage.css';
import WristoConfiguration from './components/wearers-configuration-page/wristo-group-configuration/wristoGroupConfiguration.js';
import css from './components/Sign_in_up_Responsive.css';
import wristoConfiguration_css from './components/wearers-configuration-page/wristo-group-configuration/wristoGroupConfiguration.css';
import CarersData_css from './components/wearers-configuration-page/carers-data/carersData.css';
// import {
//   BrowserRouter as Router,
//    Redirect,
//   withRouter,  Link
// } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router-dom';
// import { browserHistory } from 'react-router-dom';
//import { Route, IndexRoute } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={SettingsPage}/>
		 	<Route path='/signup' component={SignUp}/>
		    <Route path='/login' component={Login}/> 
		</div>
	</Router>,
	document.getElementById('root')
);

// <Router history={browserHistory} routes={routes}/>,