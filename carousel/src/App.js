import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;