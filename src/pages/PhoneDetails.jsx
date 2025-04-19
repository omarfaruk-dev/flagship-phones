import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { FaCartPlus } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utility/localStorage';
import { CartContext } from '../components/providers/Contexts';

const PhoneDetails = () => {
    const {setCart} = useContext(CartContext);

    const data = useLoaderData();
    const { phoneId } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(phoneId))

    const { name, image } = singlePhone || {};

    const handleFavorite = () => {
        addFavorite(singlePhone);
    }
    const handleCart = () => {
        addToCart(singlePhone);
        setCart(getCart())
    }

    return (
        <div className='w-full py-12'>
            <img className='w-full mx-auto md:w-auto mb-8' src={image} alt="banner image" />
            {/* Title and button */}
            <div className='flex justify-between items-center'>
                <h2 className='text-6xl font-thin mb-8'>{name}</h2>
                <div className='space-x-4'>
                    <Button onClick={handleCart} label={<FaCartPlus />}  />
                    <Button onClick={handleFavorite} label={<MdBookmarkAdd size={20} />} />
                </div>
            </div>
            {/* Details post */}
            <div>

            </div>
        </div>
    );
};

export default PhoneDetails;