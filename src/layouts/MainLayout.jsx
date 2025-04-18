import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <div className='min-h-[calc(100vh-132px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default MainLayout;