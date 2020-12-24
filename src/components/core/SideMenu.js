import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideMenuContainer = styled.div`
    background-color: #F2F4F7;
    border-radius: 25px;
    width: 17.36vw;
    height: 592px;
    padding: 21px 18px 0 18px;
    margin-right: 16px;
`;

const MenuItemHeader = styled.h2`
    color: #5A85FF;
    font-size: 1.666vw;
    font-weight: 600;
    line-height: 36px;
    margin: 0px 0 20px;

    @media screen and (max-width: 415px){
        font-size: 3.2vw;
        margin: 0;
        line-height: 20px;
    }
`;

const MenuItemList = styled.ul`
    @media screen and (max-width: 415px){
        padding: 0;
    }
`;

const MenuItem = styled.li`
    font-size: 1.25vw;
    color: inherit;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 15px;

    @media screen and (max-width: 415px){
        font-size: 2.5vw;
        line-height: 17px;
    }
`;

const SideMenu = () => {
    return (
        <SideMenuContainer>
            <MenuItemHeader>Billing</MenuItemHeader>
            <MenuItemList>
                <MenuItem><Link to='/settings/billingmethod'>Billing Methods</Link></MenuItem>
                <MenuItem><Link to='/settings/transaction'>Transaction</Link></MenuItem>
            </MenuItemList>
            <MenuItemHeader>User Settings</MenuItemHeader>
            <MenuItemList>
                <MenuItem>Account Information</MenuItem>
                <MenuItem>Contact Info</MenuItem>
                <MenuItem>Notification Settings</MenuItem>
            </MenuItemList>
            <MenuItemHeader>Help &amp; Support</MenuItemHeader>
            <MenuItemList>
                <MenuItem>Help Center</MenuItem>
                <MenuItem>Help Community</MenuItem>
                <MenuItem>Support Inbox</MenuItem>
                <MenuItem>Report a Problem</MenuItem>
            </MenuItemList>
        </SideMenuContainer>
    )
}

export default SideMenu
