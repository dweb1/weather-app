import React, { Component } from 'react';
import City from './city'

class Home extends Component {

    componentWillMount = () => {
        this.props.fetchCities();
        // this.props.getWeatherData()
    }

    render() {
        return (
            <div>
                {this.props.city.map((city, i) => {
                    return <City id={i} key={i} name={city}/>
                })}
            </div>
        );
    }
}

export default Home;