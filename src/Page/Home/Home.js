import React from 'react';
import Banner from './Banner/Banner';
import Review from './Review/Review';
import Item1 from './Item1/Item1';
import Item2 from './Item2/Item2';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Item2></Item2>
            <Item1></Item1>
            <Review></Review>
        </div>
    );
};

export default Home;