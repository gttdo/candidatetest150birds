import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import NavItems from './NavItems';

const Nav = styled.nav`
background-color: #F2F4F7;
position: relative;
height: 126px;
width: 100%;
`;

const Logo = styled.img`
position: absolute;
left: 1.5%;
top: 8%;

@media screen and (max-width: 415px){
    width: 20%
}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo src={logo} />
            <NavItems />
        </Nav>
    )
}

export default Navbar
