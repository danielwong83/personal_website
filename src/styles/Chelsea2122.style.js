import styled from 'styled-components'


//div formatting

export const UnavailableWrapper = styled.div`
    display: none;

    @media (min-width: 769px) and (max-width: 1000px){
        background-color: #BEE0ED;
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: calc( 100vh - 86px);
    }

    @media (max-width: 768px){
        background-color: #BEE0ED;
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: calc( 100vh - 65px);
    }
`

export const Overall = styled.div`
    display: flex;
    flex-direction: column;
`

export const ChelseaColor = styled.div`
    background-color: #BEE0ED;
    display: flex;
    height: calc( 100vh - 86px);
    position: relative;
    overflow: auto;
    z-index: 1;

    @media (min-width: 769px) and (max-width: 1000px){
        display: none;
    }

    @media (max-width: 768px){
        height: calc( 100vh - 65px);
        display: none;
    }
    

`
export const SquadWrapper = styled.div`
    display: flex;
    position: absolute;
    margin-left: 4%;
    margin-top: 2%;
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

export const Fixture = styled.div`
    display: flex;
    margin-top: -20px;
    margin-bottom: 0px;
    height: 50px;
    flex-direction: column;
`

export const NonFixture = styled.div`
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    flex-direction: column;
`


//text formatting

export const UnavailableWords = styled.h1`
    display: flex;
    font-family: 'Raleway';
    font-size: 25px;
    color: black;
    margin: 0;
    margin-bottom: 5%;
`

export const Suggestion = styled.h1`
    display: flex;
    font-family: 'Raleway';
    font-size: 15px;
    color: black;
    margin: 0;
`

export const PreferredTeam = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-right: 50px;
`

export const PreferredSubs = styled.h1`
    font-family: 'Raleway';
    font-size: 30px;
    color: black;
    margin-top: 90px;
`

export const Reserves = styled.h1`
    font-family: 'Raleway';
    font-size: 30px;
    color: black;
    margin-top: 195px;
`

export const Injury = styled.h1`
    font-family: 'Raleway';
    font-size: 30px;
    color: red;
    margin-top: 95px;
`

export const FixtureWords = styled.h1`
    font-family: 'Raleway';
    font-size: 25px;
    color: black;
    margin: 0;
    margin-bottom: 10px;
`
