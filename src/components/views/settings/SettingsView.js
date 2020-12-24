import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from '../../layout/SideMenu';
import Console from '../../layout/Console';

const SettingsView = () => {
    const Container = styled.div`
        display: flex;
        margin: 44px 63px 44px 31px;
    `;

    return (
        <Router>
            <Container>
                <SideMenu/>
                <Console/>
            </Container>
        </Router>
    )
}

export default SettingsView
