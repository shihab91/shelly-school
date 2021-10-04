import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/CodePen-404-Page.gif';
const NotFound = () => {
    return (
        <div>
            <Link to='/home'>
                <img src={img} alt="" />
            </Link>
        </div>
    );
};

export default NotFound;