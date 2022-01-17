import {NavbarContainer, 
    LeftContainer, 
    RightContainer, 
    NavbarInnerContainer, 
    NavbarLinkContainer,
    NavbarLink,
    Logo
} from '../styles/ChelseaNavbar.style'

import chelseapic from '../images/chelsea.svg'

function ChelseaNavBar(){
    return(
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/about" >Back</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src = {chelseapic}></Logo>
                </RightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
        
    )
}

export default ChelseaNavBar