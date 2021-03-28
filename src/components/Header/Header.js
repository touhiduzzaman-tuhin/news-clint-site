import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/news.jpg';

const Header = () => {
    return (
        <div className='bg-dark'>
            <h5 className='container pt-3' align='right'>
                Facebook &nbsp; &nbsp; Twitter
            </h5>
            <h2 className='text-white' align='center'>
                <img style={{width : '50px'}} src={image} alt=""/>
                <br/>
                News
            </h2>
            <Navbar className="" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to='/'>HOME</Nav.Link>
                        <Nav.Link as={Link} to='/work'>WORK</Nav.Link>
                        <Nav.Link as={Link} to='/about'>ABOUT</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>BLOG</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>CONTACT</Nav.Link>
                        <Nav.Link as={Link} to='/addFakeData'>ADD FAKE NEWS</Nav.Link>
                        <Nav.Link as={Link} to='/createNews'>CREATE NEWS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;