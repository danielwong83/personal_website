import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 92px);
    overflow: scroll;
    position: relative;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const AboutMeWrapper = styled.div`
    display: flex;
    margin-left: 4%;
    margin-top: 2%;
    flex-direction: column;
    text-align: left;
    width: 47%;

    @media (max-width: 768px){
        width: 93vw;
    }
`

export const AboutMe = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: black;
    margin: 0;

    @media (max-width: 400px){
        font-size: 35px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
    }
`

export const DescriptionOne = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: black;
    margin-top: 12px;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }
`

export const DescriptionTwo = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }
`

export const ListValue = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: black;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10px;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }
`


export const PortraitWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53%;

    @media (max-width: 768px){
        margin: 0px;
        margin-top: 40px;
        padding-bottom: 25px;
        width: 100vw;
    }
`

export const PhotoWrapper = styled.div`
    background: rgba(198, 255, 255, 0.6);
    border-radius: 25px;
    height: 65%;
    padding: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        width: auto;
    }

`

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

`

export const SocialWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
    margin-left: 5px;
    padding-bottom: 20px;
`

export const GmailImg = styled.img`
    height: 33px;
    width: 33px;
    margin-left: 17px;
    opacity: 0.35;
    filter: grayscale(70%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%) contrast(115%);
    }
    
`
export const LinkedinImg = styled.img`
    height: 25px;
    width: 25px;
    margin-top: 4px;
    opacity: 0.35;
    filter: grayscale(70%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%) contrast(160%);
    }
`

export const LichessImg = styled.img`
    height: 27px;
    width: 27px;
    margin-top: 4px;
    margin-left: 16px;
    opacity: 0.35;
    filter: grayscale(70%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
    }
`

export const GithubImg = styled.img`
    height: 26px;
    width: 26px;
    margin-top: 3px;
    margin-left: 17px;
    opacity: 0.35;
    filter: grayscale(70%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
    }
`

export const ATag = styled.a`
    display: flex;
`

export const ChelseaTag = styled.a`
    color: #575c85;
    text-decoration: none;
`

export const ResumeTag = styled.a`
    color: #575c85;
`