import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { device } from '../device';
import { GradientButton, SmallerGradientButton } from './Buttons';
import { HashLink as HashLink } from 'react-router-hash-link';

const StyledNavbar = styled(Navbar)`
    font-size: ${props => props.theme.remSpacing(1.25)};
    @media ${device.min.mobile} {
        font-size: ${props => props.theme.remSpacing(2)};
    }
`;

const StyledBrand = styled(Navbar.Brand)`
    font-size: ${props => props.theme.remSpacing(1.25)};
    @media ${device.min.mobile} {
        font-size: ${props => props.theme.remSpacing(2.5)};
    }
`;

const LogoLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;

const NavLinks = styled(Navbar.Collapse)`
    @media ${device.min.tablet} {
        justify-content: flex-end;
    }
`;

const StyledNav = styled(Nav)`
    align-items: center;
`;



const MobileBookNow = styled(Nav.Link)`
    @media ${device.min.mobile} {
        display: none;
    }
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const NavBar = () => {
    return (
        <StyledNavbar collapseOnSelect expand="lg" bg="light" variant="light">
            <StyledBrand><LogoLink to="/">Kris Kross</LogoLink></StyledBrand>
            <MobileBookNow href="/classes"><SmallerGradientButton>Book Now</SmallerGradientButton></MobileBookNow>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <NavLinks id="responsive-navbar-nav">
                <StyledNav>
                    <Nav.Link smooth as={HashLink} to="/#about">About</Nav.Link>
                    <Nav.Link as={Link} eventKey={2} to="/classes">Classes</Nav.Link>
                    <Nav.Link as={Link} to="/classes"><GradientButton>Book Now</GradientButton></Nav.Link>
                </StyledNav>
            </NavLinks>
        </StyledNavbar>
    );
};

export default NavBar;