import { faClock, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-area'>
            <h4 className='py-3'>Category</h4>
            <h1>Lorem Ipsum Dolor <br/> Sit Amet Consectetur</h1>
            <h5>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> &nbsp;
                Jan 12th, 2018 &nbsp; &nbsp;
                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> &nbsp;
                25 Customers
            </h5>
        </div>
    );
};

export default Banner;