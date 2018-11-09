import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Welcome extends Component {

  state = {
    currentText: 'test'
  }

  updateText = (event) => {
    this.setState({
      currentText: event.target.value
    })
  }

  render() {
    const { currentText } = this.state

    return (
      <div className='welcome-page'>
        <h1 className='welcome-phrase'>Paste Any JSON API Below To Get Started</h1>
        <input className='api-input' type='text' onChange={this.updateText} />
        <br />
        <NavLink to='/customize'>
          <button className='submit-btn' onClick={() => this.props.changeApiUrl(currentText)} >Submit</button>
        </NavLink>
        <p>http://nflarrest.com/api/v1/team, http://nflarrest.com/api/v1/player, http://nflarrest.com/api/v1/position</p>
      </div>
    )
  }
}

export default Welcome
