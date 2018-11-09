import React, { Component } from 'react';
import obj from '../db.json';

const newArray = []

class RecursionTest extends Component {

  parseWithRecursion = (jsonArrayOfObjects) => {
    // console.log('in the function');
    // console.log(jsonArrayOfObjects);

    if (Array.isArray(jsonArrayOfObjects)) {
      const firstObj = jsonArrayOfObjects[0]
      for (let key in firstObj) {
        newArray.push(key)
        if (Array.isArray(firstObj[key])) {
          this.parseWithRecursion(firstObj[key])
        }
        else if (typeof firstObj[key] === 'object') {
          this.objectRecursion(firstObj, key)
        }
      }
    }
    console.log(newArray);
  }

  objectRecursion = (object, key) => {
    if (typeof object[key] !== 'object') {
      return null
    }
    else {
      for (let keyTwo in object[key]) {
        newArray.push(keyTwo)
        this.objectRecursion(object[key], keyTwo)
      }
    }
  }


  render() {
    this.parseWithRecursion(obj)

    return (
      <div>
        <h1>
          Nailed it.
        </h1>
      </div>
    );
  }
}

export default RecursionTest
