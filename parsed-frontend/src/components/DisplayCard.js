import React, { Component } from 'react';
import CardInfo from './CardInfo'

class DisplayCard extends Component {

  showCardInfo = () => {
    const currentCard = this.props.card
    const objKeys = Object.keys(currentCard)

    return objKeys.map( key => {
      return (
        <div>
          <p><b>{key.split('_').join(' ')}:</b> <span>{currentCard[key]}</span></p>
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
