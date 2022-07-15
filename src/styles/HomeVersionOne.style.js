import styled from 'styled-components'

//div formatting

export const Words = styled.div`
    flex-direction: 'column';
`

export const UnavailableWrapper = styled.div`
    display: none;

    @media (max-width: 1000px){
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 10%;
    }
`

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    flex-direction: column;
    height: calc( 100vh - 92px);
    overflow: hidden;
`

export const Everything = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    overflow: hidden;

    @media (max-width: 1000px){
        display: none;
    }
`

export const StickmanWrapper = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
    flex-direction: row;
`


export const MountainWrapper = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
    flex-direction: row;
`


export const NameWrapper = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
    flex-direction: row;
`

export const StudentWrapper = styled.div`
    justify-content: center;
    margin-top: 185px;
    margin-right: 130px;
    position: absolute;
    display: flex;
    flex-direction: row;
`

export const StudentArea = styled.div`
    display: flex;
`

export const ImperialCollegeArea = styled.div`
    margin-left: 17px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
`

//text formatting

export const VersionOne = styled.h1`
    display: flex;
    font-family: 'Raleway';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-left: 4%;
    margin-top: 2%;
    margin-bottom: 15px;
    width: 100%;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 35px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 48px;
    }
`



export const UnavailableWords = styled.h1`
    display: flex;
    font-family: 'Raleway';
    font-size: 25px;
    color: black;
    margin: 0;
    margin-bottom: 5%;
    transition: all 1.5s ease-in-out;
`

export const Suggestion = styled.h1`
    display: flex;
    font-family: 'Raleway';
    font-size: 15px;
    color: black;
    margin: 0;
`



export const PreviousPage = styled.a`
    font-family: 'Raleway';
    font-size: 20px;
    color: #004495;
    margin: 0;
    text-decoration: underline;
    display: flex;
    margin-left: 4.5%;
`




export const Student = styled.h1`
    font-family: 'Indie Flower';
    font-size: 45px;
    color: black;
    margin-top: 40px;
`

export const ImperialCollege = styled.h1`
    font-family: 'Indie Flower';
    color: #00548f;
    margin: 0;
`

export const London = styled.h1`
    font-family: 'Indie Flower';
    color: #549dc5;
    margin-top: -9px;
`

export const Name = styled.h1`
    font-family: 'Indie Flower';
    font-size: 170px;
    color: black;
` 