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

export const IndexCard = styled(animated.div)`
    display: inline-block;
    background: #f7f7f7;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid black;
    background-clip: border-box;
`

export const IndexCardCircle = styled.div`
    border-radius: 50%;
    background-color: #fffcf4;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    margin-top: 15px;
    margin-left: 20px;

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
    width: 99.76%;
`

export const IndexCardBlue = styled.hr`
    color: #001375;
    background-color: rgba(0, 67, 239, 0.24);
    height: 1px;
    width: 99.76%;
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
    display: flex;
    flex-direction: row;
    margin: 0px;
    margin-top: -40px;
    margin-left: -80px;
    margin-bottom: 60px;
    user-select: none;
`

export const StudentArea = styled.div`
    display: flex;
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
    margin-left: 50px;
    margin-right: 50px;
    user-select: none;
`

export const Button = styled.button`
    height: 50px;
    width: 100%;
    display: block;

`