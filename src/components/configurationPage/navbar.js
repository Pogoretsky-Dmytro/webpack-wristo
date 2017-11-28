import React from 'react';
import classNames from 'classnames';
import wearerLogo from '../../assets/icons/default_avatar.png';
import NavbarButton from './navbarButton.js'
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
                     {'logo': "4", 'name': 'Angelina'}],
      search: ""
    };
  };

// {'logo': "4", 'name': 'Bruse'}

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
            <div>
            <div className="wearers">
                <div className="tile__header"> Wearers list </div>
                <div className="searchWrap">
                <svg className="search_icon" fill="#b3b3b3" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg> 
                    <input className="searchWearers" placeholder="Search" type="text" value={this.state.search} onChange={this.HandleSearch}/>

                    

                </div>
                <ul>{namesList}</ul>
                
            </div>
                <NavbarButton/>
            </div>
        );
    }
}



export default SettingsNavbar;


// <button class="addWearerButton">
//                     <svg class="addWearerButton__icon" fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
//                       <path d="M0 0h24v24H0z" fill="none"/>
//                     </svg>
//                     <span class="addWearerButton__name">Add Wearer</span>
//                 </button>