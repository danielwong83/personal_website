import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: ${props => props.theme.everyBackground};
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 86px);
    overflow-y: auto;
    position: relative;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
`


//Left Side

export const LeftWrapper = styled.div`
    display: flex;
    margin-left: 4%;
    margin-top: 2%;
    flex-direction: column;
    text-align: left;
    width: 25%;

    @media (max-width: 768px){
        width: 93vw;
    }
`

export const ChessWord = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: ${props => props.theme.textColor};
    margin: 0;
    transition: all 1.5s ease-in-out;
    margin-bottom: 5%;

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

export const Profile = styled.a`
    font-family: 'Raleway';
    font-size: 20px;
    display: flex;
    color: ${props => props.theme.hyperLink};
    margin: 0;
    margin-left: 4%;
    margin-top: 30px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 30px;
    }


    
`



//Right Side


export const BoardWrapper = styled.div`
    display: flex;
    text-align: left;
    width: 70%;
    flex-direction: column;
    margin-left: 5%;
    padding-right: 3%;

    @media (max-width: 768px){
        width: 93vw;
        margin-left: 3%;
        padding-right: 0%;
    }
`

export const GraphWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 100px;
`



export const Tabs = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme.everyBackground};
    margin-top: 3%;
`;

export const Tab = styled.button`
    cursor: pointer;
    width: 30%;
    font-family: 'Raleway';
    font-size: 15px;
    position: relative;
    margin-right: 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-bottom: 4px;
    color: ${props => props.theme.chessTabTextColor};

    border: ${props => props.theme.chessTabBorder};
    background-color: ${(props) => (props.active ? props.theme.chessCurrentTab : props.theme.chessTab)};
    height: ${(props) => (props.active ? "56px" : "50px; top:6px")};

    :hover {
        background-color: ${props => props.theme.chessCurrentTab};
    }

    @media (max-width: 600px){
        width: 32%;
        font-size: 11px;
        height: ${(props) => (props.active ? "40px" : "35px; top:5px")};
    }

    @media (min-width: 601px) and (max-width: 768px){
        width: 32%;
        font-size: 13px;
        height: ${(props) => (props.active ? "52px" : "46px; top:6px")};
    }


`

export const Content = styled.div`
    height: 65vh;
    ${(props) => (props.active ? "" : "display:none")}
`

export const FavChessGame = styled.iframe`
    width: 90%;
    height: 95%;
    border: ${props => props.theme.chessFavGameBorder}; 
    margin: 0px;
    background-image: url(${props => props.theme.chessFav});
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }

`

export const FavChessGameText = styled.h1`
    font-family: 'Raleway';
    font-size: 15px;
    color: ${props => props.theme.textColor};
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 11px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 13px;
    }
`

export const LiveGameText = styled.h1`
    font-family: 'Raleway';
    font-size: 30px;
    color: ${props => props.theme.textColor};
    margin: 0;
    margin-top: 40px;
    width: 100%;
    text-align: left;
`
