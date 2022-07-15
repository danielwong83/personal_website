import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import '../App.css'

export const NavbarContainer = styled.nav`
    background: linear-gradient(27deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(198,255,255,1) 100%);
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #D1D1D1;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    flex-wrap: wrap;
`

export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-right: 1rem;

    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        padding-right: 0;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.2s ease-in;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-right: 1rem;

    span{
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px){
        display: flex;
    }
`


export const NavbarLink = styled(NavLink)`
    color: grey;
    font-size: 1.4rem;
    font-family: 'Megrim';
    text-decoration: none;
    flex-direction: column;
    padding: 0.4rem 1rem;

    &:hover {
        color: black;
        font-weight: bold;
    }

    &.active {
        color: black;
        font-weight: bold;
    }

`

export const Logo = styled.img`
    height: 71px;
    user-select: none;
    padding: 0.4rem 0;
    margin-left: 1rem;

`

export const ATag = styled.a`
    display: flex;
`


