import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
    z-index: 1
`

export const MainWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 0 px;
    margin-left: 75px;
    flex-direction: column;
    text-align: left;
    width: 100%;
    overflow-y: scroll;
`

export const ProjectWord = styled.h1`
    font-family: 'Indie Flower';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-top: 40px;
    margin-bottom: 30px;
`

export const ProjectWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const IndividualProject = styled.div`
    display: flex;
    position: relative;
    background: rgba(0, 255, 222, 0.16);
    width: 70%;
    justify-content: left;
    border-radius: 25px;
    margin-bottom: 25px;
    height: 260px;

`

export const ProjectName = styled.h1`
    font-family: 'Indie Flower';
    opacity: 1;
    font-size: 31px;
    color: black;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 12px;
    
`

export const ProjectPhoto = styled.img`
    display: flex;
    height: 240px;
    width: auto;
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 10px;
    margin-right: 25px;
`

export const ProjectPhotoTwo = styled.img`
    display: flex;
    height: 220px;
    width: auto;
    margin-top: 20px;
    margin-left: 35px;
    margin-bottom: 0px;
    margin-right: 35px;
`
export const TurtlePhoto = styled.img`
    display: flex;
    height: 240px;
    width: auto;
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 10px;
    margin-right: 25px;
    filter: contrast(70%)
`


export const ProjectContent = styled.div`
    display: flex;
    position: relative;
    text-align: left;
    flex-direction: column;
`

export const Description = styled.p`
    font-family: 'Gentium Basic';
    font-size: 19px;
    color: black;
    margin: 0px;
    margin-bottom: 15px;
`

export const Updates = styled.p`
    font-family: 'Gentium Basic';
    font-size: 19px;
    color: #B7B7B7;
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const ATag = styled.a`
    display: flex;
    text-decoration: None;
    color: black;
`