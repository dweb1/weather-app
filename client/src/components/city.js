import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CityCard = styled.div`
    background: rgba(192,192,192,.5);
    width: 300px;
    height: 100%;
    border-radius: 4px;    
    margin-top: 20px;
    text-align: center  
`

let divStyle = {
    transform: `rotate({this.state.weather.wind.deg}deg)`
}

class City extends Component {

    constructor(){
        super();
        this.state = {
            weather: {
                main: ""
            },
            icon: "",
            image: ""
        }
    }

    componentWillMount = () => {
        this.getWeatherData();
        // this.getWeatherPic()
    }

     getWeatherData = async() => {
        const cityName = this.props.match.params.city
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=93627383db7b93148aad9ce936751dd8&units=imperial`)
        let newState = {...this.state}
        newState.weather = res.data
        newState.icon = `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`
        this.setState(newState)
    }

    getWeatherPic = async() => {
        const res = await axios.get('http://tile.openweathermap.org/map/temp_new/8/-84.39/33.75.png?appid=93627383db7b93148aad9ce936751dd8'
        )
        let newState = {...this.newState}
        newState.image = res.data
        this.setState(newState)
    }

    _toCelcius = () => {
        var celcius = Math.floor((this.state.weather.main.temp - 32) * 5/9)
        var celciusTemp_max = Math.floor((this.state.weather.main.temp_max - 32) * 5/9)
        var celciusTemp_min = Math.floor((this.state.weather.main.temp_min - 32) * 5/9)
        const newState = {...this.state}
        newState.weather.main.temp = celcius
        newState.weather.main.temp_min = celciusTemp_min
        newState.weather.main.temp_max = celciusTemp_max
        this.setState(newState)
      }
      
      _toFahrenheit = () => {
        var fahrenheit = Math.floor((this.state.weather.main.temp * 1.8) +32)
        var fahrenheitTemp_max = Math.floor((this.state.weather.main.temp_max * 1.8) +32)
        var fahrenheitTemp_min = Math.floor((this.state.weather.main.temp_min * 1.8) +32)
        const newState = {...this.state}
        newState.weather.main.temp = fahrenheit
        newState.weather.main.temp_min = fahrenheitTemp_min
        newState.weather.main.temp_max = fahrenheitTemp_max
        this.setState(newState)
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.celcius !== this.props.celcius) {
            if (this.props.celcius) {
                this._toCelcius();
                
            } else {
                this._toFahrenheit();   
            }
        }
    }

    render(){
    return (
        <CityCard>
            <h1>{this.state.weather.name}</h1>
            <img src={this.state.icon} alt="weather Icon" />
            {this.props.celcius ? <p>Temperature: {this.state.weather.main.temp}&#176;C</p> : <p>Temperature: {this.state.weather.main.temp}&#176;F</p> }
            {this.props.celcius ? <p>Max temp: {this.state.weather.main.temp_max}&#176;C</p> : <p>Max temp: {this.state.weather.main.temp_max}&#176;F</p> }
            {this.props.celcius ? <p>Min temp: {this.state.weather.main.temp_min}&#176;C</p> : <p>Min temp: {this.state.weather.main.temp_min}&#176;F</p> }
            <div style={divStyle}>
                <img src="http://freevector.co/wp-content/uploads/2010/02/13298-arrow-pointing-north1.png" />
            </div>
        </CityCard>
    );
}
};

export default City;