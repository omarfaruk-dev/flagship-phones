import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-132px)] max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;