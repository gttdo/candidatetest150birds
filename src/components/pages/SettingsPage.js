import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from '../core/SideMenu';
import Console from '../core/Console';

const Container = styled.div`
display: flex;
margin: 44px auto 44px 31px;

@media screen and (max-width: 1024px){
    margin: 44px 15px;
}
`;

const SettingsView = () => {
    return (
        <Router>
            <Container>
                <SideMenu />
                <Console />
            </Container>
        </Router>
    )
}

export default SettingsView
