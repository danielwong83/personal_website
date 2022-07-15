import React, {useState} from 'react'
import photo from '../images/logo_no_background.png'

import {NavbarContainer, 
    NavbarLink,
    NavbarLinkContainer,
    Logo,
    ATag,
    Hamburger
} from '../styles/Navbar.style'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavbarContainer>
                    <ATag href = "/">
                        <Logo src={photo}></Logo>
                    </ATag>
                    <Hamburger onClick={() => setIsOpen(!isOpen)}>
                        <span/>
                        <span/>
                        <span/>
                    </Hamburger>
                    <NavbarLinkContainer isOpen = {isOpen}>
                        <NavbarLink to="/" onClick={() => setIsOpen(false)}>Home</NavbarLink>
                        <NavbarLink to="/project" onClick={() => setIsOpen(false)}>Projects</NavbarLink>
                        <NavbarLink to="/about" onClick={() => setIsOpen(false)}>About</NavbarLink>
                    </NavbarLinkContainer>
        </NavbarContainer>
        
    )
};



export default Navbar;

