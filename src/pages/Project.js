import React from 'react';

import {HomeColor, 
        MainWrapper, 
        ProjectWord, 
        ProjectWrapper, 
        IndividualProject, 
        ProjectName, 
        ProjectPhoto, 
        ProjectPhotoTwo, 
        ProjectContent, 
        Description,
        Updates,
        TurtlePhoto,
        ATag} from '../styles/Project.style'

import blackjack from '../images/blackjack.svg'
import dashboard from '../images/dashboard.svg'
import websitephoto from '../images/website.svg'
import turtle from '../images/turtle.svg'


const dashboardlink = "https://sndw1.shinyapps.io/dashboard/"


const Project = () => {

    return (
        <HomeColor>
            <MainWrapper>
                <ProjectWord>Projects</ProjectWord>

                <ProjectWrapper>
                    <IndividualProject>
                        <ProjectPhotoTwo src = {websitephoto}/>
                        <ProjectContent>
                            <ProjectName><ATag href= "/">
                        Personal Website</ATag></ProjectName> 
                            <Description>A fun little JavaScript project I created with no prior experience.</Description>
                            <Description>Languages: JavaScript (React), HTML</Description>  
                            <Description>Future Plans: to animate a motion for the stickman in the home page, to optimise for mobile device</Description>
                            <Updates>Last Updated: January 2022</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>

                    <IndividualProject>
                            <ProjectPhotoTwo src = {dashboard}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {dashboardlink} target='_blank' rel='noopener noreferrer'>
                        Actuarial Dashboard</ATag></ProjectName>
                            <Description>A dashboard with relevant actuarial statistics for the life insurance industry, including mortality and critical illness.</Description>
                            <Description>Languages: R programming, R Shiny</Description>  
                            <Description>Future Plans: N/A</Description>
                            <Updates>Last Updated: May 2021</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>

                    <IndividualProject>
                        <ProjectPhoto src = {blackjack}/>
                        <ProjectContent>
                            <ProjectName>BlackJack (4 Players)</ProjectName>
                            <Description>A recreation of the casino game, and my first code where I utilised OOP.</Description>
                            <Description>Languages: Python</Description>  
                            <Description>Future Plans: to create a UI for the game</Description>
                            <Updates>Last Updated: June 2019</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>
                    
                    {/*<IndividualProject>
                        <TurtlePhoto src = {turtle}/>
                        <ProjectContent>
                            <ProjectName>Blank</ProjectName>    
                        </ProjectContent>
                                          
                    </IndividualProject>*/}
                    


                </ProjectWrapper>
            </MainWrapper>
        </HomeColor>
    )
}

export default Project
