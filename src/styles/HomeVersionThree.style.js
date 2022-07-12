import styled from 'styled-components'
import {animated} from 'react-spring'

export const Words = styled.div`
    flex-direction: column;
`


export const VersionTwo = styled.h1`
    font-family: 'PT Sans';
    font-size: 51px;
    color: black;
    margin: 0;
    margin-left: 75px;
    margin-top: 40px;
    margin-bottom: 10px;
`

export const PreviousPage = styled.a`
    font-family: 'PT Sans';
    font-size: 20px;
    color: #575c85;
    margin: 0;
    margin-left: -35px;
    text-decoration: underline;
`



export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
    z-index: 1
`

export const IndexCardArea = styled.div`
    background-color: #fffcf4;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 50%;
    margin-top: 25%;
    z-index: 1
`

export const IndexCardWrapper = styled(animated.div)`
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
    justify-content: center;
`

export const IndexCard = styled(animated.div)`
    display: inline-block;
    background: #f7f7f7;
    border-radius: 10px;
    position: absolute;
    backdrop-filter: blur(10px);
    border: 2px solid black;
    background-clip: border-box;
    height: 400px;
    width: 750px;
`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
`

export const Bottom = styled.div`
    text-align: left;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #00548f;
    border-bottom-left-radius: 7.5px;
    border-bottom-right-radius: 7.5px;
    border-top: 3px solid rgba(179,97,122,1);
    //border-top: 2px solid black;
`

export const LeftSide = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    width: 65%;

`
export const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    flex-direction: column;
    width: 35%;
`


export const Name = styled.h1`
    direction: flex;
    font-family: 'PT Sans';
    font-size: 65px;
    color: black;
    user-select: none;
    text-align: left;
    margin: 0px;
    margin-top: 50px;
    margin-left: 45px;
`

export const Student = styled.h1`
    font-family: 'PT Sans';
    font-size: 25px;
    //color: rgba(179,97,122,1);
    color: #00548f;
    margin: 0px;
    margin-top: 10px;
    margin-left: 50px;
    text-align: left;
    user-select: none;
    //font-style: italic;
`

export const ImperialCollegeArea = styled.div`
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    user-select: none;
`



export const ImperialCollege = styled.h1`
    font-family: 'PT Sans';
    font-size: 20px;
    color: #00548f;
    margin: 0px;
    margin-top: 10px;
    margin-right: 10px;
`

export const London = styled.h1`
    font-family: 'PT Sans';
    font-size: 20px;
    color: #549dc5;
    margin-top: 0px;
`

export const Email = styled.h1`
    font-family: 'PT Sans';
    font-size: 17px;
    color: black;
    margin: 0px;
    margin-top: 40px;
    margin-left: 50px;
    text-align: left;
    user-select: none;
    font-style: italic;

`

export const WhiteWords = styled.h1`
    font-family: 'PT Sans';
    font-size: 17px;
    color: white;
    margin-left: 30px;
    user-select: none;
`

export const WhiteWordsBack = styled.h1`
    font-family: 'PT Sans';
    font-size: 17px;
    color: white;
    text-align: right;
    margin-right: 30px;
    user-select: none;
`




export const FlipWord = styled.h1`
    font-family: 'PT Sans';
    font-size: 45px;
    color: black;
    margin: 0px;
    margin-top: 130px;
    margin-left: -200px;
    user-select: none;
    justify-content: center;
    display: flex;
    transform: rotate(-30deg);
`

export const Sticker = styled.div`
    display: flex;
    padding: 10px;
    background-color: white;


`

export const ChelseaSticker = styled.img`
    height: 120px;
    width: auto;
    margin: 0px;
    margin-top: 25px;
    margin-left: 50px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    transform: rotate(-30deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
    
`

export const ChessSticker = styled.img`
    height: 100px;
    width: auto;
    margin: 0px;
    margin-top: -140px;
    margin-left: 500px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    transform: rotate(20deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
`

export const DwightSticker = styled.img`
    height: 120px;
    width: auto;
    margin: 0px;
    margin-top: 0px;
    margin-left: 200px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 5px;
    transform: rotate(20deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
`

export const GuitarSticker = styled.img`
    height: 73px;
    width: auto;
    margin: 0px;
    margin-top: -100px;
    margin-left: 520px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 5px;
    transform: rotate(-105deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
`

export const MaxSticker = styled.img`
    height: 120px;
    width: auto;
    margin: 0px;
    margin-top: -250px;
    margin-left: 375px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    pointer-events: none;
    background-color: white;
`

export const NgoloSticker = styled.img`
    height: 120px;
    width: auto;
    margin: 0px;
    margin-top: -140px;
    margin-left: 160px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    transform: rotate(-15deg);
    padding: 10px;
    pointer-events: none;
    background-color: white;
`

export const RamosSticker = styled.img`
    height: 140px;
    width: auto;
    margin: 0px;
    margin-top: -245px;
    margin-left: 290px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    transform: rotate(11deg);
    padding: 10px;
    pointer-events: none;
    background-color: white;
`

export const DogeSticker = styled.img`
    height: 100px;
    width: auto;
    margin: 0px;
    margin-top: 30px;
    margin-left: 25px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    transform: rotate(-10deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
`

export const ElonSticker = styled.img`
    height: 100px;
    width: auto;
    margin: 0px;
    margin-top: -100px;
    margin-left: 110px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    transform: rotate(-10deg);
    user-select: none;
    pointer-events: none;
    background-color: white;
`
export const LeagueSticker = styled.img`
    height: auto;
    width: 200px;
    margin: 0px;
    margin-top: -120px;
    margin-left: 340px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    transform: rotate(1deg);
    padding: 10px;
    pointer-events: none;
    background-color: white;
`

export const AlcarazSticker = styled.img`
    height: 60px;
    width: auto;
    margin: 0px;
    margin-top: 5px;
    margin-left: 235px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    transform: rotate(-10deg);
    padding: 10px;
    pointer-events: none;
    background-color: white;
`

export const ChecoSticker = styled.img`
    height: 100px;
    width: auto;
    margin: 0px;
    margin-top: -240px;
    margin-left: 525px;
    user-select: none;
    justify-content: center;
    display: flex;
    border: 1px solid rgba(196, 196, 196, 0.76);
    border-radius: 100px;
    padding: 10px;
    transform: rotate(10deg);
    pointer-events: none;
    background-color: white;
`

export const Quote = styled.h1`
    font-family: 'PT Sans';
    font-size: 13px;
    color: black;
    margin: 0px;
    margin-left: 490px;
    user-select: none;
    justify-content: center;
    display: flex;
`

export const ImpierialPhoto = styled.img`
    display: flex;
    height: 150px;
    width: auto;
    margin-top: 40px;
    margin-bottom: 10px;
    user-select: none;
    pointer-events: none;
`