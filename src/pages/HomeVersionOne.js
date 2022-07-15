import React, {Component} from 'react'
import { Stage, Layer, Group, Circle, Line } from 'react-konva';


import {HomeColor, 
        ImperialCollege, 
        London, 
        ImperialCollegeArea,
        StudentArea,
        Student,
        StudentWrapper,
        Name,
        NameWrapper,
        Everything,
        Words,
        VersionOne,
        PreviousPage,
        UnavailableWords,
        UnavailableWrapper,
        Suggestion} from '../styles/HomeVersionOne.style'


class Home extends Component {


    state = {
      isDragging: false,
      x: 0,
      y: 0
    };

    render() {

        const hours = new Date().getHours();

        const coordinates = [{"x":400,"y":517},{"x":452,"y":465},{"x":504,"y":411},
                            {"x":556,"y":364},{"x":608,"y":324},{"x":660,"y":293},
                            {"x":713,"y":279},{"x":765,"y":300},{"x":817,"y":344},
                            {"x":869,"y":382},{"x":921,"y":387},{"x":973,"y":369},
                            {"x":1026,"y":345},{"x":1078,"y":315},{"x":1130,"y":285},
                            {"x":1182,"y":261},{"x":1234,"y":244},{"x":1286,"y":239},
                            {"x":1338,"y":252},{"x":1391,"y":282},{"x":1443,"y":328},
                            {"x":1495,"y":383},{"x":1547,"y":447},{"x":1600,"y":517}]


        const x = coordinates[hours].x
        const y = coordinates[hours].y

        const frameStartx = x
        const frameStarty = y

        return (

            <HomeColor>

                <Words>
                    <VersionOne>Version 1.0 </VersionOne>
                    <PreviousPage href= "/#/project"> Previous Page</PreviousPage>
                </Words>

                <UnavailableWrapper>
                    <UnavailableWords>Sorry, this feature is not supported for this current device. Please use another device to view this feature. </UnavailableWords>
                    <Suggestion>(Works better on laptops and desktops)</Suggestion>
                </UnavailableWrapper>


                <Everything>

                    <NameWrapper>
                        <Name>Daniel Wong</Name>
                    </NameWrapper>

                    <StudentWrapper>
                        <StudentArea>
                            <Student>Financial Engineering at </Student>
                        </StudentArea>
                        <ImperialCollegeArea>
                            <ImperialCollege>Imperial College</ImperialCollege>
                            <London>London</London>
                        </ImperialCollegeArea>
                    </StudentWrapper>

                    <Stage width={2000} height={1000}>
                        <Layer>
                            <Group
                            x={this.state.x}
                            y={this.state.y}
                            draggable
                            onDragStart={() => {
                            this.setState({
                                isDragging: true
                            });
                            }}
                            onDragEnd={e => {
                            this.setState({
                                isDragging: false,
                                x: e.target.x(),
                                y: e.target.y()
                            });
                            }}>
                                <Circle
                                    x={frameStartx}
                                    y={frameStarty}
                                    radius={5}
                                    fill="black"
                                />
                                <Line
                                    x={frameStartx}
                                    y={frameStarty}
                                    points={[0, 0, 0, 15]}
                                    stroke="black"
                                    />
                                <Line
                                    x={frameStartx}
                                    y={frameStarty}
                                    points={[0, 15, -5, 30]}
                                    stroke="black"
                                    />
                                <Line
                                    x={frameStartx}
                                    y={frameStarty}
                                    points={[0, 15, 5, 30]}
                                    stroke="black"
                                    />
                                <Line
                                    x={frameStartx}
                                    y={frameStarty}
                                    points={[0, 7, -5, 13]}
                                    stroke="black"
                                    />
                                <Line
                                    x={frameStartx}
                                    y={frameStarty}
                                    points={[0, 7, 5, 13]}
                                    stroke="black"
                                    />
                            </Group>

                            <Line
                                x={0}
                                y={0}
                                points={[400, 555, 700, 310, 900, 420, 1300, 270, 1600, 555]}
                                tension={0.33}
                                stroke="#468C26"
                                //stroke="#1566E9"
                            />
                        </Layer>
                    </Stage>

                </Everything>

            </HomeColor>

      );
    }
  }

  export default Home 