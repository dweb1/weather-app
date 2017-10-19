import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment'

const FiveDayForecast = styled.div`
    display: flex;
    justify-content: space-around
`

class FiveDay extends Component {

    _toCelcius = () => {
        var celcius6 = Math.round((this.props.fiveDay.list[6].main.temp - 32) * 5/9)
        var celcius14 = Math.round((this.props.fiveDay.list[14].main.temp - 32) * 5/9)
        var celcius22 = Math.round((this.props.fiveDay.list[22].main.temp - 32) * 5/9)
        var celcius30 = Math.round((this.props.fiveDay.list[30].main.temp - 32) * 5/9)
        var celcius38 = Math.round((this.props.fiveDay.list[38].main.temp - 32) * 5/9)      
        const newProps = {...this.props}
        newProps.fiveDay.list[6].main.temp = celcius6
        newProps.fiveDay.list[14].main.temp = celcius14
        newProps.fiveDay.list[22].main.temp = celcius22
        newProps.fiveDay.list[30].main.temp = celcius30
        newProps.fiveDay.list[38].main.temp = celcius38
        this.setState(newProps)
      }
      
      _toFahrenheit = () => {
        var fahrenheit6 = Math.round((this.props.fiveDay.list[6].main.temp * 1.8) +32)
        var fahrenheit14 = Math.round((this.props.fiveDay.list[14].main.temp * 1.8) +32)
        var fahrenheit22 = Math.round((this.props.fiveDay.list[22].main.temp * 1.8) +32)
        var fahrenheit30 = Math.round((this.props.fiveDay.list[30].main.temp * 1.8) +32)
        var fahrenheit38 = Math.round((this.props.fiveDay.list[38].main.temp * 1.8) +32)  
        const newProps = {...this.props}
        newProps.fiveDay.list[6].main.temp = fahrenheit6
        newProps.fiveDay.list[14].main.temp = fahrenheit14
        newProps.fiveDay.list[22].main.temp = fahrenheit22
        newProps.fiveDay.list[30].main.temp = fahrenheit30
        newProps.fiveDay.list[38].main.temp = fahrenheit38
        this.setState(newProps)
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
    
    calculateTime = (time) => {
        let date = moment.unix(time).format('ddd MMM DD')
        return date
    }

    render(){
    return (
        <div>
            {this.props.fiveDay.list[38] ? 
            <div>
            <h4>Five Day Forecast</h4>
            <FiveDayForecast>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[6].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[6].weather[0].icon + ".png"} alt="" />
                    {this.props.celcius ? 
                        <p>{this.props.fiveDay.list[6].main.temp}&#176;C</p> 
                        : 
                        <p>{this.props.fiveDay.list[6].main.temp}&#176;F</p> }
                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[14].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[14].weather[0].icon + ".png"} alt="" />
                    {this.props.celcius ? 
                        <p>{this.props.fiveDay.list[14].main.temp}&#176;C</p> 
                        : 
                        <p>{this.props.fiveDay.list[14].main.temp}&#176;F</p> }                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[22].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[22].weather[0].icon + ".png"} alt="" />
                    {this.props.celcius ? 
                        <p>{this.props.fiveDay.list[22].main.temp}&#176;C</p> 
                        : 
                        <p>{this.props.fiveDay.list[22].main.temp}&#176;F</p> }                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[30].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[30].weather[0].icon + ".png"} alt="" />
                    {this.props.celcius ? 
                        <p>{this.props.fiveDay.list[30].main.temp}&#176;C</p> 
                        : 
                        <p>{this.props.fiveDay.list[30].main.temp}&#176;F</p> }                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[38].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[38].weather[0].icon + ".png"} alt="" />
                    {this.props.celcius ? 
                        <p>{this.props.fiveDay.list[38].main.temp}&#176;C</p> 
                        : 
                        <p>{this.props.fiveDay.list[38].main.temp}&#176;F</p> }                </div>
            </FiveDayForecast>
            </div>
            
            
            
            
            
            : null
            }
        </div>
    );
}
};

export default FiveDay;