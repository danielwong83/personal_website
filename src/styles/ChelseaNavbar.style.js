import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import '../App.css'

export const NavbarContainer = styled.nav`
    background: #004495;
    display: flex;
    border-bottom: 2px solid #dba111;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const NavbarLink = styled(NavLink)`
    color: #dba111;
    font-size: 1.4rem;
    font-family: 'Megrim';
    text-decoration: none;
    margin: 15px;
`

export const Logo = styled.img`
    height: 55px;
    padding: 0.9rem 0;
    width: auto;
    margin-right: 1rem;

    @media (max-width: 768px){
        height: 34px;
        margin-right: 0.5rem;
    }

`