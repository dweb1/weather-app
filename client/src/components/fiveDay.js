import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment'

const FiveDayForecast = styled.div`
    display: flex;
    justify-content: space-around
`

class FiveDay extends Component {

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.celcius !== this.props.celcius) {
        //     if (this.props.celcius) {
        //         this.props.toCelcius();
                
        //     } else {
        //         this.props.toFahrenheit();   
        //     }
        // }
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
                    <p>{this.props.fiveDay.list[6].main.temp}</p>
                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[14].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[14].weather[0].icon + ".png"} alt="" />
                    <p>{this.props.fiveDay.list[14].main.temp}</p>
                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[22].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[22].weather[0].icon + ".png"} alt="" />
                    <p>{this.props.fiveDay.list[22].main.temp}</p>
                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[30].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[30].weather[0].icon + ".png"} alt="" />
                    <p>{this.props.fiveDay.list[30].main.temp}</p>
                </div>
                <div>
                    <p>{this.calculateTime(this.props.fiveDay.list[38].dt)}</p>
                    <img src={"http://openweathermap.org/img/w/" + this.props.fiveDay.list[38].weather[0].icon + ".png"} alt="" />
                    <p>{this.props.fiveDay.list[38].main.temp}</p>
                </div>
            </FiveDayForecast>
            </div>
            
            
            
            
            
            : null
            }
        </div>
    );
}
};

export default FiveDay;