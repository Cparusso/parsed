import React, { Component } from 'react';

class DisplayCard extends Component {

  showProps = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        DISPLAY CARD
        {this.showProps}
      </div>
    )
  }
}

export default DisplayCard
