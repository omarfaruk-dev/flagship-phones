import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';

const PhoneDetails = () => {

    const data = useLoaderData();
    const { phoneId } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(phoneId))

    const { name, image, brand, model, price, description, storage, camera_info } = singlePhone || {};

    console.log(singlePhone);

    return (
        <div className='w-full py-12'>
            <img className='w-full mx-auto md:w-auto mb-8' src={image} alt="banner image" />
            <div className='flex justify-between items-center'>
                <h2 className='text-6xl font-thin mb-8'>{name}</h2>
                <div className='space-x-3'>
                    <Button label='Cart'/>
                    <Button label='Favorite'/>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;