import styled from 'styled-components'


//Div Formatting

export const HomeColor = styled.div`
    background-color: ${props => props.theme.everyBackground};
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 86px);
    overflow-y: auto;
    position: relative;
`

export const MainWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 0 px;
    margin-top: 2%;
    padding-right: 4%;
    margin-bottom: 10px;
    flex-direction: column;
    text-align: left;
    width: 100vw;
`

export const ProjectWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const IndividualProject = styled.div`
    display: flex;
    background: ${props => props.theme.projectDiv};
    width: 74%;
    border-radius: 25px;
    /* box-shadow: 26px 26px 52px #a8a8a8, -26px -26px 52px #f7f7f7; */
    margin-bottom: 25px;
    height: auto;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`



export const WebsiteProject = styled.div`
    display: flex;
    background: ${props => props.theme.projectDiv};
    width: 74%;
    border-radius: 25px;
    margin-bottom: 25px;
    height: auto;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`


export const ProjectContent = styled.div`
    display: flex;
    position: relative;
    text-align: left;
    flex-direction: column;
    padding-right: 20px;

    @media (max-width: 768px){
        padding-left: 5%;
        padding-right: 4%;
    }
`

export const WebsiteContent = styled.div`
    display: flex;
    position: relative;
    text-align: left;
    flex-direction: column;
    padding-right: 20px;
    padding-left: 5%;

    @media (max-width: 768px){
        padding-right: 5%;
    }

`

export const FeaturesContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;

    @media (max-width: 768px){
        flex-direction: row;
        margin-bottom: 10px;
        width: 100%;
    }
`

export const FeaturesWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`





//Text Formatting


export const ProjectWord = styled.h1`
    font-family: 'Raleway';
    font-size: 51px;
    color: ${props => props.theme.textColor};
    margin: 0;
    padding-left: 4%;
    transition: all 1.5s ease-in-out;
    margin-bottom: 30px;
    text-decoration: bold;

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

export const ProjectName = styled.h1`
    font-family: 'Raleway';
    opacity: 1;
    font-size: 31px;
    color: ${props => props.theme.textColor};
    text-align: left;
    margin-top: 12px;
    margin-bottom: 25px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 21px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 23px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 26px;
    }
`

export const DescriptionName = styled.h1`
    font-family: 'Raleway';
    opacity: 1;
    font-size: 31px;
    color: ${props => props.theme.textColor};
    text-align: left;
    margin-top: 30px;
    margin-bottom: 25px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 21px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 23px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 26px;
    }
`

export const Description = styled.p`
    font-family: 'Raleway';
    font-size: 19px;
    color: ${props => props.theme.textColor};
    margin: 0px;
    margin-bottom: 15px;
    padding-right: 20px;
    display: flex;


    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 9px;
        margin-bottom: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 10px;
        margin-bottom: 12px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 12px;
        margin-bottom: 12px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 14px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 16px;
    }
`

export const Disclaimer = styled.p`
    font-family: 'Raleway';
    font-size: 13px;
    color: ${props => props.theme.textColor};
    margin: 0px;
    margin-top: -18px;
    margin-bottom: 20px;
    padding-right: 20px;
    display: flex;


    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 5px;
        margin-top: -5px;
        margin-bottom: 15px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 7px;
        margin-top: -5px;
        margin-bottom: 15px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 9px;
        margin-top: -5px;
        margin-bottom: 15px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 9px;
        margin-top: -18px;
        margin-bottom: 18px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 11px;
        margin-top: -18px;
        margin-bottom: 18px;
    }
`

export const Updates = styled.p`
    font-family: 'Raleway';
    font-size: 19px;
    color: #B7B7B7;
    display: flex;
    margin: 0px;
    margin-top: 15px;
    padding-bottom: 20px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 9px;
        margin-top: 1px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 10px;
        margin-top: 3px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 12px;
        margin-top: 5px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 14px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 16px;
    }
`

export const DescriptionWebsite = styled.p`
    font-family: 'Raleway'; 
    font-size: 19px;
    color: ${props => props.theme.textColor};
    flex-direction: column;
    margin: 0px;
    margin-bottom: 15px;
    display: flex;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
        margin-top: -5px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 14px;
        margin-top: -5px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 16px;
    }
`

export const ListValue = styled.p`
    font-family: 'Raleway';
    font-size: 19px;
    color: ${props => props.theme.textColor};
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 9px;
        margin-top: 1px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 10px;
        margin-top: 3px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 12px;
        margin-top: 5px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 14px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 16px;
    }
`

export const FeaturesDescription = styled.p`
    font-family: 'Raleway';
    font-size: 19px;
    color: ${props => props.theme.textColor};
    margin: 0px;
    margin-bottom: 15px;
    padding-right: 20px;
    display: flex;


    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        display: none;
    }

    /* @media (min-width: 601px) and (max-width: 768px){
        font-size: 12px;
        margin-bottom: 12px;
    } */

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 14px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        font-size: 16px;
    }
`






//Image Formatting


export const NBAPhoto = styled.img`
    display: flex;
    height: 180px;
    width: auto;
    margin-left: 105px;
    margin-right: 105px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        height: 140px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        height: 160px;
        width: auto;
        margin-left: 50px;
        margin-right: 50px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        height: 160px;
        width: auto;
        margin-left: 70px;
        margin-right: 70px;
    }
`


export const SquarePhoto = styled.img`
    display: flex;
    height: 150px;
    width: auto;
    margin-left: 70px;
    margin-right: 70px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        height: 110px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        height: 110px;
        width: auto;
        margin-left: 30px;
        margin-right: 30px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        height: 130px;
        width: auto;
        margin-left: 40px;
        margin-right: 40px;
    }
`


export const DashboardPhoto = styled.img`
    display: flex;
    height: 190px;
    width: auto;
    margin-left: 50px;
    margin-right: 50px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        height: 110px;
        width: auto;
        margin-left: 30px;
        margin-right: 30px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        height: 140px;
        width: auto;
        margin-left: 35px;
        margin-right: 35px;
    }
`


export const ScraperPhoto = styled.img`
    display: flex;
    height: 210px;
    width: auto;
    margin-left: 40px;
    margin-right: 40px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        height: 110px;
        width: auto;
        margin-left: 30px;
        margin-right: 30px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        height: 150px;
        width: auto;
        margin-left: 30px;
        margin-right: 30px;
    }

`

export const BJPhoto = styled.img`
    display: flex;
    height: 200px;
    width: auto;
    margin-left: 45px;
    margin-right: 45px;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        height: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        height: 120px;
        width: auto;
        margin-left: 25px;
        margin-right: 25px;
    }

    @media (min-width: 1001px) and (max-width: 1350px){
        height: 150px;
        width: auto;
        margin-left: 30px;
        margin-right: 30px;
    }
`


export const FeaturesPhoto = styled.img`
    display: flex;
    height: 65px;
    width: auto;
    margin-bottom: 15px;
    margin-left: 12.5px;
    margin-right: 12.5px; 
    border-radius: 120px;

    transition: all 1.5s ease-in-out;

    

    @media (max-width: 200px){
        height: 20px;
        margin-left: 5px;
        margin-right: 5px; 
    }

    @media (min-width: 201px) and (max-width: 300px){
        height: 21px;
        margin-left: 7px;
        margin-right: 7px; 
    }

    @media (min-width: 301px) and (max-width: 400px){
        height: 25px;
        margin-left: 10px;
        margin-right: 10px; 
    }

    @media (min-width: 401px) and (max-width: 500px){
        height: 35px;
        margin-left: 15px;
        margin-right: 15px; 
    }

    @media (min-width: 501px) and (max-width: 600px){
        height: 42px;
        margin-left: 15px;
        margin-right: 15px; 
    }

    @media (min-width: 601px) and (max-width: 768px){
        height: 55px;
        margin-left: 23px;
        margin-right: 23px; 
    }
`




//Hyperlink Formatting

export const ATag = styled.a`
    display: flex;
    text-decoration: None;
    color: ${props => props.theme.textColor};
`

export const ATagTwo = styled.a`
    display: flex;
    color: ${props => props.theme.hyperLink};
`
