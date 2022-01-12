import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

import '../App.css'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 90px;
    background: linear-gradient(3deg, rgba(255,252,244,1) 0%, rgba(255,252,244,1) 35%, rgba(255,252,243,1) 47%, 
    rgba(251,242,219,1) 64%, rgba(0,255,222,1) 100%);
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #e0e0e0;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3%;

`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;

`

export const NavbarLinkContainer = styled.div`
    display: flex;

`


export const NavbarLink = styled(NavLink)`
    color: #4F5254;
    font-size: x-large;
    font-family: 'Megrim';
    text-decoration: none;
    margin: 15px;

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
    margin: 10px;
    height: 71px;

`

export const ATag = styled.a`
    display: flex;
`

export const NavbarExtendedContainer = styled.div`
`

