import styled from 'styled-components'

export const HomeColor = styled.div`
    background-color: #fffcf4;
    display: flex;
    height: calc( 100vh - 92px);
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    z-index: 1
`

export const AboutMeWrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 75px;
    margin-top: 40px;
    flex-direction: column;
    text-align: left;
    width: 47%;
`

export const PortraitWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 53%
`

export const AboutMe = styled.h1`
    font-family: 'Indie Flower';
    font-size: 51px;
    color: black;
    margin: 0;
`

export const DescriptionOne = styled.p`
    font-family: 'Gentium Basic';
    font-size: 21px;
    color: black;
    margin-top: 12px;

`

export const DescriptionTwo = styled.p`
    font-family: 'Gentium Basic';
    font-size: 21px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;


`


export const ListValue = styled.p`
    font-family: 'Gentium Basic';
    font-size: 21px;
    color: black;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10px;
`


export const PhotoWrapper = styled.div`
    background: rgba(87,92,133,0.6);
    width: 50%;
    border-radius: 25px;
    margin-bottom: 25px;
    height: auto;
`


export const Portrait = styled.img`
    width: 88%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 25px;
    filter: contrast(105%);

`

export const SocialWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
    margin-left: 5px;
    
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