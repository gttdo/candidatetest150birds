import React from 'react';
import styled from 'styled-components';

const NavItemsList = styled.ul`
margin: 0 0 0 10%;
height: 126px;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const NavItem = styled.li`
font-size: 1.666vw;
font-weight: 600;

@media screen and (max-width: 415px){
    font-size: 3vw;
}
`;

const NavItemSpan = styled.span`
&:active, &:hover, &.active{
    color: #FFC83E;
}
`;

const navItemsArray = [
    { name: 'Service', active: false },
    { name: 'Dashboard', active: false },
    { name: 'Conference', active: false },
    { name: 'Profile', active: false },
    { name: 'Settings', active: true }
];


const NavItems = () => {
    const navItem = navItemsArray.map((item, idx) => (
        <NavItem key={idx}><NavItemSpan className={item.active ? 'active' : ''}>{item.name}</NavItemSpan></NavItem>
    ));
    return (
        <NavItemsList>
            {navItem}
        </NavItemsList>
    )
}

export default NavItems
