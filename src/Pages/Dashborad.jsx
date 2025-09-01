import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { getAllFavorites, removeFavorite } from '../utilities/localStorage';
import Card from '../Components/Card';

const Dashborad = () => {

    const [coffes, setcoffes] = useState([]);

    useEffect(() => {
        const favorites = getAllFavorites();
        setcoffes(favorites);
    }, [])

    const handleRemove = id => {
        removeFavorite(id);
        const favorites = getAllFavorites();
        setcoffes(favorites);
    }
    return (
        <div>
            <Heading tittle={'WelCome To DashBorad'} subTittle={'Choose Your Coffe Category To Browse'}>

            </Heading>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    coffes.map(coffe => <Card key={coffe.id} coffe={coffe} handleRemove={handleRemove}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashborad