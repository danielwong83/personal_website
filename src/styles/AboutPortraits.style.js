import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    z-index: 1;
    flex-direction: column;
`


export const PortraitWrapperOne = styled.div`
    display: flex;
    position: relative;
    margin-top: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: calc( 100vh - 92px);
    width: 100%
`



export const PhotoWrapperOne = styled.div`
    background: rgba(236,165,150,0.6);
    width: 26%;
    border-radius: 25px;
    margin-bottom: 25px;
    height: auto;
    margin-right: 40px;
    margin-left: 40px;
`

export const PhotoWrapperTwo = styled.div`
    background: rgba(179,97,122,0.6);
    width: 26%;
    border-radius: 25px;
    margin-bottom: 25px;
    height: auto;
    margin-right: 40px;
    margin-left: 40px;
`

export const PhotoWrapperThree = styled.div`
    background: rgba(87,92,133,0.6);
    width: 26%;
    border-radius: 25px;
    margin-bottom: 25px;
    height: auto;
    margin-right: 40px;
    margin-left: 40px;
`


export const Portrait = styled.img`
    width: 88%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 25px;
    filter: contrast(105%);
    user-select: none;
`

