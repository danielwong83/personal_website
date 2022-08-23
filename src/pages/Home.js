import React from 'react'

import {HomeColor, 
        LeftSide, 
        RightSide,
        Circle,
        Daniel,
        Wong,
        Role,
        WelcomeMessage,
        ContentWrapper,
        ObjectWrapper,
        Name,
        Description,} from '../styles/Home.style'

import WaveObject from '../pages/WaveObject'

const Home = () => {

  return (
      <HomeColor>

        <ContentWrapper>

        <LeftSide>
          <Name>
              <Daniel>Daniel</Daniel>
              <Wong>Wong</Wong>
          </Name>

          <Description>
            <Role>Financial Engineering Graduate</Role>
            <WelcomeMessage>Welcome to my website, feel free to browse around. </WelcomeMessage>
          </Description>

          </LeftSide>


          <RightSide>

          <Circle>
            <ObjectWrapper>
              <WaveObject/>
            </ObjectWrapper>
          </Circle>

          </RightSide>

        </ContentWrapper>

    
      </HomeColor>
  )
}

export default Home;