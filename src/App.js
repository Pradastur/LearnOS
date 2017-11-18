import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import {NavBar} from './NavBar'
import {Content} from './Content'
import {RectangularBox} from './RectangularBox'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <div>
          <Content />
      </div>
      </div>
    );
  }
}

export default App;
