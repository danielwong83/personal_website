import React from "react";

import {HomeColor, 
        Portrait, 
        PhotoWrapperOne,
        PhotoWrapperTwo,
        PhotoWrapperThree,
        PortraitWrapperOne} from '../styles/AboutPortraits.style'

import portrait from '../images/portrait-beach-blue.png'
import chessportrait from '../images/chess-photo.png'
import hikingportrait from '../images/hiking.png'



function AboutPortraits(){
    return (
        <HomeColor>
            <PortraitWrapperOne>
                <PhotoWrapperThree>
                    <Portrait src = {chessportrait}></Portrait>
                </PhotoWrapperThree>

                <PhotoWrapperTwo>
                    <Portrait src = {portrait}></Portrait>
                </PhotoWrapperTwo>

                <PhotoWrapperOne>
                    <Portrait src = {hikingportrait}></Portrait>
                </PhotoWrapperOne>
                
            </PortraitWrapperOne>

        </HomeColor>
    )
}

export default AboutPortraits;