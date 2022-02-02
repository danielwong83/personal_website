import styled from 'styled-components'
import {animated} from 'react-spring'

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
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

export const IndexCardCircle = styled.div`
    border-radius: 50%;
    background: #fffcf4;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    margin-top: 15px;
    margin-left: 20px;

`

export const IndexCardCircleBack = styled.div`
    border-radius: 50%;
    background: #fffcf4;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    margin-top: 15px;
    margin-left: 700px;

`

export const Lines = styled.div`
    display: absolute;
    flex-direction: row;
`

export const NewLineRed = styled.div`
    margin-top: 20px;
`

export const NewLine = styled.div`
    margin-top: 30px;
`

export const IndexCardRed = styled.hr`
    color: #f00;
    background-color: #f00;
    height: 2px;
`

export const IndexCardBlue = styled.hr`
    color: #001375;
    background-color: rgba(0, 67, 239, 0.24);
    height: 1px;
`


export const StudentWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin: 0px;
    margin-top: -40px;
    margin-left: -80px;
    margin-bottom: 60px;
    user-select: none;
`


export const ImperialCollegeArea = styled.div`
    margin-left: 17px;
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Student = styled.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: rgba(179,97,122,1);
    margin: 0px;
    margin-top: 10px;
`

export const ImperialCollege = styled.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: #00548f;
    margin: 0px;
    margin-top: 10px;
`

export const London = styled.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: #549dc5;
    margin-top: -17px;
`

export const Name = styled.h1`
    font-family: 'Indie Flower';
    font-size: 130px;
    color: rgba(87,92,133,1);
    margin: 0px;
    margin-top: -305px;
    user-select: none;
`

export const FlipWord = styled.h1`
    font-family: 'Indie Flower';
    font-size: 45px;
    color: black;
    margin: 0px;
    margin-top: -250px;
    margin-left: -200px;
    user-select: none;
    justify-content: center;
    display: flex;
    transform: rotate(-30deg);
`

export const Quote = styled.h1`
    font-family: 'Indie Flower';
    font-size: 13px;
    color: black;
    margin: 0px;
    margin-top: 180px;
    margin-left: 490px;
    user-select: none;
    justify-content: center;
    display: flex;
`