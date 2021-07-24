import React from 'react';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks} from './NavbarElements';

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home' smooth={true} duration={500} spy={true}>Jaemin</NavLogo>
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
                                Portfolio
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
