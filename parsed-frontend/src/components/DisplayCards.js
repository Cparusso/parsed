import React, { Component } from 'react';
import DisplayCard from './DisplayCard';
import uuid from 'uuid'

class DisplayCards extends Component {

  makeDisplayCards = () => {
    let cards = this.props.displayData

    return cards.map( card => {
      return (
        <div className='display-card'>
          <DisplayCard key={uuid()} card={card} />
        </div>
      )
    })
  }

  manipulateParsedDataForCsv = () => {
    let data = this.props.parsedData
    let headers = Object.keys(data[0])
    let fixedHeader = headers.map( header => {
      return header.split('_').join(' ')
    })

    let allRows = []

    let rows = data.map( data => {
      let newArray =[]
      let grabRows = headers.forEach( header => {
        newArray.push(data[header])
      })

      allRows.push(newArray)
    })

    let finalFile = []
    finalFile.push(headers)
    finalFile.push(allRows)
    console.log(finalFile)
    return finalFile
    debugger

  }

  render() {
    return (
      <div className="display-cards">
        {this.makeDisplayCards()}
        {this.manipulateParsedDataForCsv()}

      </div>
    )
  }
}

export default DisplayCards

// <DisplayCard dataObj={dataObj} />
