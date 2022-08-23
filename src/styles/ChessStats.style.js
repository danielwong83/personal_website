import styled from 'styled-components'

//div formatting

export const OverallWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4%;
    margin-top: 2%;

    @media (max-width: 768px){
        flex-direction: row;
        justify-content: center;
        margin-left: 0;
        margin-top: 0;
    }

    @media (max-width: 400px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 0;
        margin-top: 0;
    }

`

export const IndividualStat = styled.div`
    display: flex;
    background: ${props => props.theme.chessDiv};
    width: 175px;
    border-radius: 25px;
    height: 110px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4%;
    padding: 15px;

    @media (max-width: 768px){
        margin-right: 4%;
        width: 150px;
        height: 85px;
    }

`


//text formatting

export const Statistics = styled.h1`
    font-family: 'Raleway';
    font-size: 15px;
    color: ${props => props.theme.textColor};
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
    margin-left: 45px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 13px;
        margin-top: 8px;
        margin-bottom: 7px;
    }
`

export const Rating = styled.h1`
    font-family: 'Raleway';
    font-size: 55px;
    color: ${props => props.theme.textColor};
    margin: 0;
    justify-content: center;
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 40px;
    }
`

export const Online = styled.h1`
    font-family: 'Raleway';
    font-size: 20px;
    color: #00DB45;
    margin: 0;
    margin-top: 15px;
    margin-left: 4%;
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 15px;
    }
    
`

export const Offline = styled.h1`
    font-family: 'Raleway';
    font-size: 20px;
    color: #E30206;
    margin: 0;
    margin-top: 15px;
    margin-left: 4%;
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 15px;
    }
`

