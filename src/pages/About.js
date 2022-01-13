import React from "react";

import {AboutMe, 
        AboutMeWrapper, 
        DescriptionOne, 
        DescriptionTwo, 
        HomeColor, 
        ListValue, 
        PortraitWrapper, 
        Portrait, 
        SocialWrapper, 
        GmailImg,
        LinkedinImg,
        ATag,
        LichessImg,
        GithubImg} from '../styles/About.style'

import resume from '../files/resume.pdf'
import portrait from '../images/portrait.png'
import gmailpic from '../images/gmail.svg'
import linkedinpic from '../images/linkedin.svg'
import githubpic from '../images/github.svg'
import lichesspic from '../images/lichess.svg'

const linkedin = "https://www.linkedin.com/in/daniel-wong83/"
const gmail = "daniel.wong121@imperial.ac.uk"
const github = "https://github.com/danielwong83"
const lichess = "https://lichess.org/@/danielwong4"


function About(){
    return (
        <HomeColor>
            <AboutMeWrapper>
                <AboutMe>About Me</AboutMe>
                <DescriptionOne>Hi, my name's Daniel, I'm from Hong Kong and I'm currently studying a Masters in Risk
                Management and Financial Engineering at Imperial College London. I am interested in internship and graduate
                positions in quant trading, research and data science.</DescriptionOne>
                
                
                <DescriptionTwo>Some fun facts about me:</DescriptionTwo>
                <ListValue>{'\u2022'} Favorite football team is Chelsea. KTBFFH. </ListValue>
                <ListValue>{'\u2022'} d4 over e4 any day. </ListValue>
                <ListValue>{'\u2022'} I sometimes replace rice with canned corn. </ListValue>
                <ListValue>{'\u2022'} Favorite champion on League is Lillia. </ListValue>
                <ListValue>{'\u2022'} One of my drawings appeared in a children's newspaper when I was 9. </ListValue>
                <ListValue>{'\u2022'} I want to go skydiving. </ListValue>

                <DescriptionTwo>Feel free to message me! My contact info is below and this is my {' '}
                    <a href= {resume} target='_blank' rel='noopener noreferrer'>
                        resume</a>.</DescriptionTwo>
                
                <SocialWrapper>
                    <ATag href = {linkedin} target='_blank' rel='noopener noreferrer'><LinkedinImg src={linkedinpic}/></ATag>
                    <ATag href = {`mailto:${gmail}`} target='_blank' rel='noopener noreferrer'><GmailImg src={gmailpic}/></ATag>
                    <ATag href = {github} target='_blank' rel='noopener noreferrer'><GithubImg src={githubpic}/></ATag>
                    <ATag href = {lichess} target='_blank' rel='noopener noreferrer'><LichessImg src={lichesspic}/></ATag>       
                </SocialWrapper>

            </AboutMeWrapper>
            
            
            <PortraitWrapper>
                <Portrait src = {portrait}></Portrait>
            </PortraitWrapper>

        

        </HomeColor>
    )
}

export default About;