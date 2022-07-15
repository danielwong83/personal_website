import styled from 'styled-components'


//div formatting

export const HomeColor = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 92px);
    overflow-y: auto;
    position: relative;
`

export const PortraitWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;

    @media (max-width: 1200px){
        flex-direction: column;
        justify-content: unset;
    }
`


export const PhotoWrapper = styled.div`
    background: rgba(198, 255, 255, 0.6);
    border-radius: 25px;
    height: 65%;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin-left: 3.5%;
    margin-right: 3.5%;

    @media (max-width: 1200px){  
        height: auto;
        width: auto;
        margin-top: 3.5%;
        margin-bottom: 3.5%;
    }
`


//image formatting

export const Portrait = styled.img`
    height: 100%;
    width: auto;
    border-radius: 25px;
    filter: contrast(105%);
    user-select: none;

    @media (max-width: 400px){
        height: 35vh;
    }

    @media (min-width: 401px) and (max-width: 600px){
        height: 45vh;
    }

    @media (min-width: 601px) and (max-width: 768px){
        height: 55vh;
    }

    @media (min-width: 769px) and (max-width: 1200px){
        height: 60vh;
    }
`

