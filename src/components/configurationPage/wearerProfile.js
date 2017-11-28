import React from 'react';
import classNames from 'classnames';
import Header from './header.js'
import SettingsNavbar from './navbar.js'
import profileLogo from '../../assets/images/Joan.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WearerProfile extends React.Component{ 
    render(){
        return (
        <div className="wearerProfileWrap">
  			  <div className="wearerProfile__header">
            <p>Wearer profile</p>
            <button className="editWearerButton">
            </button>
          </div>
          <div className="wearerProfile__info">
            <img src={profileLogo} alt=""/>
            <div className="wearerProfile__info__table">
              <table>
                <tbody>
                  <tr>
                    <td>Full name</td>
                    <td>Joan</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>78</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>72</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Resting Max</p>
                      <p>heart rate</p>
                    </td>
                    <td>120 - 150</td>
                  </tr>
                  <tr>
                    <td>Group</td>
                    <td>   -</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
		    </div>
        );
    }
}



export default WearerProfile;