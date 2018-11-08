import React, { Component } from 'react';
import DisplayCard from './DisplayCard';
import uuid from 'uuid'

class DisplayCards extends Component {

  makeDisplayCards = () => {
    let cards = this.props.displayData

    return cards.map( card => {
      return (
          <div>
            <DisplayCard key={uuid()} card={card}/>
          </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.makeDisplayCards()}
      </div>
    )
  }
}

export default DisplayCards

// <DisplayCard dataObj={dataObj} />
