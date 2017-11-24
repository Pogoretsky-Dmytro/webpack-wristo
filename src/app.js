import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component{
		
    render(){
        return (
		    <div>
		    	{this.props.children}
		    </div>
        );
    }
};

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;








// <Switch>
// 		      <Route exact path='/' component={Home}/>
// 		      <Route exact path='/signup' component={SignUp}/>
// 		      <Route exact path='/login' component={Login}/>
// 		      <Route path='*' component={NotFound}/>
// 		    </Switch>