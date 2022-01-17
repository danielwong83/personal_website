import styled from 'styled-components'

export const ChelseaColor = styled.div`
    background-color: #BEE0ED;
    display: flex;
    height: calc( 100vh - 92px);
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 1
`
export const SquadWrapper = styled.div`
    display: flex;
    position: absolute;
    margin-left: 75px;
    margin-top: 40px;
    flex-direction: column;
    text-align: left;
    width: 67%;
`

export const PreferredTeam = styled.h1`
    font-family: 'Indie Flower';
    font-size: 51px;
    color: black;
    margin: 0;
`
