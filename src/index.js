import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import routes from './routes.js';
import Axios from 'axios';
import classNames from 'classnames';
// import css from './components/Sign_in_up_Responsive.css';
import App from './app.js';
import Home from './components/home/home.js';
import NotFound from './components/notfound/notFound.js';
import Login from './components/login/login.js';
import SignUp from './components/signup/signUp.js';
import ConfigurationPage from './components/configurationPage/configurationPage.js';
import header_css from './components/configurationPage/header.css';
import SettingsNavbar from './components/configurationPage/navbar.js';
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
			<Route exact path='/' component={SettingsNavbar}/>
		 	<Route path='/signup' component={SignUp}/>
		    <Route path='/login' component={Login}/> 
		</div>
	</Router>,
	document.getElementById('root')
);

// <Router history={browserHistory} routes={routes}/>,