import React from 'react'
import photo from '../images/logo_no_background.png'

import {NavbarContainer, 
    LeftContainer, 
    RightContainer, 
    NavbarInnerContainer, 
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    ATag,
} from '../styles/Navbar.style'


function NavBar(){
    return(
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <ATag href = "/">
                        <Logo src={photo}></Logo>
                    </ATag>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/" >Home</NavbarLink>
                        <NavbarLink to="/project" >Projects</NavbarLink>
                        <NavbarLink to="/about" >About</NavbarLink>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
        
    )
}

export default NavBar
  