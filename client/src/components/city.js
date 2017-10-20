import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import FiveDay from './fiveDay'

const CityCard = styled.div`
    background: rgba(192,192,192,.75);
    width: 300px;
    border-radius: 4px;    
    margin-top: 20px;
    text-align: center;
    margin: 0 auto 
`

const Wind = styled.div`
    display: flex;
    justify-content: space-around
`

class City extends Component {

    constructor(){
        super();
        this.state = {
            weather: {
                main: "",
                sys: "",
                wind: ""
            },
            icon: "",
            image: "",
            fiveDay: {
                list: [
                ]
            }
        }
    }

    componentWillMount = async() => {
        await this.getWeatherData();
        this.getFiveDay();
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

    getFiveDay = async() => {
        const nationName = this.state.weather.sys.country
        const cityName = this.props.match.params.city
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${nationName}&APPID=93627383db7b93148aad9ce936751dd8&units=imperial`)
        let newState = {...this.state}
        newState.fiveDay.list = res.data.list
        this.setState(newState)
    }

    // getWeatherPic = async() => {
    //     const res = await axios.get('http://tile.openweathermap.org/map/temp_new/8/-84.39/33.75.png?appid=93627383db7b93148aad9ce936751dd8'
    //     )
    //     let newState = {...this.newState}
    //     newState.image = res
    //     this.setState(newState)
    // }

    _toCelcius = () => {
        var celcius = Math.round((this.state.weather.main.temp - 32) * 5/9)
        var celciusTemp_max = Math.round((this.state.weather.main.temp_max - 32) * 5/9)
        var celciusTemp_min = Math.round((this.state.weather.main.temp_min - 32) * 5/9)
        const newState = {...this.state}
        newState.weather.main.temp = celcius
        newState.weather.main.temp_min = celciusTemp_min
        newState.weather.main.temp_max = celciusTemp_max
        this.setState(newState)
      }
      
      _toFahrenheit = () => {
        var fahrenheit = Math.round((this.state.weather.main.temp * 1.8) +32)
        var fahrenheitTemp_max = Math.round((this.state.weather.main.temp_max * 1.8) +32)
        var fahrenheitTemp_min = Math.round((this.state.weather.main.temp_min * 1.8) +32)
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

    const Arrow = styled.div`
        transform: rotate(${this.state.weather.wind.deg}deg);
        margin: 0 auto
    `

    return (
        <CityCard>
            <h1>{this.state.weather.name}</h1>
            <FiveDay 
                fiveDay={this.state.fiveDay} 
                celcius={this.props.celcius} />
            <h4>Current Weather</h4>
            <img src={this.state.icon} alt="Weather Icon" />
            {this.props.celcius ? <p>Temperature: {this.state.weather.main.temp}&#176;C</p> : <p>Temperature: {this.state.weather.main.temp}&#176;F</p> }
            {this.props.celcius ? <p>Max temp: {this.state.weather.main.temp_max}&#176;C</p> : <p>Max temp: {this.state.weather.main.temp_max}&#176;F</p> }
            {this.props.celcius ? <p>Min temp: {this.state.weather.main.temp_min}&#176;C</p> : <p>Min temp: {this.state.weather.main.temp_min}&#176;F</p> }
            <Wind>
                <div>
                <h6>Wind Direction</h6>
                <Arrow>
                    <img alt="Wind Direction" height='50px' width='50px' src="http://freevector.co/wp-content/uploads/2010/02/13298-arrow-pointing-north1.png" />
                </Arrow>
                </div>
                <div>
                <h6>Wind Speed</h6>
                <p>{this.state.weather.wind.speed} mph</p>
                </div>
            </Wind>
        </CityCard>
    );
}
};

export default City;