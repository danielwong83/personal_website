import styled from 'styled-components'


//div formatting


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
    width: 100%;
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
    margin-top: 100px;
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



//Text Formatting

export const Daniel = styled.h1`
    font-family: 'Ruthligos';
    font-size: max(9vw, 110px);
    color: black;
    margin: 0;
    margin-top: 15vh;
    margin-left: 23%;
    transition: all 1.5s ease-in-out;
    user-select: none;

    &:hover {
        color: #004495;
    }

    @media (max-width: 400px){
        font-size: 70px;
        margin: 0;
        margin-top: 25px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 90px;
        margin: 0;
        margin-top: 30px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 125px;
        margin: 0;
        margin-top: 35px;
    }
`

export const Wong = styled.h1`
    font-family: 'Ruthligos';
    font-size: max(6.5vw, 68px);
    color: black;
    margin: 0;
    margin-top: -17%;
    margin-left: 24%;
    transition: all 1.5s ease-in-out;
    user-select: none;

    &:hover {
        color: #004495;
    }

    @media (max-width: 400px){
        font-size: 45px;
        margin: 0;
        margin-top: -70px;
        margin-left: -5%;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 55px;
        margin: 0;
        margin-top: -90px;
        margin-left: -3%;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 80px;
        margin: 0;
        margin-top: -120px;
        margin-left: -2%;
    }
`

export const Role = styled.a`
    font-family: 'Raleway';
    font-size: 22px;
    color: black;
    margin: 0;
    margin-left: 19%;
    transition: all 1.5s ease-in-out;
    user-select: none;

    @media (max-width: 400px){
        font-size: 10px;
        margin: 0;
        margin-top: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin: 0;
        margin-top: 15px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 18px;
        margin: 0;
        margin-top: 30px;
    }
`

export const WelcomeMessage = styled.a`
    font-family: 'Raleway';
    font-size: 22px;
    color: black;
    margin: 0;
    margin-top: 3%;
    margin-left: 19%;
    margin-bottom: 7%;
    margin-right: 5px;
    transition: all 1.5s ease-in-out;
    user-select: none;

    @media (max-width: 400px){
        font-size: 10px;
        margin: 0;
        margin-top: 15px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin: 0;
        margin-top: 20px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 18px;
        margin: 0;
        margin-top: 20px;
    }
`

