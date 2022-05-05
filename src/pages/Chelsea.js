import ChelseaNavBar from "../components/ChelseaNavbar"
import { ChelseaColor, PreferredTeam, SquadWrapper, PreferredSubs, 
    Reserves, Injury, LeftSide, RightSide, Fixture, NonFixture} from "../styles/Chelsea.style"

import React, {Component} from 'react'
import { Stage, Layer, Group, Circle, Text, Line, Rect } from 'react-konva'

import ChelseaFixture from "../components/ChelseaFixture"


class Chelsea extends Component{


    render (){
        
        const mendyx = 150
        const mendyy = 450
        const kepax = 1220
        const kepay = 270
        const bettinellix = 1220
        const bettinelliy = 510


        const davex = 375 
        const davey = 590
        const silvax = 325
        const silvay = 450
        const rudigerx = 375
        const rudigery = 310
        const chilwellx = 1220
        const chilwelly = 670
        const jamesx = 525
        const jamesy = 700
        const alonsox = 525 
        const alonsoy = 200
        const christensenx = 1320
        const christenseny = 270
        const chalobahx = 1320
        const chalobahy = 360
        const sarrx = 1520
        const sarry = 510


        const kantex = 650
        const kantey = 340
        const kovacicx = 650
        const kovacicy = 560
        const jorginhox = 1420
        const jorginhoy = 270
        const cheekx = 1220
        const cheeky = 360
        const barkleyx = 1420
        const barkleyy = 510
        const ziyechx = 1520
        const ziyechy = 360
        const saulx = 1320
        const sauly = 510


        const wernerx = 825
        const wernery = 250
        const mountx = 825
        const mounty = 650
        const havertzx = 880
        const havertzy = 450
        const lukakux = 1520
        const lukakuy = 270
        const pulisicx = 1620
        const pulisicy = 270
        const odoix = 1420
        const odoiy = 360
        



        return(
        <div>
            <ChelseaNavBar/>

            <ChelseaColor>
                <SquadWrapper>
                    <LeftSide>
                        <PreferredTeam>My Preferred Current Chelsea XI</PreferredTeam>
                        
                    </LeftSide>

                    <RightSide>
                        <Fixture>
                            <ChelseaFixture/>
                        </Fixture>
                        <NonFixture>
                            <PreferredSubs>My 9 Subs: </PreferredSubs>
                            <Reserves>Reserves: </Reserves>
                            <Injury>Injury List / Unavailable: </Injury>
                        </NonFixture> 
                    </RightSide>

                    
                </SquadWrapper>

                <Stage width={1905} height={870}>
                    <Layer>
                    <Group>
                            <Rect
                                x={100}
                                y={150}
                                width={1000}
                                height={600}
                                fill="green"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 150, 100, 750]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[600, 150, 600, 750]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 150, 1100, 750]}
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
                                points={[100, 750, 1100, 750]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 300, 250, 300]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 600, 250, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[250, 300, 250, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[250, 375, 280, 450, 250, 525]}
                                tension={0.8}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 375, 150, 375]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[100, 525, 150, 525]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[150, 375, 150, 525]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Circle 
                                x={200} 
                                y={450} 
                                radius={1} 
                                stroke="white"
                                strokeWidth={4}
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 300, 950, 300]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 600, 950, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[950, 300, 950, 600]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[950, 525, 920, 450, 950, 375]}
                                tension={0.8}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 375, 1050, 375]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1100, 525, 1050, 525]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Line
                                x={0}
                                y={0}
                                points={[1050, 375, 1050, 525]}
                                strokeWidth={4}
                                stroke="white"
                            />
                            <Circle 
                                x={1000} 
                                y={450} 
                                radius={1} 
                                stroke="white"
                                strokeWidth={4}
                            />
                            <Circle 
                                x={600} 
                                y={450} 
                                radius={75} 
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
                                x={mendyx - 20}
                                y={mendyy - 10}
                                width={40}
                                height={20}
                                text="16"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={mendyx - 50}
                                y={mendyy + 25}
                                width={100}
                                height={20}
                                text="Mendy"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
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
                                x={davex - 20}
                                y={davey - 10}
                                width={40}
                                height={20}
                                text="28"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={davex - 50}
                                y={davey + 25}
                                width={100}
                                height={20}
                                text="Azpilicueta"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={silvax - 20}
                                y={silvay - 10}
                                width={40}
                                height={20}
                                text="6"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={silvax - 50}
                                y={silvay + 25}
                                width={100}
                                height={20}
                                text="T. Silva"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={rudigerx - 20}
                                y={rudigery - 10}
                                width={40}
                                height={20}
                                text="2"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={rudigerx - 50}
                                y={rudigery + 25}
                                width={100}
                                height={20}
                                text="Rudiger"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={chilwellx - 20}
                                y={chilwelly - 10}
                                width={40}
                                height={20}
                                text="21"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={chilwellx - 50}
                                y={chilwelly + 25}
                                width={100}
                                height={20}
                                text="Chilwell"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={jamesx - 20}
                                y={jamesy - 10}
                                width={40}
                                height={20}
                                text="24"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={jamesx - 50}
                                y={jamesy + 25}
                                width={100}
                                height={20}
                                text="James"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={kantex - 20}
                                y={kantey - 10}
                                width={40}
                                height={20}
                                text="7"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={kantex - 50}
                                y={kantey + 25}
                                width={100}
                                height={20}
                                text="Kante"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={kovacicx - 20}
                                y={kovacicy - 10}
                                width={40}
                                height={20}
                                text="8"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={kovacicx - 50}
                                y={kovacicy + 25}
                                width={100}
                                height={20}
                                text="Kovacic"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={wernerx - 20}
                                y={wernery - 10}
                                width={40}
                                height={20}
                                text="11"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={wernerx - 50}
                                y={wernery + 25}
                                width={100}
                                height={20}
                                text="Werner"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={mountx - 20}
                                y={mounty - 10}
                                width={40}
                                height={20}
                                text="19"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={mountx - 50}
                                y={mounty + 25}
                                width={100}
                                height={20}
                                text="Mount"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={havertzx - 20}
                                y={havertzy - 10}
                                width={40}
                                height={20}
                                text="29"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={havertzx - 50}
                                y={havertzy + 25}
                                width={100}
                                height={20}
                                text="Havertz"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={kepax}
                                y={kepay}
                                radius={20}
                                fill="#C1C1C1"
                            />
                            <Text
                                fontSize={15}
                                x={kepax - 20}
                                y={kepay - 10}
                                width={40}
                                height={20}
                                text="1"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={kepax - 50}
                                y={kepay + 25}
                                width={100}
                                height={20}
                                text="Arrizabalaga"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
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
                                x={bettinellix}
                                y={bettinelliy}
                                radius={20}
                                fill="#C1C1C1"
                            />
                            <Text
                                fontSize={15}
                                x={bettinellix - 20}
                                y={bettinelliy - 10}
                                width={40}
                                height={20}
                                text="13"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={bettinellix - 50}
                                y={bettinelliy + 25}
                                width={100}
                                height={20}
                                text="Bettinelli"
                                fill="black"
                                verticalAlign="middle"
                                align="center"
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
                                x={alonsox}
                                y={alonsoy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={alonsox - 20}
                                y={alonsoy - 10}
                                width={40}
                                height={20}
                                text="3"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={alonsox - 50}
                                y={alonsoy + 25}
                                width={100}
                                height={20}
                                text="Alonso"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={christensenx}
                                y={christenseny}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={christensenx - 20}
                                y={christenseny - 10}
                                width={40}
                                height={20}
                                text="4"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={christensenx - 50}
                                y={christenseny + 25}
                                width={100}
                                height={20}
                                text="Christensen"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={chalobahx}
                                y={chalobahy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={chalobahx - 20}
                                y={chalobahy - 10}
                                width={40}
                                height={20}
                                text="14"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={chalobahx - 50}
                                y={chalobahy + 25}
                                width={100}
                                height={20}
                                text="Chalobah"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={sarrx}
                                y={sarry}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={sarrx - 20}
                                y={sarry - 10}
                                width={40}
                                height={20}
                                text="31"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={sarrx - 50}
                                y={sarry + 25}
                                width={100}
                                height={20}
                                text="Sarr"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={jorginhox}
                                y={jorginhoy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={jorginhox - 20}
                                y={jorginhoy - 10}
                                width={40}
                                height={20}
                                text="5"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={jorginhox - 50}
                                y={jorginhoy + 25}
                                width={100}
                                height={20}
                                text="Jorginho"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={cheekx}
                                y={cheeky}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={cheekx - 20}
                                y={cheeky - 10}
                                width={40}
                                height={20}
                                text="12"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={cheekx - 50}
                                y={cheeky + 25}
                                width={100}
                                height={20}
                                text="Loftus-Cheek"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={barkleyx}
                                y={barkleyy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={barkleyx - 20}
                                y={barkleyy - 10}
                                width={40}
                                height={20}
                                text="18"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={barkleyx - 50}
                                y={barkleyy + 25}
                                width={100}
                                height={20}
                                text="Barkley"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={ziyechx}
                                y={ziyechy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={ziyechx - 20}
                                y={ziyechy - 10}
                                width={40}
                                height={20}
                                text="22"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={ziyechx - 50}
                                y={ziyechy + 25}
                                width={100}
                                height={20}
                                text="Ziyech"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={saulx}
                                y={sauly}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={saulx - 20}
                                y={sauly - 10}
                                width={40}
                                height={20}
                                text="17"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={saulx - 50}
                                y={sauly + 25}
                                width={100}
                                height={20}
                                text="Saul"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={lukakux}
                                y={lukakuy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={lukakux - 20}
                                y={lukakuy - 10}
                                width={40}
                                height={20}
                                text="9"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={lukakux - 50}
                                y={lukakuy + 25}
                                width={100}
                                height={20}
                                text="Lukaku"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={pulisicx}
                                y={pulisicy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={pulisicx - 20}
                                y={pulisicy - 10}
                                width={40}
                                height={20}
                                text="10"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={pulisicx - 50}
                                y={pulisicy + 25}
                                width={100}
                                height={20}
                                text="Pulisic"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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
                                x={odoix}
                                y={odoiy}
                                radius={20}
                                fill="#034694"
                            />
                            <Text
                                fontSize={15}
                                x={odoix - 20}
                                y={odoiy - 10}
                                width={40}
                                height={20}
                                text="20"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
                            />
                            <Text
                                fontSize={15}
                                x={odoix - 50}
                                y={odoiy + 25}
                                width={100}
                                height={20}
                                text="Hudson-Odoi"
                                fill="#dba111"
                                verticalAlign="middle"
                                align="center"
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