import React, { Component } from 'react'
import testData from './db.json'
import Welcome from './components/Welcome'
import Customize from './components/Customize'
import Display from './components/Display'
import Nav from './components/Nav'
import Error from './components/Error'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import './App.css'

class App extends Component {

  state = {
    apiUrl: '',
    parsedData: [],
    selectedDataAttributes: [],
    displayData: [],
    redirectToDisplay: false
  }

  changeApiUrl = (apiUrl) => {
    this.setState({
      apiUrl
    }, () => this.parseApi())
  }

  parseApi = () => {
    if (this.state.apiUrl === 'test') {
      this.setState({
        parsedData: testData
      })
    } else if (this.state.apiUrl !== 'test') {
      fetch(this.state.apiUrl)
      .then(r => r.json())
      .then(parsedData => {
        this.setState({
          parsedData
        })
      })
    }
  }

  changeSelectedDataAttributes = (selectedDataAttributes) => {
    this.setState({
      selectedDataAttributes
    }, () => this.parseDisplayData())
  }

  parseDisplayData = () => {
    const {parsedData, selectedDataAttributes} = this.state
    const newArray = []

    for (let obj of parsedData) {
      const newObj = {}

      for (let data in obj) {
        const formattedDataName = data.split('_').join(' ')

        if (selectedDataAttributes.includes(formattedDataName)) {
          newObj[data] = obj[data]
        }
      }
      newArray.push(newObj)
    }

    this.setState({
      displayData: newArray,
      redirectToDisplay: true
    })
  }

  renderDisplay = () => {
    if (this.state.redirectToDisplay) {
      this.setState({
        redirectToDisplay: !this.state.redirectToDisplay
      })

      return <Redirect to='/display' />
    }
  }


  render() {
    document.body.style.overflow = this.props.location.pathname === "/" ? 'hidden' : 'scroll'
    return (
      <div className="app-display">
        <Nav />
        {this.renderDisplay()}
        <Switch>
          <Route exact path="/" render={(props) => <Welcome  {...props} changeApiUrl={this.changeApiUrl} />} />
          <Route exact path="/customize" render={() => <Customize parsedData={this.state.parsedData} changeSelectedDataAttributes={this.changeSelectedDataAttributes} />} />
          <Route exact path="/display" render={() => <Display parsedData={this.state.parsedData} displayData={this.state.displayData} />} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
