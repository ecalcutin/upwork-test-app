import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 300px;
    max-width: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 16px 25px;
    display: flex;
    flex-direction: column;
    transition: all 0.1s ease-in-out;
    backface-visibility: hidden;
    
    cursor: pointer;
    &:hover {
        transform: perspective(1px) scale(1.05);
        /* transform: translate3d( 0, 0, 0); */
    }
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1em;
    }

    h2 {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
    }
`;

export const Widget = (props) => {

    return (
        <Container>
            <div className="header">
                <h2>{props.title}</h2>
            </div>
            {props.children}
        </Container>
    )
}