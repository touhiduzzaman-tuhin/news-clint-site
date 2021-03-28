import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import newsImage from '../../images/news-image.jpeg';

const NewsDetails = ({ item }) => {
    const { title, summary, image, _id } = item;
    return (
        <div className='col-6 col-md-6 col-lg-4'>
            <div>
                <Card style={{ width: '100%', backgroundColor: '#3C444D', minHeight : '480px', margin: '20px' }}>
                    <Card.Img variant="top" src={image || newsImage} height='250px'/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {summary.substr(0, 100)}
                        </Card.Text>
                        <Link to={`/news/${_id}`}>
                            <Button variant="primary">
                                Find Out More &nbsp; &nbsp; &nbsp;
                                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </Button>
                        </Link>                       
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default NewsDetails;