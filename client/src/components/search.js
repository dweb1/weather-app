import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'

const FormStyle = styled.div`
background: rgba(192,192,192,.5);
width: 300px;
border-radius: 4px;    
margin-top: 20px;
text-align: center;
margin: 0 auto
`

const Search = (props) => {

    const handleClick = (e, history) => {
        e.preventDefault()
        props.history.push(`/${props.search}`);
    }

    return (
        <FormStyle>
        <form>
            <h3>Enter a city name to search for weather</h3>
            <div>
                <input onChange={props.handleChange} type='text' name='search' value={props.search} />
                <button onClick={handleClick}>Search</button>
            </div>
        </form>
        </FormStyle>
    );
};

export default withRouter(Search);