import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const CityCard = styled.div `
    background: grey;
    width: 150px;
    height: 100%;
    border-radius: 4px;    
    margin-top: 20px;
    text-align: center   
`

class City extends Component {

    constructor(){
        super();
        this.state = {
            weather: {}
        }
    }

    componentWillMount(){
        // this.getWeatherData()        
    }

    getWeatherData = async() => {
        const cityName = this.props.name
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=93627383db7b93148aad9ce936751dd8&units=imperial`)
        let newState = {...this.state}
        newState.weather = res.data
        this.setState(newState)
    }

    render(){
    return (
        <CityCard>
            <p>{this.props.name}</p>
        </CityCard>
    );
}
};

export default City;