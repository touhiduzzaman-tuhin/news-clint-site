import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const CreateNews = () => {
    const history = useHistory();
    const [newsData, setNewsData] = useState({
        newsSite: '',
        authorName: '',
        title: '',
        image: '',
        summary: ''
    });

    const handleBlur = (event) => {
        const newsInfo = { ...newsData };
        newsInfo[event.target.name] = event.target.value;
        setNewsData(newsInfo);
    }

    const handleReset = (event) => {
        event.preventDefault();
        setNewsData({
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

    const handleCreateNews = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/addSingleNews', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newsData)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                history.push('/');
            }
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })

        // history.push('/');

    }

    return (
        <div className='container' align='center'>
            <h2 className='my-3'>Create News</h2>
            <form>
                <div className="form-group">
                    <input type="text" name="newsSite" id="newsSite" placeholder='Enter News Site Name' onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="authorName" id="authorName" placeholder='Enter News Author Name' onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="title" id="title" placeholder='Enter News Title' onBlur={handleBlur} className='form-control' required />
                </div>

                <div className="form-group">
                    <input type="text" name="image" id="image" placeholder='Enter Image Link' onBlur={handleBlur} className='form-control'/>
                </div>

                <div className="form-group">
                    <textarea name="summary" id="summary" cols="30" rows="5" className='form-control' placeholder='Enter News Summary' onBlur={handleBlur} required></textarea>
                </div>

                <div className="form-group">
                    <Button variant='success' onClick={handleCreateNews}>
                        Save
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant='danger' onClick={handleReset}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateNews;