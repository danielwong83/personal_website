import styled from 'styled-components'



//div formatting

export const HomeColor = styled.div`
    background-color: ${props => props.theme.everyBackground};
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 86px);
    overflow-y: auto;
    position: relative;

    @media (max-width: 768px){
        height: calc( 100vh - 65px);
    }
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
    background: ${props => props.theme.backgroundPhoto};
    border-radius: 25px;
    height: 65%;
    padding: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px){
        height: auto;
        width: auto;
    }
`


export const SocialWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
    margin-left: 5px;
    padding-bottom: 20px;

    @media (max-width: 600px){
        margin-top: 10px;
    }
`


//text formatting


export const AboutMe = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: ${props => props.theme.textColor};
    margin: 0;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 35px;
        margin-top: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
        margin-top: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
        margin-top: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 48px;
        margin-top: 7px;
    }
`

export const DescriptionOne = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: ${props => props.theme.textColor};
    margin-top: 12px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 18px;
    }
`

export const DescriptionTwo = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: ${props => props.theme.textColor};
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
        margin-top: 8px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin-top: 8px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 18px;
    }
`

export const ListValue = styled.p`
    font-family: 'Raleway';
    font-size: 21px;
    color: ${props => props.theme.textColor};
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 18px;
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

    @media (min-width: 768px) and (max-width: 1000px){
        height: 45vh;
    }

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

    @media (max-width: 600px){
        height: 29px;
        width: 29px;
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

    @media (max-width: 600px){
        height: 21px;
        width: 21px;
    }
`

export const LichessImg = styled.img`
    height: 27px;
    width: 27px;
    margin-top: 4px;
    margin-left: 16px;
    opacity: 0.35;
    filter: ${props => props.theme.filterImages};
    &:hover {
        opacity: 1;
        filter: ${props => props.theme.hooverfilterImages};
    }

    @media (max-width: 600px){
        height: 23px;
        width: 23px;
    }
`

export const GithubImg = styled.img`
    height: 26px;
    width: 26px;
    margin-top: 3px;
    margin-left: 17px;
    opacity: 0.35;
    filter: ${props => props.theme.filterImages};
    &:hover {
        opacity: 1;
        filter: ${props => props.theme.hooverfilterImages};
    }

    @media (max-width: 600px){
        height: 22px;
        width: 22px;
    }
`


//hyperlink formatting

export const ATag = styled.a`
    display: flex;
`

export const ChelseaTag = styled.a`
    color: ${props => props.theme.hyperLink};
    text-decoration: none;
    transition: all 1.5s ease-in-out;
`
