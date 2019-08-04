import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import uuid from 'uuid'

class DisplayCard extends Component {

  showCardInfo = () => {
    const currentCard = this.props.card
    const objKeys = Object.keys(currentCard)

    return objKeys.map( currentKey => {
      return (
        <div>
          <DisplayInfo key={uuid} currentCard={currentCard} currentKey={currentKey}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.showCardInfo()}
      </div>
    )
  }
}

export default DisplayCard
