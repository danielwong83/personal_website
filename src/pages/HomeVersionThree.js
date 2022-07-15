import React, {useState} from 'react'

import {HomeColor, 
        ImperialCollege, 
        London, 
        ImperialCollegeArea,
        Student,
        Name,
        IndexCard,
        Main,
        IndexCardWrapper,
        LeftSide,
        RightSide,
        ImpierialPhoto,
        Bottom,
        WhiteWords,
        WhiteWordsBack,
        Email,
        ChelseaSticker,
        ChessSticker,
        DwightSticker,
        GuitarSticker,
        MaxSticker,
        NgoloSticker,
        RamosSticker,
        DogeSticker,
        ElonSticker,
        LeagueSticker,
        AlcarazSticker,
        ChecoSticker,
        VersionThree,
        IndexCardArea,
        PreviousPage,
        Words,
        Everything,
        UnavailableWords,
        UnavailableWrapper,
        Suggestion} from '../styles/HomeVersionThree.style'


import {useSpring} from 'react-spring'

import imperialphoto from '../images/imperial.png'

import chelsea from '../images/chelsea.svg'
import chess from '../images/stickers/chess.png'
import schrute from '../images/stickers/schrute.png'
import guitar from '../images/stickers/guitar.png'
import max from '../images/stickers/max.png'
import ngolo from '../images/stickers/ngolo.png'
import ramos from '../images/stickers/ramos.png'
import doge from '../images/stickers/doge.png'
import elon from '../images/stickers/elon.png'
import league from '../images/stickers/league.png'
import checo from '../images/stickers/perez.png'
import alcaraz from '../images/stickers/alcaraz.png'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {

    const [flipped, set] = useState(false)
    const [props, setflip] = useSpring(() => ({xys: [0,0,1], config: {mass: 7, tension: 250, friction: 50}}))
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(700px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 4, tension: 500, friction: 50},
      })
    
        return(
    
            <HomeColor>

              <Words>
                <VersionThree>Version 2.2 </VersionThree>
                <PreviousPage href= "/#/project"> Previous Page</PreviousPage>
              </Words>

              <UnavailableWrapper>
                  <UnavailableWords>Sorry, this feature is not supported for this current device. Please use another device to view this feature.  </UnavailableWords>
                  <Suggestion>(Works better on laptops and desktops)</Suggestion>
              </UnavailableWrapper>

              <Everything>
              
                <IndexCardArea>

                  <IndexCardWrapper onClick={() => set(state => !state)}
                  onMouseMove={({clientX: x, clientY: y}) => (setflip({xys: calc(x,y)}))}
                  onMouseLeave={() => (setflip({xys: [0,0,1]}))}
                  style={{transform: props.xys.interpolate(trans)}}>

                    <IndexCard
                    style={{ opacity: opacity.to(o => 1 - o), transform }}>

                        <Main>

                          <LeftSide>
                            <Name>Daniel WONG</Name>
                            <Student>Financial Engineering Student </Student>
                            <Email>daniel.wong121@imperial.ac.uk</Email>
                          </LeftSide>
                        
                          <RightSide>
                            <ImpierialPhoto src = {imperialphoto}/>
                            <ImperialCollegeArea>
                                <ImperialCollege>Imperial College</ImperialCollege>
                                <London>London</London>
                            </ImperialCollegeArea>
                          </RightSide>
                        
                        </Main>

                        <Bottom>
                          <WhiteWords>© Daniel Wong</WhiteWords>
                        </Bottom>

                    </IndexCard>

                    <IndexCard
                        style={{
                        opacity,
                        transform,
                        rotateY: '180deg'}}>


                        <ChelseaSticker src = {chelsea}/>
                        <ChessSticker src = {chess}/>
                        <DwightSticker src = {schrute}/>
                        <GuitarSticker src = {guitar}/>
                        <MaxSticker src = {max}/>
                        <NgoloSticker src = {ngolo}/>
                        <DogeSticker src = {doge}/>
                        <ElonSticker src = {elon}/>
                        <LeagueSticker src = {league}/>
                        <RamosSticker src = {ramos}/>
                        <AlcarazSticker src = {alcaraz}/>
                        <ChecoSticker src = {checo}/>


                        <Bottom>
                          <WhiteWordsBack>"Who's your worm guy?" - Creed Bratton</WhiteWordsBack>
                        </Bottom>

                    </IndexCard>

                  </IndexCardWrapper>

                </IndexCardArea>

              </Everything>
            
            </HomeColor>

      );
    }
  
  export default Home