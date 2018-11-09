import React, { Component } from 'react';
import logo from './logo.svg';
import RecursionTest from './components/RecursionTest';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecursionTest />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


// [{
//   "Team": "DEN",
//   "Team_preffered_name": "Denver Broncos",
//   "Team_name": "Broncos",
//   "Team_city": "Denver",
//   "Team_Conference": "AFC",
//   "Team_Conference_Division": "AFC West",
//   "Team_logo_id": "10",
//   "arrest_count": "51",
//   "nested_thingy": [
//     {
//       "in_the_nested_thingy": "hot potato hot potato",
//       "in_the_nested_thingy": "California California",
//       "in_the_nested_thingy": "Spaghetti",
//       "even_more_nested": {
//         "in_the_even_more_nested": "eleventy",
//         "in_the_even_more_nested": "wowee",
//         "in_the_even_more_nested": {},
//       }
//     },
//     {
//       "in_the_nested_thingy": "hot potato hot potato",
//       "in_the_nested_thingy": "California California",
//       "in_the_nested_thingy": "Spaghetti",
//       "even_more_nested": {
//         "in_the_even_more_nested": "eleventy",
//         "in_the_even_more_nested": "wowee",
//         "in_the_even_more_nested": [],
//       }
//     }
//   ],
// }]
