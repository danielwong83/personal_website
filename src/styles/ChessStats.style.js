import styled from 'styled-components'


export const StatsWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: left;
    justify-content: center;
    flex-direction: column;
`

export const IndividualStat = styled.div`
    display: flex;
    position: relative;
    background: rgba(63, 191, 191, 0.18);
    width: 50%;
    border-radius: 25px;
    height: 130px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`

export const Statistics = styled.h1`
    font-family: 'PT Sans';
    font-size: 15px;
    color: black;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
    margin-left: 45px;
`

export const Rating = styled.h1`
    font-family: 'PT Sans';
    font-size: 55px;
    color: black;
    margin: 0;
    margin-bottom: 10px;
    justify-content: center;
`

export const Online = styled.h1`
    font-family: 'PT Sans';
    font-size: 20px;
    color: #00DB45;
    margin: 0;
    margin-top: 15px;
`

export const Offline = styled.h1`
    font-family: 'PT Sans';
    font-size: 20px;
    color: #E30206;
    margin: 0;
    margin-top: 15px;
`

