import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nution from '../assets/nutrition.png'
import { addFavorite} from '../utilities/localStorage';

const CoffeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [coffe, setCoffe] = useState({});
    const {name, image, description, rating, popularity, making_process, ingredients=[]} = coffe;
    
    const handleFavorite = coffik => {
        addFavorite(coffik);
    }

    useEffect(() => {
        const singleData = data.find(item => item.id == id);
        setCoffe(singleData);
    }, [data, id]);

    return (
        <div className='border-2 border-gray-700 p-10 rounded-lg my-7 overflow-hidden'>
            <h2 className='text-2xl font-italic font-thin mt-10 mb-4'>{description}</h2>
            <img className='mb-2 rounded-2xl md:h-[500px] lg:h-[700px] w-full h-full' src={image} alt="" />

            <div className='flex justify-between my-4 items-center'>
                <div>
                    <h6 className='text-xl font-thin'>{name}</h6>
                    <p className='font-medium mb-1'>{popularity}</p>
                    <p className='font-medium mb-1'>{rating}</p>
                </div>
                <div>
                    <button onClick={ () => handleFavorite(coffe) } className='btn btn-warning'>Add Favorite</button>
                </div>
            </div>
            <p className='my-4'><span className='text-xl font-thin'>Making Process:</span> <br /> <span className='font-medium'>{making_process}</span></p>

            <div className='flex justify-between items-center'>
                <div>
            <h2 className='text-xl font-thin:'>Ingredients</h2>
            {
                ingredients?.map((item, idx) => <li key={idx}>{item}</li>)

            }
                </div>
              <img className='md:h-[500px] w-full h-full md:w-[600px]' src={nution} alt="" />
            </div>
        </div>
    );
};

export default CoffeDetails;