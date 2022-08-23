import React, {Component} from 'react'
import {Stage, Layer, Group, Circle, Line} from 'react-konva'

import { useTheme } from 'styled-components';

export const Stickman = () => {

    const frameStartx = 400
    const frameStarty = 515

    const theme = useTheme();

    return (
        <Stage width={2000} height={1000}>

            <Layer>
                <Group>
                    <Circle
                        x={frameStartx}
                        y={frameStarty}
                        radius={5}
                        fill={theme.stickman}
                    />
                    <Line
                        x={frameStartx}
                        y={frameStarty}
                        points={[0, 0, 0, 15]}
                        stroke="white"
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
            </Layer>
        </Stage>
    )
}


