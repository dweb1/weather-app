import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.div`
    width: 100%;
    background: black;
    height: 50px;
    color: white;
    margin: auto 0
`

class Header extends Component{

    componentWillMount = () => {
        this.props.fetchCities()
    }

    render() {
    return (
        <Nav>
            Hello world
        </Nav>
    );
    }
};

export default Header;