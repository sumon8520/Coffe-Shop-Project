import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [coffe, setCoffe] = useState({});
    const { name, image, category, origin, type, description, rating, popularity} = coffe ;

    useEffect( () => {
     const singleData =   data.find(item => item.id == id);
        setCoffe(singleData);
    },[data, id] );

    return (
        <div className='border-2 border-gray-700 p-10 rounded-lg my-7'>
            <h2 className='text-2xl font-italic mt-10 mb-4'>{description}</h2>
            <img className='mb-2 rounded-2xl' src={image} alt="" />
            <h6 className='font-medium'>{name}</h6>
            <p className='font-medium mb-1'>{popularity}</p>
            <p className='font-medium mb-1'>{rating}</p>
            <p className='font-medium mb-1'>{origin}</p>
            <p className='font-medium mb-1'>{type}</p>
            <p className='font-medium mb-1'>{category}</p>
        </div>
    );
};

export default CoffeDetails;