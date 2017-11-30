import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Header from '../header/header.js';
import SettingsNavbar from './wearer-navbar/navbar.js';
import WearerConfiguration from './wearer-configuration-page/wearerConfiguration.js';
import WristoConfiguration from './wristo-group-configuration/wristoGroupConfiguration.js';
import WearerError from './wearer-error.js';
import WearersLoading from './wearer-loading.js';
import WearerProfile from './wearer-profile/wearerProfile.js';
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
      wearerId: "1",
      axiosData: [],
      error: false
    }
  };

componentWillMount() {          
  axios({
      method: 'get',
      url: 'https://wristo-platform-backend-stg.herokuapp.com/api/v1/wearers',
      headers: {'X-Requested-With': 'XMLHttpRequest', 'accept': 'application/json', 'content-type': 'application/json', 
      'uid': 'boretskairuna23@gmail.com', 'client': 'aqtmsJ3OTtyESjb9YYRgmQ', 'access-token': 'RIlOD4nWyR905zNCgla-jw'},
      responseType: 'json'
    }).then(response => {

     this.setState({axiosData: response.data});

 //     console.dir('axiosData inside promise -->' + this.state.axiosData);

      }).catch((error) => { 
        console.log(error);
        this.setState({error: true})
        });
    };





  handleWearerData(event) {
    this.setState({wearerId: event});
  };

    render(){
 // console.log('axiosData outside promise -->' + this.state.axiosData);


   // let  wearersData = this.state.axiosData;
   // let  wearersData = [
   //    {'id': '1','full_name': 'Joan', 'gender': 'Female', 'age': '78', 'weight': '72', 'heart_rate': '120-150', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
   //    {'id': '2','full_name': 'Kate', 'gender': 'Female', 'age': '68', 'weight': '60', 'heart_rate': '60-120', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
   //    {'id': '3','full_name': 'Mark', 'gender': 'Male', 'age': '70', 'weight': '65', 'heart_rate': '80 - 130', 'image': 'https://image.flaticon.com/icons/svg/145/145842.svg', 'master_id': '0'},
   //    {'id': '4','full_name': 'Angelina', 'gender': 'Female', 'age': '50', 'weight': '85', 'heart_rate': '110-160', 'image': 'https://image.flaticon.com/icons/svg/145/145847.svg', 'master_id': '0'},
   //    ];

      // let wearerArray = wearersData.filter((element)=>{ 
      //   if (element.id===this.state.wearerId) { return element}});


      // let wearer = wearerArray[0];


    return (
          <div>
          <Header/>
          <div className="contentWrap">
          {
            this.state.error ? <WearerError /> : this.state.axiosData.length != 0 ? 
            <div>
            <SettingsNavbar wearersData = {this.state.axiosData} handleWearerData={this.handleWearerData} />
            <WearerConfiguration wearersData = {this.state.axiosData}  wearerId = {this.state.wearerId} />
            </div>
            :
            <WearersLoading/>
          } 

          </div> 
        </div>
        
        );
    }
}



export default SettingsPage;



            // <WearerConfiguration wearersData = {this.state.axiosData}  wearerId = {this.state.wearerId} />

 // <SettingsNavbar wearersData = {this.state.axiosData} handleWearerData={this.handleWearerData} />

            // { 
            //   wearerError ?
            //     <WearerError errorData={wearerError} >
            //     :
            //     wearerArray ?
            //       <WearerData data={wearerArray}
            //       :
            //       <WearerLoading />
            // }