import React, { Component } from 'react';

class Home extends Component {

    componentWillMount = () => {
        this.props.fetchCities()
    }

    render() {
        return (
            <div>
                Hello world
            </div>
        );
    }
}

export default Home;