import React, { Component } from 'react';
import { Stage, Layer, Group, Circle, Line, Path } from 'react-konva';

import {HomeColor, 
    ImperialCollege, 
    London, 
    ImperialCollegeArea,
    StudentArea,
    Student,
    StudentWrapper,
    Name,
    NameWrapper,
    MountainWrapper,} from '../styles/Project.style'

import {Mountain} from '../components/Mountain'

class Project extends Component {

  state = {
    isDragging: false,
    x: 50,
    y: 50
  };

  render() {

    const frameStartx = 323
    const frameStarty = 474

    return (

        <HomeColor>

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
                    />
                    <Path
                        x={0}
                        y={0}
                    />
                </Layer>
            </Stage>
        </HomeColor>
      
    );
  }
}

export default Project