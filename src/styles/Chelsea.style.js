import styled from 'styled-components'

export const ChelseaColor = styled.div`
    background-color: #BEE0ED;
    display: flex;
    height: calc( 100vh - 92px);
    position: relative;
    overflow-y: scroll;
    overflow-x: visible;
    z-index: 1;

`
export const SquadWrapper = styled.div`
    display: flex;
    position: absolute;
    margin-left: 75px;
    margin-top: 40px;
    flex-direction: row;
    text-align: left;
`


export const LeftSide = styled.div`
    display: absolute;
    flex-direction: column;
    width: 1100px;
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 25px
`



export const PreferredTeam = styled.h1`
    font-family: 'Indie Flower';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-right: 50px;
`

export const PreferredSubs = styled.h1`
    font-family: 'Indie Flower';
    font-size: 30px;
    color: black;
    margin-top: 90px;
`

export const Reserves = styled.h1`
    font-family: 'Indie Flower';
    font-size: 30px;
    color: black;
    margin-top: 175px;
`

export const Injury = styled.h1`
    font-family: 'Indie Flower';
    font-size: 30px;
    color: red;
    margin-top: 95px;
`
export const Fixture = styled.div`
    display: flex;
    margin-top: -20px;
    margin-bottom: 0px;
    height: 50px;

`

export const NonFixture = styled.div`
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    flex-direction: column;

`