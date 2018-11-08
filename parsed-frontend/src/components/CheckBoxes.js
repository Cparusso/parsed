import React, { Component } from 'react';
import CheckBox from './CheckBox'
import { NavLink } from 'react-router-dom'

const CheckBoxes = (props) => {

  const submitDataSelections = (event) => {
    event.preventDefault()
    const allEvents = Array.from(event.target.children)
    const selectedEvents = allEvents.filter(selection => selection.checked)
    const selectedEventNames = selectedEvents.map(selection => selection.value)

    props.changeSelectedDataAttributes(selectedEventNames)
  }

  function sortThroughApiData() {
    let apiData = props.parsedData
    let apiDataKeys

    if (apiData.length > 0) {
      let firstObj = apiData[0]
      apiDataKeys = Object.keys(firstObj)
    }

    if (apiDataKeys) {
      return apiDataKeys.map(data => <CheckBox data={data} key={data} />)
    }
  }

  return (
    <div>
      <h1>Choose Which Data Points You Would Like to Render</h1>
      <form onSubmit={submitDataSelections} >
        {sortThroughApiData()}
        <NavLink to='/display'>
          <input type='submit' value='Submit'/>
        </NavLink>
      </form>
    </div>
  )
}

export default CheckBoxes;
