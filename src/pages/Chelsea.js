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
                            
                            <HeaderText>Wishful signings this summer (2022): </HeaderText>
                                <PlayerWrapper>
                                    <Name>Robert Lewandowski 🇵🇱</Name>
                                    <Team>Current Team: FC Bayern</Team>
                                    <Description>Lewandowski wants to leave Bayern, and we desperately need a goal-scoring striker.
                                        Our last decent striker was Diego Costa, who has left over half a decade ago. Though he is 33
                                        years old, he still has some firepower in him, and I think it would solve our goal-scoring problems
                                        for at least a few years. He's most likely going to Barcelona FC though.
                                    </Description>
                                </PlayerWrapper>
                            
                            <HeaderText>Players I think should leave: </HeaderText>

                                <PlayerWrapper>
                                    <Name>Ross Barkley</Name>
                                    <Description>He is quite low in Tuchel's midfield pecking order, and with his talent, he can probably be 
                                        a first-team player elsewhere in the Premier League.
                                    </Description>
                                </PlayerWrapper>

                                <PlayerWrapper>
                                    <Name>Marcos Alonso</Name>
                                    <Description>Marcos Alonso was honestly not bad when Chilwell was injured, but he seems to be a defensive
                                        liability at times. Great goal-scoring threat though. 
                                    </Description>
                                </PlayerWrapper>

                                <Description>Nice. They left. </Description>


                        </RightSide>

                        
                    </ContentWrapper>

                    
                </TitleWrapper>

                
            </HomeColor>

        </Overall>
        
    )
  }
  
  export default Chelsea;