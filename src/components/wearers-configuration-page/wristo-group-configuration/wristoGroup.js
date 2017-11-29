import React from 'react';
import classNames from 'classnames';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WristoGroup extends React.Component{ 
    
   
    render(){

        return (
        <tr>
      <td>{this.props.wristoData.name}</td>
      <td>{this.props.wristoData.simNumber}</td>
      <td>{this.props.wristoData.uniqueWristoId}</td>
      <td>{this.props.wristoData.status}</td>
        </tr>
        );
    }
}



export default WristoGroup;