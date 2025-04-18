import React, { useState } from 'react';
import banner from '../assets/banner.png';

const Hero = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('');
    console.log(searchText);

    return (
        <div className='py-12'>
            <img className='w-full mx-auto md:max-w-md' src={banner} alt="banner image" />
            <div className='text-center space-y-4'>
                <h1 className='font-thin text-7xl text-gray-900'>Browse, Search, View, Buy</h1>
                <p className='text-gray-500'>Best place to browse, search, view details and purchase of top flagship phones <br />
                    of the current time - Flagship Phones

                </p>
                <form onSubmit={e => {
                    handleSearch(e, searchText)
                    //reset input state
                    setSearchText('')
                }} className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                    <input value={searchText} onChange={e => setSearchText(e.target.value)} className=' bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 focus:outline-none focus:shadow-outline md:mr-2' type="text" placeholder='Search Phone by Name' />
                    <button type='submit' className="relative inline-block text-lg group cursor-pointer">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Button Text</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Hero;