import React from 'react';
import classNames from 'classnames';
import Header from './header.js'
import SettingsNavbar from './navbar.js'
import profileLogo from '../../assets/images/OldWoman3.png';
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
            <button>
            </button>
          </div>
          <div className="wearerProfile__info">
            <img src={profileLogo} alt=""/>
            <div className="wearerProfile__info__table">
              <table>
                <tbody>
                  <tr>
                    <td>Full name</td>
                    <td>Joan&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td>Age&nbsp;</td>
                    <td>78&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Weight&nbsp;</td>
                    <td>72&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Resting &amp; Max</p>
                      <p>heart rate&nbsp;</p>
                    </td>
                    <td>120 - 150&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Group&nbsp;</td>
                    <td>&nbsp; &nbsp; &nbsp; -&nbsp;</td>
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