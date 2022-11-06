import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import '../App.css'

export const NavbarContainer = styled.nav`
    background: ${props => props.theme.navbarBackground};
    background-image: url(${props => props.theme.backgroundImage});
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #D1D1D1;
    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16); */
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
    margin-right: 0.5rem;

    span{
        height: 2px;
        width: 20px;
        background: ${props => props.theme.textColor};
        margin-bottom: 4px;
        border-radius: 4px;
        transform-origin: 1.5px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'}
        }

        &:nth-child(2) {
            transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ isOpen }) => isOpen ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (max-width: 768px){
        display: flex;
    }
`

// export const NavWordsWrapper = styled.div`
//     display: flex;
//     background: ${props => props.theme.projectDiv};
//     width: 100%;
//     border-radius: 15px;
//     height: 20%;
//     align-items: center;
//     justify-content: center;

//     /* @media (max-width: 768px){
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         width: 80%;
//     } */
// `



export const NavbarLink = styled(NavLink)`
    color: ${props => props.theme.textColor};
    font-size: 1.4rem;
    font-family: 'Megrim';
    text-decoration: none;
    flex-direction: column;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;

    &:hover {
        font-weight: bold;
    }

    &.active {
        font-weight: bold;
        background: ${props => props.theme.projectDiv};
        border-radius: 13px;
    }

    @media (max-width: 768px){

        &.active{
            background: none;
        }
    }

    

`

export const Logo = styled.img`
    height: 71px;
    user-select: none;
    padding: 0.4rem 0;
    margin-left: 0.8rem;

    @media (max-width: 768px){
        margin-left: 0;
        height: 50px;
    }

`

export const ATag = styled.a`
    display: flex;
`

export const SliderWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 5px;

    @media (max-width: 768px){
    top: -6px;
    margin-left: -3px;
    margin-right: 0px;
    }
`

export const SliderLabel = styled.label`
  position: absolute;
  top: 15px;
  left: 4px;
  width: 39px;
  height: 20px;
  border-radius: 15px;
  background: #C6FFFF;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin: -1px;
    background: radial-gradient(circle, rgba(241,255,12,1) 0%, rgba(255,182,25,1) 100%);
    box-shadow: 0px 0px 10px 2px yellow;
    transition: 0.2s;
  }


`;
export const SliderBox = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 35px;
  height: 20px;
  &:checked + ${SliderLabel} {
    background: #0D003D;
    &::after {
      content: "";
      display: block;
      background: #0D003D;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 19px;
      margin-top: 1px;
      box-shadow: inset -6px -2.5px 1px 0px #fff000;
      transition: 0.3s;
    }
  }

`;

