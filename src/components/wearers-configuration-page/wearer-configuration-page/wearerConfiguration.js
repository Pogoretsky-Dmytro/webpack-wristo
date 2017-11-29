import React from 'react';
import classNames from 'classnames';
import WearerProfile from '../wearer-profile/wearerProfile.js';
import WristoConfiguration from '../wristo-group-configuration/wristoGroupConfiguration.js';
import CarersData from '../carers-data/carersData.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WearerConfiguration extends React.Component{ 

    constructor(props) {
    super(props);
    //this.HandleWearerData = this.HandleWearerData.bind(this);
    };



    render(){
     
      // const {handleWearerData, wearer} = this.props

      let wearer = this.props.wearer;
        return (
        <div className="wearerConfigWrap">
  			  <p className="wearerConfigWrap__name">Configuration Page</p>
          <p className="wearerConfigWrap__description">Manage information about wristo</p>
          <WearerProfile wearer = {wearer} />
          <WristoConfiguration/>
          <CarersData/>
		    </div>
        );
    }
}



export default WearerConfiguration;