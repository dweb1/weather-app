import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'

import Header from './components/header'
import Home from './components/home'
import City from './components/city'

const Background = styled.div`
  background: url('https://static.pexels.com/photos/11434/Life-of-Pix-free-stock-photos-sunset-sea-light-mikewilson.jpeg');
  background-size: cover;  
  height: 100vh;  
  background-attachment: fixed
`

// const SwitchButton = styled.div`
//   margin: auto 0;
//   width: 100%
// `

class App extends Component {

  constructor(){
    super();
    this.state = {
      celcius: false,
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

  _changeBoolean = () => {
    let newState = {...this.state}
    if (newState.celcius) {
      newState.celcius = false
    } else {
      newState.celcius = true
    }
    this.setState(newState)
  }

  render() {

    const HomeComponent = () =>(<Home
     city={this.state.favoriteCities} 
     fetchCities={this.fetchCities} 
     celcius={this.state.celcius}/>)

     const CityComponent = (props) =>(<City 
      {...props} 
      celcius={this.state.celcius}/>)

    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <Background>
          { this.state.celcius ? <button onClick={this._changeBoolean}>Fahrenheit </button> : <button onClick={this._changeBoolean}>Celcius</button> }
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/:city" render={CityComponent} />
        </Background>
        </div>
      </Router>
    );
  }
}

export default App;
