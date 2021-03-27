import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import newsData from '../../fakeData/newsData';

const AddFakeData = () => {
    const history = useHistory();

    const handleAddFakeNews = () => {
        fetch('http://localhost:5000/addFakeNews', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newsData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            history.push('/');
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    return (
        <div align='center' className='container'>
            <Button className='my-5' variant='success' onClick={handleAddFakeNews}>
                Add Fake News
            </Button>
        </div>
    );
};

export default AddFakeData;