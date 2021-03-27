import React from 'react';
import Banner from '../Banner/Banner';
import CopyRight from '../CopyRight/CopyRight';
import Footer from '../Footer/Footer';
import News from '../News/News';

const Home = () => {
    return (
        <div className="" align='center'>
            <Banner></Banner>
            <News></News>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Home;