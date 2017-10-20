import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Nav = styled.div`
    display: flex;
    width: 100%;
    background: blue;
    height: 75px;
    color: white;
    margin: auto 0;
    justify-content: space-between
`

const Title = styled.div`
    align-items: center;
    padding-top: 20px;
    font-size: 20px;
    width: 150px;
`

const Buttons = styled.div`
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    margin: 20px;
    color: #fff;
    background-color: #314cb6;
    box-shadow: 0px 5px 0px 0px rgba(0%, 100%, 0%);
    &:hover{
    background-color: #FF6656;
    }
    &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
    }
`

class Header extends Component{
    handleClick = (e, history) => {
        this.props.history.push('/');
    }

    render() {
    return (
        <Nav>
            <Title>
                Dave's Weather App
            </Title>
            <Buttons onClick={this.handleClick}>
                Home
            </Buttons>
        </Nav>
    );
    }
};

export default withRouter(Header);