import ChelseaNavBar from "../components/ChelseaNavbar"
import { ChelseaColor, PreferredTeam, SquadWrapper } from "../styles/Chelsea.style"

import React, {Component} from 'react'
import { Stage, Layer, Group, Circle, Text, Line, Rect } from 'react-konva'


class Chelsea extends Component{


    render (){
        
        const mendyx = 150
        const mendyy = 375
        const davex = 325
        const davey = 460
        const silvax = 325
        const silvay = 375
        const rudigerx = 325
        const rudigery = 285
        const chilwellx = 425
        const chilwelly = 200
        const jamesx = 425
        const jamesy = 550

        const kantex = 550
        const kantey = 294
        const kovacicx = 550
        const kovacicy = 456

        const wernerx = 750
        const wernery = 250
        const mountx = 750
        const mounty = 500
        const havertzx = 825
        const havertzy = 375


        return(
        <div>
            <ChelseaNavBar/>

            <ChelseaColor>
                <SquadWrapper>
                    <PreferredTeam>My Preferred Chelsea XI</PreferredTeam>
                </SquadWrapper>

                <Stage width={1500} height={800}>
                    <Layer>
                    <Group>
                            <Rect
                                x={100}
                                y={150}
                                width={1000}
                                height={450}
                                fill="green"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 150, 100, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[600, 150, 600, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 150, 1100, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 150, 1100, 150]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 600, 1100, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Circle 
                                x={600} 
                                y={375} 
                                radius={55} 
                                stroke="white"
                                strokeWidth={4}
                            />
                            

                        </Group>
                        <Group
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
                                x={mendyx}
                                y={mendyy}
                                radius={20}
                                fill="#C1C1C1"
                            />
                            <Text
                                fontSize={15}
                                x={mendyx - 8}
                                y={mendyy - 7}
                                text="16"
                            />
                        </Group>
                        <Group
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
                                x={davex}
                                y={davey}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={davex - 8}
                                y={davey - 7}
                                text="28"
                                fill="#dba111"
                            />
                            <Text
                                fontSize={7}
                                x={davex + 10}
                                y={davey - 10}
                                text="C"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={silvax}
                                y={silvay}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={silvax - 4}
                                y={silvay - 7}
                                text="6"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={rudigerx}
                                y={rudigery}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={rudigerx - 4}
                                y={rudigery - 7}
                                text="2"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={chilwellx}
                                y={chilwelly}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={chilwellx - 8}
                                y={chilwelly - 7}
                                text="21"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={jamesx}
                                y={jamesy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={jamesx - 8}
                                y={jamesy - 7}
                                text="24"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={kantex}
                                y={kantey}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={kantex - 4}
                                y={kantey - 7}
                                text="7"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={kovacicx}
                                y={kovacicy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={kovacicx - 4}
                                y={kovacicy - 7}
                                text="8"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={wernerx}
                                y={wernery}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={wernerx - 8}
                                y={wernery - 7}
                                text="11"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={mountx}
                                y={mounty}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={mountx - 8}
                                y={mounty - 7}
                                text="19"
                                fill="#dba111"
                            />
                        </Group>
                        <Group
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
                                x={havertzx}
                                y={havertzy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={havertzx - 8}
                                y={havertzy - 7}
                                text="29"
                                fill="#dba111"
                            />
                        </Group>
                        
                        

                    </Layer>
                </Stage>
                

                
            </ChelseaColor>
        </div>
        
        )
    }
}

export default Chelsea;