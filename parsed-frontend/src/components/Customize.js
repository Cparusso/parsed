import React, { Component } from 'react';
import CheckBoxes from './CheckBoxes'
import { NavLink } from 'react-router-dom'

class Customize extends Component {

  render() {
    return (
      <div>
        <CheckBoxes changeSelectedDataAttributes={this.props.changeSelectedDataAttributes} parsedData={this.props.parsedData}/>
      </div>
    )
  }
}

export default Customize;
