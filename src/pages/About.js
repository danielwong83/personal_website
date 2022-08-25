import React, {Component} from "react";

import {AboutMe, 
        AboutMeWrapper, 
        DescriptionOne, 
        DescriptionTwo, 
        HomeColor, 
        ListValue, 
        Portrait, 
        SocialWrapper, 
        GmailImg,
        LinkedinImg,
        ATag,
        LichessImg,
        GithubImg,
        ChelseaTag,
        PortraitWrapper,
        PhotoWrapper,
        ContentWrapper} from '../styles/About.style'

import portrait from '../images/portrait-beach-blue.png'
import chessportrait from '../images/chess-photo.png'
import hikingportrait from '../images/hiking.png'
import gmailpic from '../images/gmail.svg'
import linkedinpic from '../images/linkedin.svg'
import githubpic from '../images/github.svg'
import lichesspic from '../images/lichess.svg'

const linkedin = "https://www.linkedin.com/in/daniel-wong83/"
const gmail = "daniel.wong121@imperial.ac.uk"
const github = "https://github.com/danielwong83"
const lichess = "https://lichess.org/@/danielwong4"


class About extends Component{

    constructor(props) {
        super(props);
        this.state = {
          images: [
            portrait, chessportrait, hikingportrait
          ],
          selectedImage: portrait
        };
      }

    componentDidMount() {
      setInterval(() => {
        this.setState(prevState => {
          if (prevState.selectedImage === this.state.images[0]) {
            return {
              selectedImage: this.state.images[1]
            };
          } else if (prevState.selectedImage === this.state.images[1]){
              return {
                selectedImage: this.state.images[2]
              };
          } else {
            return {
              selectedImage: this.state.images[0]
            };
          }
        });
      }, 6500);
    }

    render(){
    return (
        <HomeColor>

          <ContentWrapper>

            <AboutMeWrapper>

                <AboutMe>About Me</AboutMe>
                
                <DescriptionOne>Hi, my name's Daniel, I'm from Hong Kong and I've currently graduated from Imperial College London with a Masters in
                Risk Management and Financial Engineering. I'm interested in internship and graduate
                roles in data science/engineering as well as quant trading/developing.</DescriptionOne>
                
                <DescriptionTwo>Some fun facts about me:</DescriptionTwo>
                <ListValue>{'\u2022'} Favorite football team is <ChelseaTag href= "/#/chelsea">Chelsea</ChelseaTag>. KTBFFH. </ListValue>
                {/* <ListValue>{'\u2022'} d4 over e4 any day. </ListValue>
                <ListValue>{'\u2022'} I sometimes replace rice with canned corn. </ListValue> */}
                <ListValue>{'\u2022'} Favorite champion on League is Nocturne. </ListValue>
                <ListValue>{'\u2022'} One of my drawings appeared in a children's newspaper when I was 9. </ListValue>
                <ListValue>{'\u2022'} I want to go skydiving. </ListValue>

                <DescriptionTwo>Feel free to message me! My contact info is below.</DescriptionTwo>
                
                <SocialWrapper>
                    <ATag href = {linkedin} target='_blank' rel='noopener noreferrer'><LinkedinImg src={linkedinpic}/></ATag>
                    <ATag href = {`mailto:${gmail}`} target='_blank' rel='noopener noreferrer'><GmailImg src={gmailpic}/></ATag>
                    <ATag href = {github} target='_blank' rel='noopener noreferrer'><GithubImg src={githubpic}/></ATag>
                    <ATag href = {lichess} target='_blank' rel='noopener noreferrer'><LichessImg src={lichesspic}/></ATag>       
                </SocialWrapper>

              </AboutMeWrapper>
        
            <PortraitWrapper>
                <PhotoWrapper>
                    <Portrait src = {this.state.selectedImage}></Portrait>
                </PhotoWrapper>
            </PortraitWrapper>

          </ContentWrapper>

            
        </HomeColor>
    )

}}

export default About;