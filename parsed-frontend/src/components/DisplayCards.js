import React, { Component } from 'react';
import DisplayCard from './DisplayCard';

class DisplayCards extends Component {

  makeDisplayCards = () => {
    console.log(this.props.displayData);
    // return this.props.displayData.map(dataObj => {
    //   console.log(dataObj)
    // })

    return <DisplayCard />
  }

  render() {
    return (
      <div>
        DISPLAYCARDS
        {this.makeDisplayCards()}
      </div>
    )
  }
}

export default DisplayCards

// <DisplayCard dataObj={dataObj} />
