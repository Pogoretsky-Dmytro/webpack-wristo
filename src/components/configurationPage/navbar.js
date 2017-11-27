import React from 'react';
import classNames from 'classnames';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class SettingsNavbar extends React.Component{ 

constructor(props) {
    super(props);

    this.wearerList = this.wearerList.bind(this);

    this.state = {
        wearersData : ['Joan', 'Kate', 'Mark', 'Angelina']
    }
  };


  // let wearersList = [{'avatar': '1', 'name': 'Joan'}, 
  //                    {'avatar': '2', 'name': 'Kate'}, 
  //                    {'avatar': '3', 'name': 'Mark'}, 
  //                    {'avatar': '4', 'name': 'Angelina'}];

  // var wearersData = ['Joan', 'Kate', 'Mark', 'Angelina'];

  wearerList() {
    let w = this.state.wearersData;
    console
    const wearers = w.map((wearer) =>
          <li key={wearer.toString()}> {wearer} </li>);
        
        return (
        <ul>
          {wearers}
        </ul>
      );
 }



//   wearerList(props) {
//   const wearers = props.wearers;
//   const listWearers = wearers.map((wearer) =>
//     // Correct! Key should be specified inside the array.
//     <WearersList key={wearer.toString()}
//               value={wearer} />

//   );
//   return (
//     <ul>
//       {listWearers}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

//   <NumberList numbers={numbers} />,
//   document.getElementById('root');

// const wearers = [1, 2, 3, 4, 5];



    render(){
        return (
            <div>
                <h1> it is working !!! </h1>
                <wearerList/>
            </div>
        );
    }
}



export default SettingsNavbar;