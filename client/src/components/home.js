import React, { Component } from 'react';
import City from './city'
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
                    return <City key={i} name={city}/>
                })}
            </CityCardBox>
        );
    }
}

export default Home;