import {NavbarContainer, 
    NavbarLink,
    Logo
} from '../styles/ChelseaNavbar.style'

import chelseapic from '../images/chelsea.svg'

function ChelseaNavBar(){
    return(
        <NavbarContainer>
                <NavbarLink to="/project" >Back
                </NavbarLink>
                <Logo src = {chelseapic}></Logo>
        </NavbarContainer>
        
    )
}

export default ChelseaNavBar;