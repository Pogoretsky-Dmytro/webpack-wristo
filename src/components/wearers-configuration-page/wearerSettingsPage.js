import React from 'react';
import classNames from 'classnames';
import Header from '../header/header.js';
import SettingsNavbar from './wearer-navbar/navbar.js';
import WearerConfiguration from './wearer-configuration-page/wearerConfiguration.js';
import WristoConfiguration from './wristo-group-configuration/wristoGroupConfiguration.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SettingsPage extends React.Component{ 

  constructor(props) {
    super(props);
    this.handleWearerData = this.handleWearerData.bind(this);

    this.state = {
      wearerId: "1"
    }
    };

    // this.state = {
    //   wearersData : [
    //   {'id': '1','full_name': 'Joan', 'gender': 'Female', 'age': '78', 'weight': '72', 'heart_rate': '120-150', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
    //   {'id': '2','full_name': 'Kate', 'gender': 'Female', 'age': '68', 'weight': '60', 'heart_rate': '60-120', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
    //   {'id': '3','full_name': 'Mark', 'gender': 'Male', 'age': '70', 'weight': '65', 'heart_rate': '80 - 130', 'image': 'https://image.flaticon.com/icons/svg/145/145842.svg', 'master_id': '0'},
    //   {'id': '4','full_name': 'Angelina', 'gender': 'Female', 'age': '50', 'weight': '85', 'heart_rate': '110-160', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
    //   ],
    //   search: ""
    // };
  // };

  handleWearerData(event) {
    // event.preventDefault();
    // this.setState({wearerId: event.target.key});

    this.setState({wearerId: event});

    console.log(this.state.wearerId);
    console.log(event);
    console.log(this.props.children);
    
  };

    render(){



   let  wearersData = [
      {'id': '1','full_name': 'Joan', 'gender': 'Female', 'age': '78', 'weight': '72', 'heart_rate': '120-150', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
      {'id': '2','full_name': 'Kate', 'gender': 'Female', 'age': '68', 'weight': '60', 'heart_rate': '60-120', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
      {'id': '3','full_name': 'Mark', 'gender': 'Male', 'age': '70', 'weight': '65', 'heart_rate': '80 - 130', 'image': 'https://image.flaticon.com/icons/svg/145/145842.svg', 'master_id': '0'},
      {'id': '4','full_name': 'Angelina', 'gender': 'Female', 'age': '50', 'weight': '85', 'heart_rate': '110-160', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
      ];

    // let wearer = wearersData.map((element)=>{ if (element.id===this.state.wearerId) { return element}});
    // var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

      let wearerArray = wearersData.filter((element)=>{ if (element.id===this.state.wearerId) { return element}});
      //console.log(wearerArray);

      let wearer = wearerArray[0];
      //console.log(wearer);

        return (
        <div>
          <Header/>
          <div className="contentWrap">
            <SettingsNavbar wearersData = {wearersData} handleWearerData={this.handleWearerData} />
            <WearerConfiguration wearer = {wearer} />
          </div> 
        </div>
        );
    }
}



export default SettingsPage;