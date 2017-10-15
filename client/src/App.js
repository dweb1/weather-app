import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'


import Header from './components/header'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {},
      favoriteCities: []
    }
  }

  fetchCities = () => {
    // api.openweathermap.org/data/2.5/weather?q=Atlanta
    
    
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
