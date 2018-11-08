import React, { Component } from 'react';
import CardInfo from './CardInfo'

class DisplayCard extends Component {

  showCardInfo = () => {
    const currentCard = this.props.card
    const objKeys = Object.keys(currentCard)

    return objKeys.map( key => {
      return <div><p>{key.split('_').join(' ')}</p><p>{currentCard[key]}</p></div>
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
