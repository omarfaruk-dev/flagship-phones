import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { FaCartPlus } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utility/localStorage';
import { CartContext } from '../components/providers/Contexts';

const PhoneDetails = () => {
    const { setCart } = useContext(CartContext);

    const data = useLoaderData();
    const { phoneId } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(phoneId))

    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info, } = singlePhone || {};

    const handleFavorite = () => {
        addFavorite(singlePhone);
    }
    const handleCart = () => {
        addToCart(singlePhone);
        setCart(getCart())
    }

    return (
        <div className='w-full py-12'>
            <img src={image} className='w-full mx-auto md:w-auto mb-8 rounded-lg' alt='' />
            <div className='flex justify-between'>
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div className='space-x-2'>
                    <Button
                        onClick={() => handleCart(singlePhone)}
                        label={<FaCartPlus />}
                    />
                    <Button
                        onClick={() => handleFavorite(singlePhone)}
                        label={<MdBookmarkAdd />}
                    />
                </div>
            </div>
            <div className='space-y-4'>
                <h2 className='font-thin text-4xl'>Details: </h2>
                <p>
                    <span className='font-bold'>Brand:</span> {brand}
                </p>
                <p>
                    <span className='font-bold'>Model:</span> {model}
                </p>
                {/* Storage Info */}
                <div className='flex gap-1'>
                    <p className='font-bold'>Storage:</p>
                    <div>
                        {
                            storage.map(item=> <div key={item}><div>{item}</div></div>)
                        }
                    </div>
                </div>
                {/* Price info */}
                <div className='flex gap-1'>
                    <p className='font-bold'>Price:</p>
                    <div>
                        {Object.entries(price).map(([storage, price]) => (
                            <p key={storage} className=''>
                                <span>{storage}:</span> <span>{price}</span>
                            </p>
                        ))}
                    </div>
                </div>
                <p>
                    <span className='font-bold'>Camera Info:</span> {camera_info}
                </p>
                <p>
                    <span className='font-bold'>Description:</span> {description}
                </p>
            </div>
        </div>
    );
};

export default PhoneDetails;