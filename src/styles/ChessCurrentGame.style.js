import styled from "styled-components"

export const CurrentGameText = styled.h1`
    font-family: 'Raleway';
    font-size: 15px;
    color: ${props => props.theme.textColor};
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 11px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 13px;
    }
`

export const NoGameText = styled.h1`
    font-family: 'Raleway';
    font-size: 27px;
    color: ${props => props.theme.textColor};
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 20px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 24px;
    }
`

export const CurrentGame = styled.iframe`
    width: 90%;
    height: 95%;
    border: 1px solid #004495;
    margin: 0px;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.div`
    height: 65vh;

`