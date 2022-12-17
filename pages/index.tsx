import React from 'react';
import AppHeader from '../components/sections/AppHeader';
import AppLayout from '../components/AppLayout';
import HomeContent from '../components/HomeContent';
import AppFooter from '../components/sections/AppFooter';

export default function Home() {
    return (
        <AppLayout headerContent={<AppHeader/>} mainContent={<HomeContent/>} footerContent={<AppFooter/>}/>
    )
};
