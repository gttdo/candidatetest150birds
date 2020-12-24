import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideMenu = () => {

    const SideMenuContainer = styled.div`
        background-color: #F2F4F7;
        border-radius: 25px;
        width: 15vw;
        height: 592px;
        padding: 21px 18px 0 18px;
        margin-right: 16px;
    `;

    const MenuItemHeader = styled.h2`
        color: #5A85FF;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        margin: 0px 0 20px;
    `;

    const MenuItem = styled.li`
        font-size: 18px;
        color: inherit;
        font-weight: 600;
        line-height: 27px;
        margin-bottom: 15px;
    `;

    return (
        <SideMenuContainer>
                <MenuItemHeader>Billing</MenuItemHeader>
                <ul>
                    <MenuItem><Link to='/settings/billingmethod'>Billing Methods</Link></MenuItem>
                    <MenuItem><Link to='/settings/transaction'>Transaction</Link></MenuItem>
                </ul>
                <MenuItemHeader>User Settings</MenuItemHeader>
                <ul>
                    <MenuItem>Account Information</MenuItem>
                    <MenuItem>Contact Info</MenuItem>
                    <MenuItem>Notification Settings</MenuItem>
                </ul>
                <MenuItemHeader>Help &amp; Support</MenuItemHeader>
                <ul>
                    <MenuItem>Help Center</MenuItem>
                    <MenuItem>Help Community</MenuItem>
                    <MenuItem>Support Inbox</MenuItem>
                    <MenuItem>Report a Problem</MenuItem>
                </ul>
        </SideMenuContainer>
    )
}

export default SideMenu
