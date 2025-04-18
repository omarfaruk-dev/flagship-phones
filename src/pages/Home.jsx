import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    // data load
    const data = useLoaderData();
    const [phones, setPhones] = useState(data)

    const handleSearch = (e, text) => {
        e.preventDefault(text);

        if(text === '') return setPhones (data);

        const searchedPhones =
            data.filter(phone =>
                phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
                phone?.brand?.toLowerCase().includes(text.toLowerCase())
            )
        setPhones(searchedPhones);
        console.log(searchedPhones);
    }


    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <PhonesContainer phones={phones} />
        </div>
    );
};

export default Home;