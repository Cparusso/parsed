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
      <div>
        <h1>Parse</h1>
        <h2>Curious to see how this works? Here are some links from the NFLArrest API to play around with!</h2>
        <h4>Top Teams:</h4>
        <p>http://nflarrest.com/api/v1/team</p>
        <h4>Top Players:</h4>
        <p>http://nflarrest.com/api/v1/player</p>
        <h4>Top Positions:</h4>
        <p>http://nflarrest.com/api/v1/position</p>
        <h4>Offline? Just click submit to get started!</h4>
        <input type='text' onChange={this.updateText} />
        <NavLink to='/customize'>
          <button onClick={() => this.props.changeApiUrl(currentText)} >Submit</button>
        </NavLink>
      </div>
    )
  }
}

export default Welcome
