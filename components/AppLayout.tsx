import React from 'react';
import AppHead from './AppHead';
import {Container} from '@mui/material';

export interface AppLayoutProps {
    headerContent: React.ReactNode;
    mainContent: React.ReactNode;
    footerContent: React.ReactNode;
}

function AppLayout({headerContent, mainContent, footerContent}: AppLayoutProps) {
    return (
        <Container>
            <AppHead/>
            {headerContent}
            {mainContent}
            {footerContent}
        </Container>
    );
}

export default AppLayout;
