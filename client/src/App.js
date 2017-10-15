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
    const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=93627383db7b93148aad9ce936751dd8')
    console.log(res);
  }

  render() {

    const HomeComponent = () =>(<Home fetchCities={this.fetchCities}/>)

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
