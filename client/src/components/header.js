import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Nav = styled.div`
    display: flex;
    width: 100%;
    background: blue;
    height: 50px;
    color: white;
    margin: auto 0;
    justify-content: space-between
`

const Buttons = styled.div`
    display: flex;
    color:white
`

class Header extends Component{

    render() {
    return (
        <Nav>
            Dave's Weather App
            <Buttons>
                <Link to="/">Home</Link>
            </Buttons>
        </Nav>
    );
    }
};

export default Header;