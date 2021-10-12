import React from 'react';

import Courses from '../Courses/Courses';
import Hero from '../HeroPart/Hero';

import Teachers from '../Teachers/Teachers';
import Welcome from '../Welcome-part/Welcome';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Welcome></Welcome>
            <Courses></Courses>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;