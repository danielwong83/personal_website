import React from "react";

import {HomeColor, 
        Portrait, 
        PhotoWrapper,
        PortraitWrapper} from '../styles/AboutPortraits.style'

import portrait from '../images/portrait-beach-blue.png'
import chessportrait from '../images/chess-photo.png'
import hikingportrait from '../images/hiking.png'



function AboutPortraits(){
    return (
        <HomeColor>

            <PortraitWrapper>
                
                <PhotoWrapper>
                    <Portrait src = {chessportrait}></Portrait>
                </PhotoWrapper>

                <PhotoWrapper>
                    <Portrait src = {portrait}></Portrait>
                </PhotoWrapper>

                <PhotoWrapper>
                    <Portrait src = {hikingportrait}></Portrait>
                </PhotoWrapper>
                
            </PortraitWrapper>

        </HomeColor>
    )
}

export default AboutPortraits;