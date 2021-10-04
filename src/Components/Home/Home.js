import React from 'react';
import Hero from '../../HeroPart/Hero';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
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