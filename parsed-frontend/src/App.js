import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Customize from './components/Customize'
import Display from './components/Display'
import Nav from './components/Nav'
import Error from './components/Error'
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {

  state = {
    apiUrl: '',
    parsedData: [],
    selectedDataAttributes: [],
    displayData: []
  }

  changeApiUrl = (apiUrl) => {
    this.setState({
      apiUrl
    }, () => this.parseApi())
  }

  parseApi = () => {
    fetch(this.state.apiUrl)
    .then(r => r.json())
    .then(parsedData => {
      this.setState({
        parsedData
      })
    })
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
      displayData: newArray
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/welcome" component={() => <Welcome changeApiUrl={this.changeApiUrl} />} />
            <Route path="/customize" component={() => <Customize parsedData={this.state.parsedData} changeSelectedDataAttributes={this.changeSelectedDataAttributes} />} />
            <Route path="/display" component={() => <Display parsedData={this.state.parsedData} displayData={this.state.displayData} />} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
