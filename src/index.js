import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import routes from './routes.js';
import Axios from 'axios';
import classNames from 'classnames';
import css from './components/Sign_in_up_Responsive.css';
import App from './app.js';
import Home from './components/home/home.js';
import NotFound from './components/notfound/notFound.js';
import Login from './components/login/login.js';
import SignUp from './components/signup/signUp.js';
import WearerConfiguration from './components/configurationPage/WearerConfiguration.js';
import WearerConfiguration_css from './components/configurationPage/WearerConfiguration.css';
import WearerProfile from './components/configurationPage/wearerProfile.js';
import WearerProfile_css from './components/configurationPage/wearerProfile.css';
import header_css from './components/configurationPage/header.css';
import navbar_css from './components/configurationPage/navbar.css';
import SettingsNavbar from './components/configurationPage/navbar.js';
import SettingsPage from './components/configurationPage/settingsPage.js';
import settingsPage_css from './components/configurationPage/settingsPage.css';
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
			<Route exact path='/' component={Home}/>
		 	<Route path='/signup' component={SignUp}/>
		    <Route path='/login' component={Login}/> 
		    <Route path='*' component={NotFound}/>
		</div>
	</Router>,
	document.getElementById('root')
);

// <Router history={browserHistory} routes={routes}/>,