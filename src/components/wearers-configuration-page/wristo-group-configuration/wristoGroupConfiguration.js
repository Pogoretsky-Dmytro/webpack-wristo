import React from 'react';
import classNames from 'classnames';
import WearerError from '../wearer-error.js';
import WearersLoading from '../wearer-loading.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WristoConfiguration extends React.Component{ 
    
    constructor(props) {
    super(props);
    // this.CreateWearersList = this.CreateWearersList.bind(this);
    // this.HandleSearch = this.HandleSearch.bind(this);
    // this.state = {
    //   wristoData : [{'name': 'Wristo1', 'simNumber': '+380698632654', 'uniqueWristoId': '4rt567hyt67888huyt900', 'status': 'active'}, 
    //                ]
    // };
  };


// componentWillMount() {          
//   // this.props.getWearerDevice();
//     };

// componentWillUpdate() {          
//   this.props.getWearerDevice();
//     };



    render(){

const tableActions = <div>
          <button className="edit-group"> 
              <svg fill="#000000" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
          </button>
          <button className="delete-group">
            <svg fill="#b52f54" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </div>;

// this.props.wearerDevice

         console.log('WristoConfiguration this.props.wearerDevice', this.props.wearerDevice);
      const wristoDataTable = this.props.wearerDevice.map((wearerDeviceObject) => {
       // console.log((dataElement.uniqueWristoId.concat(Math.random())).toString());

         
         return ( 
            this.props.error ? <WearerError /> : 
            (Object.keys(wearerDeviceObject).length !== 0 ? 
              <tr key={wearerDeviceObject.id.toString()}>
                <td>{wearerDeviceObject.name}</td>
                <td>{wearerDeviceObject.phone_number}</td>
                <td>{wearerDeviceObject.unique_wristo_id}</td>
                <td>{wearerDeviceObject.status}</td>
                <td>
                  {tableActions}   
                </td>
              </tr>
            :<tr key={Math.random().toString()}>
                <td>vvvvv</td>
                <td>vvvv</td>
                <td>vvvvv</td>
                <td>vvvvv</td>
                <td>
                  {tableActions}   
                </td>
              </tr>)
)
});

//       console.log('WristoConfiguration this.props.wearerDevice', this.props.wearerDevice);
//       const wristoDefaultTable = this.props.wearerDevice.map((wearerDeviceObject) => {
//        // console.log((dataElement.uniqueWristoId.concat(Math.random())).toString());

//            if (Object.keys(wearerDeviceObject).length == 0){
//             return <tr key={Math.random().toString()}>
//                 <td>vvvvv</td>
//                 <td>vvvv</td>
//                 <td>vvvvv</td>
//                 <td>vvvvv</td>
//                 <td>
//                   {tableActions}   
//                 </td>
//               </tr>
//            }

// });




//       console.log('WristoConfiguration this.props.wearerDevice', this.props.wearerDevice);
//       const wristoDataTable = this.props.wearerDevice.map((wearerDeviceObject) => {
//        // console.log((dataElement.uniqueWristoId.concat(Math.random())).toString());

//           if (this.props.error) {
//             return <WearerError />
//           }
//           else if(Object.keys(wearerDeviceObject).length !== 0) {
//            return <tr key={wearerDeviceObject.id.toString()}>
//                 <td>{wearerDeviceObject.name}</td>
//                 <td>{wearerDeviceObject.phone_number}</td>
//                 <td>{wearerDeviceObject.unique_wristo_id}</td>
//                 <td>{wearerDeviceObject.status}</td>
//                 <td>
//                   {tableActions}   
//                 </td>
//               </tr>
//           }
//           else {
//             return <tr key={Math.random().toString()}>
//                 <td>vvvvv</td>
//                 <td>vvvv</td>
//                 <td>vvvvv</td>
//                 <td>vvvvv</td>
//                 <td>
//                   {tableActions}   
//                 </td>
//               </tr>
//           }
// });





// <WearersLoading/>

 
//         let wearerDeviceData = this.props.wearerDevice[0];
//        let wearerDeviceTable = (wearerDeviceData) => {
//        // console.log((dataElement.uniqueWristoId.concat(Math.random())).toString());
//          console.log('this.props.wearerDevice', this.props.wearerDevice);
         
//          return ( 
//             this.props.error ? <WearerError /> : 
//             (wearerDeviceData.length != 0 ? 
//               <tr key={wearerDeviceData.id.toString()}>
//                 <td>{wearerDeviceData.name}</td>
//                 <td>{wearerDeviceData.phone_number}</td>
//                 <td>{wearerDeviceData.unique_wristo_id}</td>
//                 <td>{wearerDeviceData.status}</td>
//                 <td>
//                   {tableActions}   
//                 </td>
//               </tr>
//             :
//             <tr key={Math.random().toString()}>
//                 <td>vvvvv</td>
//                 <td>vvvv</td>
//                 <td>vvvvv</td>
//                 <td>vvvvv</td>
//                 <td>
//                   {tableActions}   
//                 </td>
//               </tr>)
// )
// };


        return (
        <div className="wearerProfileWrap">
  			  <div className="wearerProfile__header">
            <p>Wristo configuration</p>
              <button className="addWristoDetails">
                    <svg className="addWristoDetails__icon" fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <span className="addWristoDetails__name">Add Wristo Details</span>
                </button>
          </div>
          
          <table className="wristo-configuration-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>SIM NUMBER</th>
                  <th>UNIQUE WRISTO ID</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                    {wristoDataTable}
              </tbody>
          </table>

		    </div>
        );
    }
}



export default WristoConfiguration;







// <button key={dataElement.uniqueWristoId.concat(Math.random()).toString()}> 
//                         <svg key={dataElement.uniqueWristoId.concat(Math.random()).toString()} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
//                           <path d="M0 0h24v24H0z" fill="none"/>
//                         </svg>
//                     </button>
//                     <button key={dataElement.uniqueWristoId.concat(Math.random()).toString()}>
//                         <svg key={dataElement.uniqueWristoId.concat(Math.random()).toString()} fill="#b52f54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
//                             <path d="M0 0h24v24H0z" fill="none"/>
//                         </svg>
//                     </button>