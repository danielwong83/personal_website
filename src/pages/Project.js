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
        ScraperPhoto,
        CurrentWord,
        FootballPhoto,
        ATag} from '../styles/Project.style'

import blackjack from '../images/blackjack.svg'
import dashboard from '../images/dashboard.svg'
import websitephoto from '../images/website.svg'
import football from '../images/football.svg'
import webscraping from '../images/webscraping.svg'
import maze from '../images/maze.svg'
import turtle from '../images/turtle.svg'


const dashboardlink = "https://sndw1.shinyapps.io/dashboard/"
const blackjacklink = "https://github.com/danielwong83/blackjack"
const yahoofinancelink = "https://github.com/danielwong83/yahoo_finance_scraper"
const mazelink = "https://github.com/danielwong83/maze_game"


const Project = () => {

    return (
        <HomeColor>
            <MainWrapper>
                <CurrentWord>Current Projects</CurrentWord>

                <ProjectWrapper>
                    <IndividualProject>
                        <FootballPhoto src = {football}/>
                            <ProjectContent>
                                <ProjectName><ATag href= "/">Football xG Modelling + Betting</ATag></ProjectName> 
                                <Description>To find the expected goals scored per football match, and using the results to 
                                    bet on Over/Under 2.5 goal prop. </Description>
                                <Description>Languages: R programming (for data), Python (for analysis + modelling)</Description>
                                <Description></Description>
                                <Updates>Current Status: Cleaning Data + OLS</Updates>    
                            </ProjectContent>
                    </IndividualProject>

                    <IndividualProject>
                        <FootballPhoto src = {maze}/>
                            <ProjectContent>
                                <ProjectName><ATag href= {mazelink} target='_blank' rel='noopener noreferrer'>Maze Memory Game</ATag></ProjectName> 
                                <Description>A Game where you have to have to memorize the path process to reach the finishing point. </Description>
                                <Description>Languages: Python (for now)</Description>
                                <Description></Description>
                                <Updates>Current Status: Finished Backend and Mini UI on console</Updates>    
                            </ProjectContent>
                    </IndividualProject>
                </ProjectWrapper>

                <ProjectWord>Projects</ProjectWord>

                <ProjectWrapper>
                    <IndividualProject>
                        <ProjectPhotoTwo src = {websitephoto}/>
                        <ProjectContent>
                            <ProjectName><ATag href= "/">Personal Website</ATag></ProjectName> 
                            <Description>A fun little JavaScript project I created with no prior experience.</Description>
                            <Description>Languages: JavaScript (React), HTML</Description>  
                            <Description>Future Plans: to animate a motion for the stickman in the home page, to optimise for mobile device</Description>
                            <Updates>Last Updated: January 2022</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>

                    <IndividualProject>
                            <ProjectPhotoTwo src = {dashboard}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {dashboardlink} target='_blank' rel='noopener noreferrer'>Actuarial Dashboard</ATag></ProjectName>
                            <Description>A dashboard with relevant actuarial statistics for the life insurance industry, including mortality and critical illness.</Description>
                            <Description>Languages: R programming (R Shiny)</Description>  
                            <Description>Future Plans: N/A</Description>
                            <Updates>Last Updated: May 2021</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>

                    <IndividualProject>
                        <ScraperPhoto src = {webscraping}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {yahoofinancelink} target='_blank' rel='noopener noreferrer'>Yahoo Finance Scraper</ATag></ProjectName>
                            <Description>A scraper tool that finds prices of financial derivatives on Yahoo Finance. </Description>
                            <Description>Languages: Python (beautifulSoup4) </Description>  
                            <Description>Future Plans: N/A</Description>
                            <Updates>Last Updated: January 2022</Updates>    
                        </ProjectContent>
                                          
                    </IndividualProject>

                    <IndividualProject>
                        <ProjectPhoto src = {blackjack}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {blackjacklink} target='_blank' rel='noopener noreferrer'>BlackJack (4 Players)</ATag></ProjectName>
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
