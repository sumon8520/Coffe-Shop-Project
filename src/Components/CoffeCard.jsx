import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeCard = () => {
    const {category} = useParams() ;
    const data = useLoaderData();
    const [coffe, setCoffe] = useState([]);
    const nav = useNavigate();

    useEffect( () => {
       if (category) {
         const coffeFilterByCategory = [...data].filter(coffe => coffe.category === category);
        setCoffe(coffeFilterByCategory);
       }

       else {
        setCoffe(data);
       }
    },[category, data] );

    return (
        <div className='my-10'>
           <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
             {
                coffe.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
            }
           </div>
            
            <button className='btn btn-warning' onClick={ () => nav('/coffes') }>View All</button>
        </div>
    );
};

export default CoffeCard;