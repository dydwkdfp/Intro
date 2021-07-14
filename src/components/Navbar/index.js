import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home' smooth={true} duration={500} spy={true}>Jaemin</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" smooth={true} duration={500} spy={true}>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio" smooth={true} duration={500} spy={true}>
                                portfolio
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
