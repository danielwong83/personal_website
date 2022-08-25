import React, {useState, useEffect} from 'react'
import photo from '../images/logo_no_background.png'

import {NavbarContainer, 
    NavbarLink,
    NavbarLinkContainer,
    NavWordsWrapper,
    Logo,
    ATag,
    Hamburger,
    SliderWrapper,
    SliderBox,
    SliderLabel
} from '../styles/Navbar.style'

import useLocalStorage from 'use-local-storage';

const Navbar = ({switchTheme}) => {
    

    const [isOpen, setIsOpen] = useState(false);

    const defaultDarkChecked = window.matchMedia('(prefers-check-scheme: true)').matches;
    const [checked, setChecked] = useLocalStorage('checked', defaultDarkChecked ? true : false);
    const switchChecked = () => {
      const newChecked = checked === false ? true : false;
      setChecked(newChecked);
    }
    useEffect(() => {
      document.documentElement.setAttribute("data-checked", checked);
    }, [checked]);



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
                    <SliderBox id="checkbox" type="checkbox" onClick={switchTheme} checked={!checked} onChange={switchChecked}/>
                    <SliderLabel htmlFor="checkbox" />
                </SliderWrapper>
            </NavbarLinkContainer>
                    
        </NavbarContainer>
        
    )
};



export default Navbar;

