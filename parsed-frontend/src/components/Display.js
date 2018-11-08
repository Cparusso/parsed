import React, { Component } from 'react';
import DisplayCards from './DisplayCards';

class Display extends Component {
  render() {
    return (
      <div>
        DISPLAY
        <DisplayCards parsedData={this.props.parsedData} displayData={this.props.displayData} />
      </div>
    )
  }
}

export default Display
