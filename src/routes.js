import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './app.js';
import Home from './components/home/home.js';
import NotFound from './components/notfound/notFound.js';
import Login from './components/login/login.js';
import SignUp from './components/signup/signUp.js';
// import {
//   BrowserRouter as Router,
//    Redirect,
//   withRouter,  Link
// } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router-dom';
// import { browserHistory } from 'react-router-dom';
//import { Route, IndexRoute } from 'react-router';

// class Routes extends React.Component{
		
//     render(){
//         return (
// 		    <Route path='/' component={App}>
// 			 	<IndexRoute component={Home} />
// 			 	<Route exact path='/signup' component={SignUp}/>
// 			    <Route exact path='/login' component={Login}/> 
// 		 	</Route>
//         );
//     }
// };
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//export default Routes;



export default (
		 <Route path='/' component={App}>
		 	
		 	<Route path='/signup' component={SignUp}/>
		    <Route path='/login' component={Login}/> 
		 </Route>
	);

// <Route path='*' component={NotFound}/>

// <IndexRoute component={Home} />
// <IndexRoute component={Home} />