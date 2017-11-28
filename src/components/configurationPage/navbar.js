import React from 'react';
import classNames from 'classnames';
import wearerLogo from '../../assets/icons/default_avatar.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class SettingsNavbar extends React.Component{ 

constructor(props) {
    super(props);
    // this.CreateWearersList = this.CreateWearersList.bind(this);
    this.HandleSearch = this.HandleSearch.bind(this);
    this.state = {
      wearersData : [{'logo': "1", 'name': 'Joan'}, 
                     {'logo': "2", 'name': 'Kate'},
                     {'logo': "3", 'name': 'Mark'},
                     {'logo': "4", 'name': 'Angelina'},
                     {'logo': "4", 'name': 'Bruse'}],
      search: ""
    };
  };


  HandleSearch(event) {
      this.setState({search: event.target.value.substr(0,20)})
  };
      



 render(){

        let filteredWearers = this.state.wearersData.filter(
              (wearer) => {
                return wearer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
              }
          );

        const namesList = filteredWearers.map((wearer) => {

          return (
            <li className="wearers__user" key={wearer.name.toString()}>
                <div className="wearers__user__logo"> {wearer.logo} </div> 
                <div className="wearers__user__name"> {wearer.name} </div>
            </li>
          )
        });






        return (
            <div className="wearers">
                <div className="tile__header"> Wearers List </div>
                <div className="searchWrap">
                    <input className="searchWearers" placeholder="Search" type="text" value={this.state.search} onChange={this.HandleSearch} />
                </div>
                <ul>{namesList}</ul>
                <button class="addWearerButton">
                    <svg class="addWearerButton__icon" fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span class="addWearerButton__name">Add Wearer</span>
                </button>
            </div>
        );
    }
}



export default SettingsNavbar;