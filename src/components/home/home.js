import React from 'react';
import ReactDOM from 'react-dom';
//import { Link } from 'react-router';
// import {
//   BrowserRouter as Router,
//    Redirect,
//   withRouter,  Link, browserHistory
// } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1> Home page </h1>
                <p> <Link to='/login'>Log in to continue</Link> </p>
            </div>
        );
    }
}

export default Home;