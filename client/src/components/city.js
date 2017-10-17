import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const CityCard = styled.div `
    background: grey;
    width: 300px;
    height: 100%;
    border-radius: 4px;    
    margin-top: 20px;
    text-align: center   
`

class City extends Component {

    constructor(){
        super();
        this.state = {
            weather: {
                main: ""
            }
        }
    }

    componentWillMount(){
        this.getWeatherData()        
    }

    getWeatherData = async() => {
        const cityName = this.props.name
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=93627383db7b93148aad9ce936751dd8&units=imperial`)
        let newState = {...this.state}
        newState.weather = res.data
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
            <p>{this.props.name}</p>
            <p>Temperature: {this.state.weather.main.temp} {this.props.celcius ? <p>C</p> : <p>F</p> }</p>
            <p>Max temp: {this.state.weather.main.temp_max} {this.props.celcius ? <p>C</p> : <p>F</p> }</p>
            <p>Min temp: {this.state.weather.main.temp_min} {this.props.celcius ? <p>C</p> : <p>F</p> }</p>
        </CityCard>
    )
}
};

export default City;