import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    flex-direction: column;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    z-index: 1
`

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 75%
`

export const StatsWrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 75px;
    margin-top: 40px;
    flex-direction: column;
    text-align: left;
    width: 30%;
`

export const BoardWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 40px;
    text-align: left;
    width: 70%;
`

export const ChessWord = styled.h1`
    font-family: 'PT Sans';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-left: 75px;
    margin-top: 40px;
    width: 100%;
    text-align: left;
`

export const Tabs = styled.div`
    overflow: hidden;
    background-color: #fffcf4;
    height: 50px;
`;

export const Tab = styled.button`
    cursor: pointer;
    width: 30%;
    font-family: 'PT Sans';
    font-size: 15px;
    position: relative;
    margin-right: 0px;

    border: ${(props) => (props.active ? "1px solid #00548f" : "1px solid #00548f")};
    border-bottom: ${(props) => (props.active ? "none" : "none")};
    background-color: ${(props) => (props.active ? "#fffcf4" : "rgba(63, 191, 191, 0.25)")};
    height: ${(props) => (props.active ? "46px" : "40px; top:6px")};
    transition: background-color 0.5s ease-in-out;

    :hover {
        background-color: #fffcf4;
    }
`;
export const Content = styled.div`
    height: 100%;
    ${(props) => (props.active ? "" : "display:none")}
  
`;

export const FavChessGame = styled.iframe`
    width: 100%;
    height: 95%;
    border: 1px solid #00548f;
    margin: 0px;

`

export const FavChessGameText = styled.h1`
    font-family: 'PT Sans';
    font-size: 15px;
    color: black;

`

export const LiveGameText = styled.h1`
    font-family: 'PT Sans';
    font-size: 30px;
    color: black;
    margin: 0;
    margin-top: 40px;
    width: 100%;
    text-align: left;
`

export const Profile = styled.a`
    font-family: 'PT Sans';
    font-size: 25px;
    display: flex;
    color: #575c85;
    margin: 0;
    margin-top: 40px;
`
