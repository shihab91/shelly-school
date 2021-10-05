import React from 'react';

import Courses from '../Courses/Courses';
import Hero from '../HeroPart/Hero';

import Teachers from '../Teachers/Teachers';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;