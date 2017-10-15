import React from 'react';
import styled from 'styled-components'

const Nav = styled.div`
    width: 100%;
    background: black;
    height: 50px;
    color: white;
    margin: auto 0
`

const Header = () => {
    return (
        <Nav>
            Hello world
        </Nav>
    );
};

export default Header;