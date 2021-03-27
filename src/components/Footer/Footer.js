import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import news from '../../images/news.jpg'

const Footer = () => {
    return (
        <div className='footer-area py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 col-lg-4">
                        <img className='w-25' src={news} alt=""/>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore pariatur distinctio iusto fugit repellat aperiam quidem atque omnis eos est!</h6>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                        <h3 className='my-3'>COMPANY</h3>
                        <Link to='/'>
                            <p>About Us</p>
                        </Link>
                        <Link to='/'>
                            <p>Our Services</p>
                        </Link>
                        <Link to='/'>
                            <p>The Team</p>
                        </Link>
                        <Link to='/'>
                            <p>Investors</p>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                        <h3 className='my-3'>RESOURCES</h3>
                        <Link to='/'>
                            <p>News & Inside</p>
                        </Link>
                        <Link to='/'>
                            <p>Documentation</p>
                        </Link>
                        <Link to='/'>
                            <p>Downloads</p>
                        </Link>
                        <Link to='/'>
                            <p>Knowledge Base</p>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                        <h3 className='my-3'>SUPPORT</h3>
                        <Link to='/'>
                            <p>Contact Us</p>
                        </Link>
                        <Link to='/'>
                            <p>FAQs</p>
                        </Link>
                        <Link to='/'>
                            <p>Live Chat</p>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                        <h3 className='my-3'>RESOURCES</h3>
                        <Link to='/'>
                            <p>
                                Twitter
                            </p>
                        </Link>
                        <Link to='/'>
                            <p>
                                Facebook
                            </p>
                        </Link>
                        <Link to='/'>
                            <p>
                                Dribble
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;