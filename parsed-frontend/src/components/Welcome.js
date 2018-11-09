import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Welcome extends Component {

  state = {
    currentText: ''
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
        <h4>http://nflarrest.com/api/v1/team</h4>
        <h4>Offline? Type 'test' to get started!</h4>
        <input type='text' onChange={this.updateText} />
        <NavLink to='/customize'>
          <button onClick={() => this.props.changeApiUrl(currentText)} >Submit</button>
        </NavLink>
      </div>
    )
  }
}

export default Welcome
