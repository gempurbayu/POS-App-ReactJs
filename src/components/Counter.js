import React from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
    width: 1rem;
    background: ${props => props.theme.secondary};
    color: #fff;
    height: 1rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0;
    padding-bottom: 5px;
`

const Counter = ({ inc, dec }) => {
    if(inc){
        return <CounterStyle>+</CounterStyle>
    }else{
        return <CounterStyle>-</CounterStyle>
    }
}

export default Counter
