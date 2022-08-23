import React, {useState} from 'react'
import ChessStats from '../components/ChessStats'
import ChessCurrentGame from '../components/ChessCurrentGame'
import ChessBlitzHistory from '../components/ChessBlitzHistory'

import { useTheme } from 'styled-components';


import {HomeColor,
        ChessWord,
        LeftWrapper,
        BoardWrapper,
        Tabs,
        Tab,
        Content,
        FavChessGame,
        FavChessGameText,
        LiveGameText,
        Profile,
        GraphWrapper,
        ContentWrapper,
        } from '../styles/Chess.style'

const chess_link = "https://lichess.org/@/danielwong4"

function Chess() {

  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const theme = useTheme();


  return (
    <HomeColor>

      <ContentWrapper>

        <LeftWrapper>

          <ChessWord>Chess Stats</ChessWord>
          <ChessStats/>
          <Profile href={chess_link} target='_blank' rel='noopener noreferrer'> See Full Profile </Profile>
          
        </LeftWrapper>

        <BoardWrapper>

          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Favorite Game
            </Tab>

            <Tab onClick={handleClick} active={active === 1} id={1}>
              Live Game
            </Tab>

            <Tab onClick={handleClick} active={active === 2} id={2}>
              Blitz Rating Graph
            </Tab>
          </Tabs>


          <Content active={active === 1}>
            
            <ChessCurrentGame/>

          </Content>

          <Content active={active === 0}>
            <FavChessGameText>
              My most accurate game played according to engine: 0 inaccuracies, 0 mistakes, 0 blunders, and an average centipawn lost of 15. 
            </FavChessGameText>
            <FavChessGame src={theme.chessFav}></FavChessGame>
          </Content>

          <Content active={active === 2}>
            <LiveGameText>Feature Currently Unavailable</LiveGameText>
            {/* <ChessBlitzHistory/> */}
          </Content>

        </BoardWrapper>

      </ContentWrapper>

    </HomeColor>
  );
}

export default Chess;