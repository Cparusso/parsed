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

  return (
    <div className='customize-page'>
      <h1>Choose Which Data Points You Would Like to Render</h1>
      <form onSubmit={submitDataSelections} >
        {sortThroughApiData(props.parsedData)}
        <br />
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default CheckBoxes;



// const sortThroughApiData = (jsonArrayOfObjects) => {
//   if (jsonArrayOfObjects.length > 0) {
//     if (Array.isArray(jsonArrayOfObjects)) {
//       const firstObj = jsonArrayOfObjects[0]
//       for (let key in firstObj) {
//         newArray.push(key)
//         if (Array.isArray(firstObj[key])) {
//           sortThroughApiData(firstObj[key])
//         }
//         else if (typeof firstObj[key] === 'object') {
//           objectRecursion(firstObj, key)
//         }
//       }
//     }
//     console.log(newArray);
//
//     if (newArray.length > 0) {
//       return newArray.map(data => <CheckBox data={data} key={data} />)
//     }
//   }
// }
//
// const objectRecursion = (object, key) => {
//   if (typeof object[key] !== 'object') {
//     return null
//   }
//   else {
//     for (let keyTwo in object[key]) {
//       newArray.push(keyTwo)
//       objectRecursion(object[key], keyTwo)
//     }
//   }
// // }
