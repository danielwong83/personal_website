import styled from 'styled-components'


//div formatting

export const Overall = styled.div`
    display: flex;
    flex-direction: column;
`


export const HomeColor = styled.div`
    background-color: #BEE0ED;
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 86px);
    overflow: auto;
    position: relative;

    @media (max-width: 768px){
        height: calc( 100vh - 65px);
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    width: 100%;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 4%;
    padding-right: 4%;
    width: 40%;

    @media (max-width: 768px){
        width: 100vw;
        padding-left: 0%;
        padding-right: 0%;
    }
`

export const PositionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 15px;

    @media (max-width: 768px){
        margin-bottom: 0;
        justify-content: center;
        align-items: center;
    }

`

export const Category = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`


export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-right: 4%;
    width: 60%;
    margin-top: -2%;

    @media (max-width: 768px){
        width: 100vw;
        padding: 0%;
        margin-top: 0%;
    }
`

export const FixtureWrapper = styled.div`
    display: flex;
    margin-bottom: 28px;
    

    @media (max-width: 400px){
        padding-left: 4%;
        margin-top: 13px;
        margin-bottom: 13px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        padding-left: 4%;
        margin-top: 15px;
        margin-bottom: 16px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        padding-left: 4%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`


export const PlayerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 4%;
    padding-left: 4%;
    padding-right: 4%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 37vw;
    background: white;
    border: 1px solid #57d3ea;
    border-radius: 25px;
    margin-bottom: 25px;

    @media (max-width: 768px){
        width: 80vw;
        margin-bottom: 16px;
    }
`





//text formatting

export const TitleText = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: black;
    margin: 0;
    padding-left: 4%;
    margin-top: 2%;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 32px;
    text-decoration: bold;

    @media (max-width: 400px){
        font-size: 35px;
        margin-top: 10px;
        margin-bottom: 16px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
        margin-top: 10px;
        margin-bottom: 24px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 48px;
        margin-top: 8px;
        margin-bottom: 28px;
    }
`


export const HeaderText = styled.h1`
    font-family: 'Raleway';
    font-size: 26px;
    color: black;
    margin: 0;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 22px;
    text-decoration: bold;

    @media (max-width: 400px){
        font-size: 15px;
        padding-left: 4%;
        margin-bottom: 14px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 18px;
        padding-left: 4%;
        margin-bottom: 16px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 20px;
        padding-left: 4%;
        margin-bottom: 18px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 23px;
    }
`

export const Position = styled.p`
    font-family: 'Raleway';
    font-size: 23px;
    color: black;
    margin: 0;
    padding-right: 7px;
    margin-left: 10px;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 6px;

    @media (max-width: 768px){
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 20px;
    }
`

export const Team = styled.p`
    font-family: 'Raleway';
    font-size: 17px;
    color: black;
    margin: 0;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 6px;

    @media (max-width: 400px){
        font-size: 8px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 12px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 14px;
    }
`

export const Description = styled.p`
    font-family: 'Raleway';
    font-size: 14px;
    color: black;
    margin: 0;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 6px;

    @media (max-width: 400px){
        font-size: 8px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 9px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 11px;
    }
`

export const Name = styled.p`
    font-family: 'Raleway';
    font-size: 23px;
    color: black;
    margin: 0;
    
    transition: all 1.5s ease-in-out;
    margin-bottom: 6px;

    @media (max-width: 400px){
        font-size: 13px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 18px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 20px;
    }
`



export const Flag = styled.p`
    font-family: 'Raleway';
    font-size: 23px;
    color: black;
    margin: 0;
    margin-left: 7px;
    margin-top: -0.25%;
    
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 20px;
    }
`


