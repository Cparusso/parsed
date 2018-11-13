import React, { Component } from 'react';

class DisplayInfo extends Component {

  displayNestInfo = (object, currentKey) => {

    if (Array.isArray(object[currentKey])) {
      return object[currentKey].map( obj => {
        const array = []
        for (let key in obj) {
          array.push(<div className='nested-display'>
            {this.displayNestInfo(obj, key)}
          </div>)
        }

        return array
      })
    }
    else if (typeof object[currentKey] === 'object'){
      const array = []
      for (let key in object[currentKey]) {
        array.push(<div className='nested-display'>
          {this.displayNestInfo(object[currentKey], key)}
        </div>)
      }

      return array
    }
    else {
      console.log(object[currentKey])
      return <p className='card-text'><b>{currentKey.split('_').join(' ')}:</b> {object[currentKey]}</p>
    }
  }

  render() {
    return (
      <div className='display-more-info'>
        {this.displayNestInfo(this.props.currentCard, this.props.currentKey)}
      </div>
    )
  }
}

export default DisplayInfo
