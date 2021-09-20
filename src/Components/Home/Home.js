import React from 'react';
import AllBlog from '../AllBlog/AllBlog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <section>
            <Header />
            <AllBlog />
            <Footer />
        </section>
    );
};

export default Home;