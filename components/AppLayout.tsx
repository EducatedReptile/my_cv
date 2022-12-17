import React from 'react';
import AppHead from './AppHead';

export interface AppLayoutProps {
    headerContent: React.ReactNode;
    mainContent: React.ReactNode;
    footerContent: React.ReactNode;
}

function AppLayout({headerContent, mainContent, footerContent}: AppLayoutProps) {
    return (
        <div className="container">
            <AppHead/>
            {headerContent}
            {mainContent}
            {footerContent}
        </div>
    );
}

export default AppLayout;
