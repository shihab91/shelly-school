import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/CodePen-404-Page.gif';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Link to='/home'>
                <img src={img} alt="" />
            </Link>
            <Link to="/home">
                <button className="border rounded-pill mt-5 view-all-btn">Go to home<i className="fas ms-2 fs-4 fa-home "></i></button>
            </Link>
        </div>
    );
};

export default NotFound;