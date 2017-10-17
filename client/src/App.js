import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'

import Header from './components/header'
import Home from './components/home'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {},
      favoriteCities: []
    }
  }

  fetchCities = async() => {
    const res = await axios.get('api/city');
    const newState = {...this.state}
    let cityArray = []
    res.data.map((city) => {
      return cityArray.push(city.name)
    })
    newState.favoriteCities = cityArray
    this.setState(newState)
  }

  render() {

    const HomeComponent = () =>(<Home
     city={this.state.favoriteCities} 
     fetchCities={this.fetchCities} />)

    return (
      <Router>
        <div className="App">
          <div>
            <Header />
          </div>
          <Route exact path="/" render={HomeComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
