import React from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.png';
import NavItems from './NavItems';

const Navbar = () => {
    const Nav = styled.nav`
        background-color: #F2F4F7;
        position: relative;
        height: 126px;
        
    `;

    const Logo = styled.img`
        position: absolute;
        left: 31px;
        top: 10px;
    `;


    return (
        <Nav>
            <Logo src={logo}/>
            <NavItems/>
        </Nav>
    )
}

export default Navbar
