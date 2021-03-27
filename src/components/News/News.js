import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setNews(data)
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }, [])
    return (
        <div className='news-area'>
            <div className="container row">
                {
                    news.map(item => <NewsDetails key={item._id} item={item}></NewsDetails>)
                }               
            </div>
        </div>
    );
};

export default News;