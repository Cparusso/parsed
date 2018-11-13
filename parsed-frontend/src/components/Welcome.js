import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Flickity from 'react-flickity-component'

let flickityOptions = {
    "freeScroll": false, "contain": false, "prevNextButtons": true, "pageDots": true, "draggable": true, "accessibility": true, "arrowShape": { x0: 10, x1: 65, y1: 45, x2: 70, y2: 40, x3: 20 }, "wrapAround": false
}

class Welcome extends Component {

  state = {
    currentText: 'test'
  }

  updateText = (event) => {
    this.setState({
      currentText: event.target.value
    })
  }

  scrollDown = () => {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: 'smooth'
    })
  }

  scrollUp = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }

  carousel = () => {
    return (
      <Flickity options={flickityOptions}>
        <div className="carousel-cell">
          <div className="carousel-contents">
            <h1>Step One:</h1>
            <h2>Find a JSON api</h2>
            <p>Example: http://nflarrest.com/api/v1/team</p>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-contents">
            <h1>Step One:</h1>
            <h2>Find a JSON api</h2>
            <p>Example: http://nflarrest.com/api/v1/team</p>
          </div>
        </div>
        <div className="carousel-cell">
          <div className="carousel-contents">
            <h1>Step One:</h1>
            <h2>Find a JSON api</h2>
            <p>Example: http://nflarrest.com/api/v1/team</p>
          </div>
        </div>
      </Flickity>
    )
  }

  render() {
    const { currentText } = this.state
    console.log(this.props)
    return (
      <Fragment className="entire-welcome-page">
        <div className='welcome-page'>
          <h1 className='welcome-phrase' id='logo'>Parsed</h1>
          <h1 className='welcome-phrase'>Paste Any JSON API Below To Get Started</h1>
          <input className='api-input' type='text' onChange={this.updateText} />
          <br />
          <NavLink to='/customize'>
            <button className='submit-btn' onClick={() => this.props.changeApiUrl(currentText)} >Submit</button>
          </NavLink>
          <p>http://nflarrest.com/api/v1/team, http://nflarrest.com/api/v1/player, http://nflarrest.com/api/v1/position</p>
          <div onClick={this.scrollDown} className="how-it-works">
            <button className="down-arrow">V</button>
            <p className="about-text" >See how it works</p>
          </div>
          <div onClick={this.scrollUp} className="back-to-home">
            <button className="up-arrow">^</button>
            <p className="about-text" >Back to top</p>
          </div>
        </div>
        <div className="flickity" >
          {this.carousel()}
        </div>
      </Fragment>
    )
  }
}

export default Welcome
