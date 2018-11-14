import React, { Component } from 'react';

let str = ''
let headers = []

class DisplayInfo extends Component {

  displayNestInfo = (object, currentKey, oldKey=null) => {

    if (Array.isArray(object[currentKey])) {

      return object[currentKey].map( obj => {
        const array = []
        for (let key in obj) {
          array.push(<div className='nested-display'>
            {this.displayNestInfo(obj, key, currentKey)}
          </div>)
        }

        return array
      })
    }
    else if (typeof object[currentKey] === 'object'){
      const array = []
      for (let key in object[currentKey]) {
        array.push(<div className='nested-display'>
          {this.displayNestInfo(object[currentKey], key, currentKey)}
        </div>)
      }

      return array
    }
    else {
      if (str === oldKey) {
        return <p className='card-text'><b>{currentKey.split('_').join(' ')}:</b> {object[currentKey]}</p>
      } else {
        str = oldKey

        return <div><b><p className='card-text un-nest'>{oldKey ? `${oldKey.split('_').join(' ')}:` : null}</p></b><p className='card-text'><b>{currentKey.split('_').join(' ')}:</b> {object[currentKey]}</p></div>
      }
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
