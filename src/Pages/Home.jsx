import React from 'react';
import Banner from '../Components/Banner';
import Heading from './Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Heading tittle={'Brose Coffes By Category'} subTittle={'Choose Your Coffe Category To Browse '}></Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;