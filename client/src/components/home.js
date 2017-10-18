import React, { Component } from 'react';
import FavCities from './favCities'
import styled from 'styled-components'

const CityCardBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    flex-wrap: wrap
`

class Home extends Component {

    componentWillMount = () => {
        this.props.fetchCities();
    }

    render() {
        return (
            <CityCardBox>
                {this.props.city.map((city, i) => {
                    return <FavCities celcius={this.props.celcius} key={i} name={city}/>
                })}
            </CityCardBox>
        );
    }
}

export default Home;