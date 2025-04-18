import React from 'react';
import banner from '../assets/banner.png';

const Hero = () => {
    return (
        <div className='py-12'>
            <img className='w-full mx-auto md:max-w-md' src={banner} alt="banner image" />
        </div>
    );
};

export default Hero;