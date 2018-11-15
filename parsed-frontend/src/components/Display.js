import React, { Component, Fragment } from 'react';
import DisplayCards from './DisplayCards';

class Display extends Component {
  render() {
    return (
        <div>
          <DisplayCards
            parsedData={this.props.parsedData}
            displayData={this.props.displayData}
          />
        </div>
    )
  }
}

export default Display
