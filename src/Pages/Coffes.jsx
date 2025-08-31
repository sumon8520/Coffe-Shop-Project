import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Coffes = () => {

    const data = useLoaderData();
    const [coffes, setCoffes] = useState(data);

    const handleBySort = (sortBy) => {
        if (sortBy === 'rating') {
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
            setCoffes(sorted);
        }
        else if (sortBy === 'popularity') {
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffes(sorted);
        }
    }

    return (
        <div className='my-10'>
            <div className='flex justify-between items-center text-2xl font-bold'>
                <div>
                    <h2>Sort By Rating & Popularity </h2>
                </div>
                <div className='space-x-5 space-y-4 md:space-y-0'>
                    <button onClick={() => handleBySort('rating')} className='btn btn-warning font-medium'>Sort By Rating</button>
                    <button onClick={() => handleBySort('popularity')} className='btn btn-warning font-medium'>Sort By Popularity</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    coffes.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffes;