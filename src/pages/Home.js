import React from 'react'


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
        IndexCardCircle,} from '../styles/Home.style'


import {useSpring} from 'react-spring'




const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {

    const [props, set] = useSpring(() => ({xys: [0,0,1], config: {mass: 10, tension: 250, friction: 50}}))

    
        return(
    
            <HomeColor>

            <IndexCard
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x,y)}))}
            onMouseLeave={() => (set({xys: [0,0,1]}))}
            style={{transform: props.xys.interpolate(trans)}}
            >

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

            </HomeColor>
        
      );
    }
  
  export default Home