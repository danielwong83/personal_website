import React, {useState} from 'react'


import {HomeColor, 
        ImperialCollege, 
        London, 
        ImperialCollegeArea,
        Student,
        StudentWrapper,
        Name,
        IndexCard,
        IndexCardRed,
        IndexCardBlue,
        Lines,
        NewLine,
        NewLineRed,
        IndexCardCircle,
        IndexCardCircleBack,
        IndexCardWrapper,
        FlipWord} from '../styles/Home.style'


import {useSpring} from 'react-spring'



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

            <IndexCardWrapper onClick={() => set(state => !state)}
            onMouseMove={({clientX: x, clientY: y}) => (setflip({xys: calc(x,y)}))}
            onMouseLeave={() => (setflip({xys: [0,0,1]}))}
            style={{transform: props.xys.interpolate(trans)}}>

            <IndexCard
            style={{ opacity: opacity.to(o => 1 - o), transform }}>

                <IndexCardCircle/>

                    
                    <Lines>
                        <NewLineRed>
                            <IndexCardRed/>
                        </NewLineRed>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                    </Lines>

                    
                    <Name>Daniel Wong</Name>

                    <StudentWrapper>
                        <Student>Financial Engineering at </Student>

                    <ImperialCollegeArea>
                        <ImperialCollege>Imperial College</ImperialCollege>
                        <London>London</London>
                    </ImperialCollegeArea>

                    </StudentWrapper>





            </IndexCard>

            <IndexCard
            style={{
                opacity,
                transform,
                rotateY: '180deg',
              }}>

                <IndexCardCircleBack/>

                    
                    <Lines>
                        <NewLineRed>
                            <IndexCardRed/>
                        </NewLineRed>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                        <NewLine>
                            <IndexCardBlue/>
                        </NewLine>
                    </Lines>

                    
                    <FlipWord>HEYY! 😡 flip me back</FlipWord>



            </IndexCard>

            </IndexCardWrapper>

            </HomeColor>
        
      );
    }
  
  export default Home