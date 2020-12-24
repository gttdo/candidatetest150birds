import React from 'react';
import styled from 'styled-components';

const NavItems = () => {

    const NavItems = styled.ul`
        margin: 0 0 0 156px;
        height: 126px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    `;

    const NavItem = styled.li`
        font-size: 1.5rem;
        font-weight: 600;
    `;

    const NavItemSpan = styled.span`
        &:active, &:hover, &.active{
            color: #FFC83E;
        }
    `;

    const navItemsArray = [
        {name: 'Service', active: false}, 
        {name: 'Dashboard', active: false}, 
        {name: 'Conference', active: false},
        {name: 'Profile', active: false},
        {name: 'Settings', active: true}
    ];

    const navItem = navItemsArray.map((item, idx) => (
        <NavItem key={idx}><NavItemSpan className={item.active ? 'active' : ''}>{item.name}</NavItemSpan></NavItem>
    ));

    return (
        <NavItems>
                {navItem}
        </NavItems>
    )
}

export default NavItems
