import React, {useState, useEffect} from 'react'
import photo from '../images/logo_no_background.png'

import {NavbarContainer, 
    NavbarLink,
    NavbarLinkContainer,
    Logo,
    ATag,
    Hamburger,
    SliderWrapper,
    SliderBox,
    SliderLabel
} from '../styles/Navbar.style'

import useLocalStorage from 'use-local-storage';

const Navbar = ({switchTheme, darkMode }) => {
    

    const [isOpen, setIsOpen] = useState(false);

    const switchChecked = () => {
        switchTheme();
      };
    
      useEffect(() => {
        document.documentElement.setAttribute('data-checked', darkMode);
      }, [darkMode]);



    return(
        <NavbarContainer>
            <ATag href = "/">
                <Logo src={photo}></Logo>
            </ATag>
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <NavbarLinkContainer isOpen = {isOpen}>
                <NavbarLink to="/" onClick={() => setIsOpen(false)}>Home</NavbarLink>
                
                <NavbarLink to="/project" onClick={() => setIsOpen(false)}>Projects</NavbarLink>
                <NavbarLink to="/about" onClick={() => setIsOpen(false)}>About</NavbarLink>
                <SliderWrapper>
                    <SliderBox id="checkbox" type="checkbox" onClick={switchChecked} checked={darkMode} onChange={switchChecked}/>
                    <SliderLabel htmlFor="checkbox" />
                </SliderWrapper>
            </NavbarLinkContainer>
                    
        </NavbarContainer>
        
    )
};



export default Navbar;

