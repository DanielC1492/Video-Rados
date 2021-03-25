import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MoviePoster from '../../components/MoviePoster/MoviePoster'
import './Home.css'

const Home = () => {
    return (
        <div className='homeDiv'>
            <Header/>
            Vista home del maravilloso mundo de RADOS
            <MoviePoster/>
            <Footer />
        </div>
    );
};

export default Home