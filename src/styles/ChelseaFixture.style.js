import styled from 'styled-components'

//text formatting

export const Fixture = styled.h1`
    font-family: 'Raleway';
    font-size: 26px;
    color: black;
    margin: 0;
    margin-bottom: 5px;

    transition: all 1.5s ease-in-out;
    text-decoration: bold;

    @media (max-width: 400px){
        font-size: 14px;
        margin-bottom: 2px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 17px;
        margin-bottom: 3px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 19px;
        margin-bottom: 4px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 22px;
    }
`