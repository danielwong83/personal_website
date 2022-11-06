import ChelseaNavBar from "../components/ChelseaNavbar"
import {HomeColor, 
        Overall, 
        TitleWrapper,
        TitleText,
        ContentWrapper,
        LeftSide,
        RightSide,
        HeaderText,
        Category,
        Position,
        Name,
        PositionWrapper,
        Flag,
        PlayerWrapper,
        Team,
        Description,
        FixtureWrapper} from "../styles/Chelsea.style"

import React from 'react'

import ChelseaFixture from "../components/ChelseaFixture"


const Chelsea = () => {

    return (
        <Overall>
            
            <ChelseaNavBar/>

            <HomeColor>
                <TitleWrapper>

                    <TitleText>My Chelsea Page</TitleText>
                    <ContentWrapper>
                        <LeftSide>
                            <HeaderText>My Preferred Starting XI: (4-3-3)</HeaderText>
                            <PositionWrapper>
                                <Category>
                                    <Position>GK: </Position>
                                    <Name>Edouard Mendy</Name>
                                    <Flag>🇸🇳</Flag>
                                </Category>
                            </PositionWrapper>
                            <PositionWrapper>
                                <Category>
                                    <Position>LB:</Position>
                                    <Name>Marc Cucurella</Name>
                                    <Flag>🇪🇸</Flag>
                                </Category>
                                <Category>
                                    <Position>CB:</Position>
                                    <Name>Kalidou Koulibaly</Name>
                                    <Flag>🇸🇳</Flag>
                                </Category>
                                <Category>
                                    <Position>CB:</Position>
                                    <Name>Thiago Silva</Name>
                                    <Flag>🇧🇷</Flag>
                                </Category>
                                <Category>
                                    <Position>RB:</Position>
                                    <Name>Reece James</Name>
                                    <Flag>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Flag>
                                </Category>
                            </PositionWrapper>
                            <PositionWrapper>
                                <Category>
                                    <Position>CDM:</Position>
                                    <Name>N'Golo Kanté</Name>
                                    <Flag>🇫🇷</Flag>
                                </Category>
                                <Category>
                                    <Position>CM:</Position>
                                    <Name>Mateo Kovačić</Name>
                                    <Flag>🇭🇷</Flag>
                                </Category>
                                <Category>
                                    <Position>CM:</Position>
                                    <Name>Mason Mount</Name>
                                    <Flag>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Flag>
                                </Category>
                            </PositionWrapper>
                            <PositionWrapper>
                                <Category>
                                    <Position>LW:</Position>
                                    <Name>Raheem Sterling</Name>
                                    <Flag>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Flag>
                                </Category>
                                <Category>
                                    <Position>ST:</Position>
                                    <Name>Pierre-Emerick Aubameyang</Name>
                                    <Flag>🇬🇦</Flag>
                                </Category>
                                <Category>
                                    <Position>RW:</Position>
                                    <Name>Christian Pulisic</Name>
                                    <Flag>🇺🇸</Flag>
                                </Category>
                            </PositionWrapper>
                            
                        </LeftSide>

                        <RightSide>
                            <FixtureWrapper>
                                <ChelseaFixture/>
                            </FixtureWrapper>
                            
                            <HeaderText>Wishful signings this winter (2023): </HeaderText>
                                <PlayerWrapper>
                                    <Name>Christopher Nkunku 🇫🇷</Name>
                                    <Team>Current Team: RB Leipzig</Team>
                                    <Description>Sources say that it is a done deal. Until Fabrizio says here we go, I will not trust anyone.
                                    </Description>
                                </PlayerWrapper>
                            
                            <HeaderText>Players I think should leave: </HeaderText>

                            <PlayerWrapper>
                                <Name>Jorginho</Name>
                                <Description>Sideways merchant needs to go. Gallagher and Chukwuemeka needs more game time. 
                                </Description>
                            </PlayerWrapper>

                            <PlayerWrapper>
                                <Name>Hakim Ziyech</Name>
                                <Description>Is he still in the squad?
                                </Description>
                            </PlayerWrapper>

                        </RightSide>

                        
                    </ContentWrapper>

                    
                </TitleWrapper>

                
            </HomeColor>

        </Overall>
        
    )
  }
  
  export default Chelsea;