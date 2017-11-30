import React from 'react';
import classNames from 'classnames';
import profileLogo from '../../../assets/images/Joan.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WearerProfile extends React.Component{ 



  constructor(props) {
    super(props);

    // this.state = {
    //   wearerData : [{'id': '0','full_name': 'Joan', 'gender': 'Female', 'age': '78', 'weight': '72', 'heart_rate': '120-150', 'image': 'string', 'master_id': '0'}, 
    //                ]
    // };
  };
  
    render(){

        let wearersBuffer = this.props.wearersData;
        let wearerArray = wearersBuffer.filter((element)=>{ 
        if (element.id===this.props.wearerId) {return element}});


      let wearer = wearerArray[0];


        return (
        <div className="wearerProfileWrap">
  			  <div className="wearerProfile__header">
            <p>Wearer profile</p>
            <button className="editWearerButton">
            </button>
          </div>
          <div className="wearerProfile__info">
            <img src={`${wearer.image}`} alt='' />
            <div className="wearerProfile__info__table">
              <table>
                <tbody>
                  <tr>
                    <td>Full name</td>
                    <td>{wearer.full_name}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{wearer.gender}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>{wearer.age}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{wearer.weight}</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Resting Max</p>
                      <p>heart rate</p>
                    </td>
                    <td>{wearer.heart_rate}</td>
                  </tr>
                  <tr>
                    <td>Group</td>
                    <td>{wearer.master_id}</td>
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