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
        // if (!this.props.wearerData || this.props.wearerData.length === 0) {
        //   return null;
        // }

        console.log('props.wearers', this.props.wearersData);

        let wearersBuffer = this.props.wearersData;
        // console.log(wearersBuffer);
        let wearerID = this.props.wearerId;
        console.log('wearerID', wearerID)
        let wearerArray = wearersBuffer.filter(function (element){ 
        console.log('element',element);
        if(element.id===wearerID) {return true}});//element

        console.log('wearerArray', wearerArray);
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