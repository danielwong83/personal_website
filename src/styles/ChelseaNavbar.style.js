import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

import '../App.css'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 90px;
    background: #034694;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #dba111;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    color: #dba111;
    font-size: x-large;
    font-family: 'Megrim';
    text-decoration: none;
    margin: 15px;

    &:hover {
        color: #dba111;
        font-weight: bold;
    }

    &.active {
        color: #dba111;
        font-weight: bold;
    }

`

export const Logo = styled.img`
    margin: 10px;
    height: 55px;
    width: auto;

`