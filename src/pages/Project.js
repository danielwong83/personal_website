import React from 'react';

import {HomeColor, 
        MainWrapper, 
        ProjectWord, 
        ProjectWrapper, 
        IndividualProject,
        WebsiteProject,
        FeaturesDescription,
        ProjectName,
        DescriptionName, 
        BJPhoto, 
        DashboardPhoto,
        WebsiteContent,
        ProjectContent, 
        FeaturesContent,
        FeaturesWrapper,
        FeaturesPhoto,
        Description,
        DescriptionWebsite,
        ListValue,
        Updates,
        ScraperPhoto,
        SquarePhoto,
        NBAPhoto,
        ATag,
        ATagTwo,
        Disclaimer} from '../styles/Project.style'

import blackjack from '../images/blackjack.svg'
import dashboard from '../images/dashboard.svg'
import football from '../images/football.svg'
import webscraping from '../images/webscraping.svg'
import maze from '../images/maze.svg'
import chess from '../images/chess-board.svg'
import chelsea from '../images/chelsea.svg'
import home_page from '../images/home-page.svg'
import about_photos from '../images/about-photos.svg'
import nba from '../images/nba.png'


const dashboardlink = "https://sndw1.shinyapps.io/dashboard/"
const blackjacklink = "https://github.com/danielwong83/blackjack"
const yahoofinancelink = "https://github.com/danielwong83/yahoo_finance_scraper"
const mazelink = "https://github.com/danielwong83/maze_game"


const Project = () => {

    return (

        <HomeColor>

            <MainWrapper>

                <ProjectWord>Current Projects</ProjectWord>

                <ProjectWrapper>
                    
                    <IndividualProject>
                        <NBAPhoto src = {nba}/>
                            <ProjectContent>
                                <ProjectName><ATag href= "/"> Systematic Spread Trading in the NBA Betting Market</ATag></ProjectName> 
                                <Description>To create a prediction model that can calculate the spread between two teams. </Description>
                                <Description>Languages: Python</Description>
                                <Description></Description>
                                <Updates>Current Status: Completed Project (current model not reliable), but constantly improving</Updates>
                            </ProjectContent>
                    </IndividualProject>

                    <IndividualProject>
                        <SquarePhoto src = {football}/>
                            <ProjectContent>
                                <ProjectName><ATag href= "/">Football xG Modelling + Betting</ATag></ProjectName> 
                                <Description>To find the expected goals scored per football match, and using the results to 
                                    bet on Over/Under 2.5 goal prop. </Description>
                                <Description>Languages: R (for data), Python (for analysis + modelling)</Description>
                                <Description></Description>
                                <Updates>Current Status: Cleaning data + OLS</Updates>    
                            </ProjectContent>
                    </IndividualProject>

                    <IndividualProject>
                        <SquarePhoto src = {maze}/>
                            <ProjectContent>
                                <ProjectName><ATag href= {mazelink} target='_blank' rel='noopener noreferrer'>Maze Memory Game</ATag></ProjectName> 
                                <Description>A Game where you have to have to memorize the path process to reach the finishing point. </Description>
                                <Description>Languages: Python</Description>
                                <Description></Description>
                                <Updates>Current Status: Planning frontend process</Updates>    
                            </ProjectContent>
                    </IndividualProject>
                </ProjectWrapper>


                <ProjectWord>Projects</ProjectWord>

                <ProjectWrapper>

                    <IndividualProject>
                            <DashboardPhoto src = {dashboard}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {dashboardlink} target='_blank' rel='noopener noreferrer'>Actuarial Dashboard</ATag></ProjectName>
                            <Description>A dashboard with relevant actuarial statistics for the life insurance industry, including mortality and critical illness data.</Description>
                            <Description>Languages: R (R Shiny)</Description>  
                            <Description>Future Plans: N/A</Description>
                            <Updates>Last Updated: May 2021</Updates>    
                        </ProjectContent>                                    
                    </IndividualProject>

                    <IndividualProject>
                            <ScraperPhoto src = {webscraping}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {yahoofinancelink} target='_blank' rel='noopener noreferrer'>Yahoo Finance Scraper</ATag></ProjectName>
                            <Description>A tool that scrapes Yahoo Finance and finds current and historic prices of financial derivatives, and data can be exported to an excel.
                            </Description>
                            <Description>Languages: Python (beautifulSoup4) </Description>  
                            <Description>Future Plans: N/A</Description>
                            <Updates>Last Updated: January 2022</Updates>    
                        </ProjectContent>                                         
                    </IndividualProject>

                    <IndividualProject>
                        <BJPhoto src = {blackjack}/>
                        <ProjectContent>
                            <ProjectName><ATag href= {blackjacklink} target='_blank' rel='noopener noreferrer'>BlackJack (4 Players)</ATag></ProjectName>
                            <Description>A recreation of the famous casino game, and one of my first code where OOP was utilised.</Description>
                            <Description>Languages: Python</Description>  
                            <Description>Future Plans: to create a UI for the game</Description>
                            <Updates>Last Updated: June 2019</Updates>    
                        </ProjectContent>                                        
                    </IndividualProject>
                    
                </ProjectWrapper>



                <ProjectWord>Website</ProjectWord>
                
                <ProjectWrapper>

                    <WebsiteProject>

                        <WebsiteContent>
                            <ProjectName>Description: </ProjectName> 
                            <Description>A fun little JS React project I created with no prior experience. I have worked on this website on and off since January 2022. </Description>
                            <Description>Future Plans: New Features / New Projects</Description>

                            <DescriptionName>Previous Features: </DescriptionName>

                            <Disclaimer>(Disclaimer: All of these previous features here are not optimised for mobile devices. )</Disclaimer>

                            <DescriptionWebsite><ATagTwo href= "/#/home_vers_1">Homepage V1.0 </ATagTwo>
                                <ListValue>{'\u2022'} name with mountain and moveable stickman</ListValue>
                                <ListValue>{'\u2022'} 24 different spawn locations fo the stickman, dependent on device local time </ListValue>
                            </DescriptionWebsite>
                            <DescriptionWebsite><ATagTwo href= "/#/home_vers_2">Homepage V2.0 </ATagTwo> 
                                <ListValue>{'\u2022'} name on a flippable and hooverable index card</ListValue>
                                <ListValue>{'\u2022'} drew inspiration from my elementary days, when my name was written on index cards</ListValue>
                                <ListValue>{'\u2022'} quote by one of my favorite characters from my favorite tv show</ListValue>
                            </DescriptionWebsite>

                            <DescriptionWebsite><ATagTwo href= "/#/home_vers_3">Homepage V2.2 </ATagTwo> 
                                <ListValue>{'\u2022'} name on a flippable and hooverable index card</ListValue>
                                <ListValue>{'\u2022'} similar to a name card</ListValue>
                                <ListValue>{'\u2022'} flipped side are stickers of my interests and hobbies</ListValue>
                            </DescriptionWebsite>

                            <DescriptionWebsite><ATagTwo href= "/#/chelsea_21_22">Chelsea 2021-2022 </ATagTwo> 
                                <ListValue>{'\u2022'} draggable player objects on a pitch (starting 11 and subs)</ListValue>
                                <ListValue>{'\u2022'} used react-konva for objects, but hard to resize / make objects responsive</ListValue>
                            </DescriptionWebsite>
                            

                            <DescriptionName>Website Features: </DescriptionName>

                            <FeaturesContent>

                                <FeaturesWrapper>
                                    <ATag href= "/"><FeaturesPhoto src = {home_page}/></ATag>
                                    <FeaturesDescription>Homepage - 3d avatar waving to strangers on my website; light/dark mode on all pages</FeaturesDescription>
                                </FeaturesWrapper>


                                <FeaturesWrapper>
                                    <ATag href= "/#/chelsea"><FeaturesPhoto src = {chelsea}/></ATag>
                                    <FeaturesDescription>Chelsea - my preferred XI, transfer opinions, and upcoming fixture</FeaturesDescription>
                                </FeaturesWrapper>

                                <FeaturesWrapper>
                                    <ATag href= "/#/chess"><FeaturesPhoto src = {chess}/></ATag>
                                    <FeaturesDescription>Chess - current chess ratings, favorite game, live game watching, and rating history (Rating history is currently unavailable)</FeaturesDescription>
                                </FeaturesWrapper>

                                <FeaturesWrapper>
                                    <ATag href= "/#/aboutphotos"><FeaturesPhoto src = {about_photos}/></ATag>
                                    <FeaturesDescription>About Photos - animation preparation for about page (Currently unavailable feature) </FeaturesDescription>
                                </FeaturesWrapper>

                            </FeaturesContent> 

                            <Updates>Last Updated: August 2022 (Current Version 3.0)</Updates>

                        </WebsiteContent>
                                          
                    </WebsiteProject>

                </ProjectWrapper>
                

            </MainWrapper>
            
        </HomeColor>
    )
}

export default Project;
