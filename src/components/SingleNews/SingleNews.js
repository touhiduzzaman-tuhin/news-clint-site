import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleNews.css';

const SingleNews = () => {
    const { id } = useParams();
    const history = useHistory();
    // console.log(id);
    const [singleNews, setSingleNews] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-escarpment-34687.herokuapp.com/news/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                setSingleNews(data[0]);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }, [])
    console.log(singleNews);
    const { authorName, title, newsSite, summary, image, _id } = singleNews;
    const [name, setName] = useState('');
    const [site, setSite] = useState('');

    const handleDeleteNews = (event, id) => {
        // console.log('Delete Click');
        console.log(id);
        fetch(`https://gentle-escarpment-34687.herokuapp.com/deleteNews/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    event.target.parentNode.style.display = 'none';
                    history.push('/');
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className='container' align='center'>
            <div className='single-news-area'>
                <h3 className='my-2'>{title}</h3>
                <img className='w-50' src={image} alt="" />
                <p>{summary}</p>
                <h5>Published By - {name}</h5>
                <h5>Published At - {site}</h5>
                <Button variant='success' onClick={() => setName(authorName)}>
                    Show Author Name
                </Button>
                &nbsp; &nbsp;
                <Button variant='dark' onClick={() => setSite(newsSite)}>
                    Show Site Name
                </Button>
                <br /> <br />
                <Button variant='danger' onClick={(event) => handleDeleteNews(event, _id)}>
                    Delete News
                </Button>
                &nbsp; &nbsp;
                <Link to={`/editNews/${_id}`}>
                    <Button variant='warning'>
                        Edit News
                    </Button>
                </Link>
            </div>

            <div className="newsUpdate">

            </div>
        </div>
    );
};

export default SingleNews;