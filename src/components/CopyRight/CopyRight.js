import React from 'react';
import './CopyRight.css';

const CopyRight = () => {
    return (
        <div className='copy-right-area'>
            <div className="container row">
                <div className="col-6 col-lg-8">
                    <p align='left'>Copyright © 2018 Grada. All rights reserved.</p>
                </div>
                <div className="col-3 col-lg-2">
                    <p>Terms & Conditions</p>
                </div>
                <div className="col-3 col-lg-2">
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default CopyRight;