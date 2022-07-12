import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 92px);
    overflow: hidden;
    position: relative;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
`

export const Name = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50vw;
    height: auto;

    @media (max-width: 768px){
        width: 100vw;
        justify-content: center;
        text-align: center;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50vw;
    height: auto;

    @media (max-width: 768px){
        width: 100vw;
        justify-content: center;
        text-align: center;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50vw;
    height: auto;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100vw;
        justify-content: center;
        text-align: center;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50vw;
    height: auto;

    @media (max-width: 768px){
        width: 100vw;
        height: auto;
        justify-content: center;
        
    }
`

export const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-top-left-radius: 100%;
    background-color: #C6FFFF;
    display: flex;
    position: absolute;
    bottom: 0px;

    @media (max-width: 768px){
        margin-top: 50px;
        position: relative;
    }
`

export const ObjectWrapper = styled.div`
    margin-top: 80px;
    margin-left: 100px;
    width: 35vw;
    height: 60vh;
    border-radius: 25px;

    @media (max-width: 400px){
        margin-top: 0px;
        margin-left: 0px;
        width: 100vw;
        height: 40vh;
    }

    @media (min-width: 401px) and (max-width: 600px){
        margin-top: 0px;
        margin-left: 0px;
        width: 100vw;
        height: 50vh;
    }

    @media (min-width: 601px) and (max-width: 768px){
        margin-top: 0px;
        margin-left: 0px;
        width: 100vw;
    }
`


export const Daniel = styled.h1`
    font-family: 'Dancing Script';
    font-size: 180px;
    color: black;
    margin: 0;
    margin-left: 12%;
    margin-top: 10%;

    @media (max-width: 400px){
        font-size: 120px;
        margin: 0;
        margin-left: -20px;
        margin-top: 20px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 140px;
        margin: 0;
        margin-left: -20px;
        margin-top: 20px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 160px;
        margin: 0;
        margin-left: -20px;
        margin-top: 20px;
    }
`

export const Wong = styled.h1`
    font-family: 'Dancing Script';
    font-size: 150px;
    color: black;
    margin: 0;
    margin-top: -40px;
    margin-left: 12%;

    @media (max-width: 400px){
        font-size: 100px;
        margin: 0;
        margin-top: -40px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 120px;
        margin: 0;
        margin-top: -40px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 140px;
        margin: 0;
        margin-top: -40px;
    }
`

export const Role = styled.a`
    font-family: 'Raleway';
    font-size: 22px;
    color: black;
    margin: 0;
    margin-left: 15%;

    @media (max-width: 400px){
        font-size: 10px;
        margin: 0;
        margin-top: 30px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin: 0;
        margin-top: 40px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 18px;
        margin: 0;
        margin-top: 40px;
    }

`

export const WelcomeMessage = styled.a`
    font-family: 'Raleway';
    font-size: 22px;
    color: black;
    margin: 0;
    margin-top: 30px;
    margin-left: 15%;
    margin-bottom: 5%;
    margin-right: 5px;

    @media (max-width: 400px){
        font-size: 10px;
        margin: 0;
        margin-top: 30px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin: 0;
        margin-top: 40px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 18px;
        margin: 0;
        margin-top: 40px;
    }
`

