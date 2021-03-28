import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const EditNews = () => {
    const { id } = useParams();
    const history = useHistory();
    console.log(id);
    const [newsDetails, setNewsDetails] = useState({
        newsSite: '',
        authorName: '',
        title: '',
        image: '',
        summary: ''
    });

    useEffect(() => {
        fetch(`http://localhost:5000/editNews/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                setNewsDetails(data[0])
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }, [])

    console.log(newsDetails);

    const handleBlur = (event) => {
        const newsInfo = { ...newsDetails };
        newsInfo[event.target.name] = event.target.value;
        setNewsDetails(newsInfo);
    }

    const handleReset = (event) => {
        event.preventDefault();
        setNewsDetails({
            newsSite: '',
            authorName: '',
            title: '',
            image: '',
            summary: ''
        })
        document.getElementById('newsSite').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('image').value = '';
        document.getElementById('summary').value = '';
    }

    const handleUpdateNews = (event, id) => {
        event.preventDefault();

        fetch(`http://localhost:5000/updateNews/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newsDetails)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
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
            <h2 className='my-3'>Edit News</h2>
            <form>
                <div className="form-group">
                    <input type="text" name="newsSite" id="newsSite" placeholder='Enter News Site Name' defaultValue={newsDetails.newsSite} onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="authorName" id="authorName" placeholder='Enter News Author Name' defaultValue={newsDetails.authorName} onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="title" id="title" placeholder='Enter News Title' defaultValue={newsDetails.title} onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="image" id="image" placeholder='Enter Image Link' defaultValue={newsDetails.image} onBlur={handleBlur} className='form-control' />
                </div>

                <div className="form-group">
                    <textarea name="summary" id="summary" cols="30" rows="5" className='form-control' placeholder='Enter News Summary' defaultValue={newsDetails.summary} onBlur={handleBlur} required></textarea>
                </div>

                <div className="form-group">
                    <Button variant='success' onClick={(event) => handleUpdateNews(event, newsDetails._id)}>
                        Update
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant='danger' onClick={handleReset}>
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditNews;