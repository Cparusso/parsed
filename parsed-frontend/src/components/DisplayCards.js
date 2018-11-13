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
    let fixedHeader = headers.map(header => header.split('_').join(' '))

    let allRows = []

    let rows = data.map( data => {
      let newArray =[]
      let grabRows = headers.forEach(header => newArray.push(data[header]))

      allRows.push(newArray)
    })

    let finalFile = []
    finalFile.push(headers)
    let holderArray = [allRows.join('\n')]
    finalFile.push(holderArray)

    let finalCsv = finalFile.join('\n')
    return finalCsv
  }

  downloadCsv = (data) => {
    const blob = new Blob([data], { type: 'text/csv'})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', url)
    a.setAttribute('download', 'json-api.csv')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  render() {
    this.manipulateParsedDataForCsv()

    return (

      <div className='cards-container'>
        <div className="display-cards">
          {this.makeDisplayCards()}
        </div>
        <div className='download-csv'>
          <button className='download-btn' onClick={() => this.downloadCsv(this.manipulateParsedDataForCsv())}>Download as CSV<br></br><span>{'<--'}</span></button>
        </div>
      </div>
    )
  }
}

export default DisplayCards
