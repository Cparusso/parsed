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


  const sortThroughApiData = (jsonArrayOfObjects) => {
    let foundKeys

    if (jsonArrayOfObjects.length > 0) {
      const firstObj = jsonArrayOfObjects[0]
      foundKeys = Object.keys(firstObj)
    }

    if (foundKeys) {
      return foundKeys.map(data => <CheckBox data={data} key={data} />)
    }
  }

  const selectAll = () => {
    const checkboxes = document.querySelectorAll(".checkbox")
    const checkboxesArr = Array.from(checkboxes)

    if (document.getElementById("selectButton").innerText === 'Select All') {
      checkboxesArr.forEach(checkbox => {
        checkbox.checked = true
      })

      document.getElementById("selectButton").innerText = 'Deselect All'
    } else {
      checkboxesArr.forEach(checkbox => {
        checkbox.checked = false
      })

      document.getElementById("selectButton").innerText = 'Select All'
    }
  }

  return (
    <div className='customize-page'>
      <h1 className="customize-text" >Choose Which Data Points You Would Like to Render</h1>
      <form onSubmit={submitDataSelections} >
        {sortThroughApiData(props.parsedData)}
        <br />
        <input className='customize-btns customize-submit' type='submit' value='Submit'/>
      </form>
      <button className='customize-btns' id='selectButton' onClick={selectAll} >Select All</button>
    </div>
  )
}

export default CheckBoxes;
