import React from 'react'
import {Stage, Layer, Line} from 'react-konva'


export const Mountain = () => {
    return (
        <Stage width={2000} height={1000}>
            <Layer>
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
    )

}

